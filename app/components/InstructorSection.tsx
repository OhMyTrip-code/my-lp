'use client'

const instructors = [
  {
    name: '上田 航',
    title: 'AI教育スペシャリスト',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: '元Google Japan',
    experience: 'AI×教育分野で10年',
    specialties: ['AI活用教育', '探究学習設計', 'STEAMプログラム'],
    achievements: [
      'AI教育分野での豊富な指導経験',
      '子どもたちの好奇心を育む教育メソッド開発',
      '個別最適化学習プログラムの設計'
    ],
    philosophy: '「なぜ？」から始まる学びを、AIで無限に広げることができます。子どもたちの好奇心を大切に、一人ひとりの探究心を育んでいきます。',
    seminar: '探究心と好奇心をAIで広げる'
  },
  {
    name: '上田 航',
    title: '英語教育コンサルタント',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=150&h=150&fit=crop&crop=face',
    background: 'TESOL認定講師',
    experience: '英語教育15年、AI活用5年',
    specialties: ['AI英語学習', '発音指導', '英検対策'],
    achievements: [
      'AI英語学習システムの教育設計',
      '効果的な英語学習メソッドの開発',
      '国際的な教育技術研究への参画'
    ],
    philosophy: 'AIと人の温かさを組み合わせることで、本当に"使える英語"が身につきます。試験対策だけでなく、世界とつながる英語力を育てます。',
    seminar: 'AI時代の家庭学習メニュー設計'
  },
  {
    name: '上田 航',
    title: '東京大学工学部4年・代表',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: '現役東大生・運営代表',
    experience: 'AI学習法研究3年',
    specialties: ['効率学習法', 'AI活用勉強術', '受験対策'],
    achievements: [
      'AI学習システムの効果的活用法を研究',
      '効率的な学習メソッドの開発と実践',
      '学生向け学習支援活動の推進'
    ],
    philosophy: '勉強は「時間」ではなく「質」で決まります。AIを味方につけることで、誰でも効率的に成績を上げることができると確信しています。',
    seminar: 'AI×勉強効率化'
  }
]

export default function InstructorSection() {
  return (
    <section id="instructors" className="py-24 bg-gradient-to-b from-[#eceff1] to-[#f3f8fc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1.5 bg-red-100 text-red-600 text-sm font-bold rounded-full">東大生が運営</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            経験豊富な講師陣
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            東大生を中心とした各分野のスペシャリストが、お子様の学びをサポートします
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.name}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-[#0073e6] font-semibold mb-2">{instructor.title}</p>
                <div className="flex flex-col gap-1 text-sm text-gray-600">
                  <span>{instructor.background}</span>
                  <span>{instructor.experience}</span>
                </div>
              </div>

              {/*担当セミナー */}
              <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                <p className="text-sm font-semibold text-[#0073e6] mb-1">担当セミナー</p>
                <p className="text-sm text-gray-800">{instructor.seminar}</p>
              </div>

              {/* 専門分野 */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">専門分野</h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* 実績 */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">主な実績</h4>
                <ul className="space-y-2">
                  {instructor.achievements.slice(0, 2).map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg className="w-3 h-3 text-[#0073e6] mr-2 mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3"/>
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 指導理念 */}
              <div className="p-4 bg-gray-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">指導理念</h4>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{instructor.philosophy}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}