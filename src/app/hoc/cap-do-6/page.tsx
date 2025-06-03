import Link from 'next/link';

export default function CapDo6Page() {
  const lessons = [
    {
      id: 1,
      title: "Bài học 1",
      description: "Sáng tạo câu chuyện mới",
      completed: false
    },
    {
      id: 2,
      title: "Bài học 2", 
      description: "Phản biện ý kiến khác",
      completed: false
    },
    {
      id: 3,
      title: "Bài học 3",
      description: "Viết văn sáng tạo tự do",
      completed: false
    },
    {
      id: 4,
      title: "Bài học 4",
      description: "Đánh giá và nhận xét",
      completed: false
    },
    {
      id: 5,
      title: "Bài học 5",
      description: "Tạo nội dung độc đáo",
      completed: false
    },
    {
      id: 6,
      title: "Bài học 6",
      description: "Ôn tập và kiểm tra",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 to-indigo-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6 vietnamese-text">Cấp độ 6</h1>
        <p className="text-white text-center mb-6 vietnamese-text opacity-90">Sáng tạo nội dung, phản biện</p>
        
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/hoc/cap-do-6/bai-${lesson.id}`}>
              <div className={`mobile-card transition-all duration-200 shadow-lg border-2 border-yellow-300 ${
                lesson.completed 
                  ? 'bg-yellow-100 hover:bg-yellow-200' 
                  : 'bg-white hover:bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-readable vietnamese-text mb-1">{lesson.title}</h2>
                    <p className="text-sm text-readable-light vietnamese-text">{lesson.description}</p>
                  </div>
                  <div className="ml-4">
                    {lesson.completed ? (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">✓</span>
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-lg">○</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          <div className="mt-6 text-center space-x-2">
            <Link href="/hoc" className="mobile-btn bg-indigo-500 text-white hover:bg-indigo-600 vietnamese-text">
              ← Quay lại
            </Link>
            <Link href="/" className="mobile-btn bg-gray-500 text-white hover:bg-gray-600 vietnamese-text">
              🏠 Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
