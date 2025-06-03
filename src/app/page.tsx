import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-yellow-300">
      {/* Header */}
      <header className="bg-blue-500 px-4 py-3 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">🤖</span>
          </div>
          <h1 className="text-white text-2xl font-bold">EZ-Edu</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-4">

          {/* Welcome Section */}
          <div className="bg-yellow-100 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Xin chào Lan!</h2>
                <p className="text-sm text-gray-600">Hôm nay con làm tốt rồi đó.</p>
                <p className="text-sm text-gray-600">Mình cùng luyện thêm phần ngữ pháp nhé?</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-yellow-600">
                Luyện bài bổ sung
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600">
                Thử thách cao hơn
              </button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-yellow-100 rounded-2xl p-4 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-3">BIỂU ĐỒ TIẾN ĐỘ HỌC</h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Đọc</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Viết</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Ngữ pháp</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <ul className="text-sm space-y-1">
                <li>• Cần luyện thêm viết mạch lạc.</li>
                <li>• Đọc hiểu đang tiến bộ rất tốt!</li>
              </ul>
            </div>
          </div>

          {/* Learning Path Section */}
          <div className="bg-yellow-100 rounded-2xl p-4 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-3">LỘ TRÌNH HỌC</h3>

            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-1">
                  📍
                </div>
                <span className="text-xs">Ngữ âm</span>
              </div>

              <div className="flex-1 h-1 bg-gray-300 mx-2">
                <div className="h-1 bg-blue-500 w-1/2"></div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-1">
                  📍
                </div>
                <span className="text-xs text-white">Từ vựng</span>
              </div>

              <div className="flex-1 h-1 bg-gray-300 mx-2"></div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-1">
                  📍
                </div>
                <span className="text-xs">Câu đơn</span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="grid grid-cols-3 gap-3">
            <Link href="/hoc" className="block">
              <div className="bg-blue-500 rounded-2xl p-4 text-center hover:bg-blue-600 transition-colors shadow-lg">
                <div className="text-3xl mb-2">📚</div>
                <p className="text-white font-bold">Học</p>
              </div>
            </Link>

            <Link href="/tien-do" className="block">
              <div className="bg-green-500 rounded-2xl p-4 text-center hover:bg-green-600 transition-colors shadow-lg">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-white font-bold">Tiến độ</p>
              </div>
            </Link>

            <Link href="/nhiem-vu" className="block">
              <div className="bg-orange-500 rounded-2xl p-4 text-center hover:bg-orange-600 transition-colors shadow-lg">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-white font-bold">Nhiệm vụ</p>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
