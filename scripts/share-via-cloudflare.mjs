#!/usr/bin/env node
import { execSync, spawn } from 'node:child_process'
import http from 'node:http'

const port = parseInt(process.argv[2] || '3000', 10)
const url = `http://127.0.0.1:${port}`

function hasCmd(cmd) {
  try {
    if (process.platform === 'win32') {
      execSync(`where ${cmd}`, { stdio: 'ignore' })
    } else {
      execSync(`command -v ${cmd}`, { stdio: 'ignore' })
    }
    return true
  } catch {
    return false
  }
}

function checkLocalServer(u, timeoutMs = 1500) {
  return new Promise((resolve) => {
    const req = http.get(u, { timeout: timeoutMs }, (res) => {
      res.destroy()
      resolve(true)
    })
    req.on('timeout', () => {
      req.destroy()
      resolve(false)
    })
    req.on('error', () => resolve(false))
  })
}

async function main() {
  if (!hasCmd('cloudflared')) {
    console.error('\n[!] cloudflared が見つかりません。以下のいずれかでインストールしてください:')
    if (process.platform === 'darwin') {
      console.error('  macOS:   brew install cloudflared')
    } else if (process.platform === 'win32') {
      console.error('  Windows: winget install Cloudflare.cloudflared  または  choco install cloudflared')
    } else {
      console.error('  Linux:   sudo apt-get install cloudflared  または  公式バイナリを使用')
    }
    process.exit(1)
  }

  const isUp = await checkLocalServer(url)
  if (!isUp) {
    console.log(`[i] ${url} が未起動のようです。先に別ターミナルで開発サーバーを起動してください:`)
    console.log('   npm run dev   (または  npm run dev:3001 ならこのスクリプトも 3001 を指定)\n')
  }

  console.log(`[i] Cloudflare トンネルを開始します → ${url}`)
  console.log('    発行される https://*.trycloudflare.com をチームに共有してください。\n')
  const child = spawn('cloudflared', ['tunnel', '--url', url], { stdio: 'inherit' })
  child.on('exit', (code) => {
    console.log(`\n[i] cloudflared 終了 (code: ${code ?? 'null'})`)
  })
}

main().catch((e) => {
  console.error('[!] 予期せぬエラー:', e?.message || e)
  process.exit(1)
})

