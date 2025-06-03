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
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-readable vietnamese-text">Xin chào Lan!</h2>
                <p className="text-sm text-readable-light vietnamese-text">Hôm nay con làm tốt rồi đó.</p>
                <p className="text-sm text-readable-light vietnamese-text">Mình cùng luyện thêm phần ngữ pháp nhé?</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="mobile-btn bg-yellow-500 text-white hover:bg-yellow-600 flex-1 min-w-[140px]">
                Luyện bài bổ sung
              </button>
              <button className="mobile-btn bg-orange-500 text-white hover:bg-orange-600 flex-1 min-w-[140px]">
                Thử thách cao hơn
              </button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h3 className="text-lg font-bold text-readable vietnamese-text mb-3">BIỂU ĐỒ TIẾN ĐỘ HỌC</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-readable vietnamese-text">Đọc</span>
                  <span className="text-sm font-bold text-blue-600">75%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-readable vietnamese-text">Viết</span>
                  <span className="text-sm font-bold text-blue-600">45%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full transition-all duration-500" style={{width: '45%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-readable vietnamese-text">Ngữ pháp</span>
                  <span className="text-sm font-bold text-blue-600">30%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full transition-all duration-500" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <ul className="text-sm space-y-2 vietnamese-text">
                <li className="text-readable-light">• Cần luyện thêm viết mạch lạc.</li>
                <li className="text-readable-light">• Đọc hiểu đang tiến bộ rất tốt!</li>
              </ul>
            </div>
          </div>

          {/* Learning Path Section */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h3 className="text-lg font-bold text-readable vietnamese-text mb-3">LỘ TRÌNH HỌC</h3>

            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-1">
                  📍
                </div>
                <span className="text-xs vietnamese-text text-readable">Ngữ âm</span>
              </div>

              <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full">
                <div className="h-2 bg-blue-500 w-1/2 rounded-full transition-all duration-500"></div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-1">
                  📍
                </div>
                <span className="text-xs text-white vietnamese-text font-medium">Từ vựng</span>
              </div>

              <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full"></div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-1">
                  📍
                </div>
                <span className="text-xs vietnamese-text text-readable">Câu đơn</span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Link href="/hoc" className="block">
              <div className="bg-blue-500 mobile-card text-center hover:bg-blue-600 transition-all duration-200 shadow-lg min-h-[100px] flex flex-col justify-center">
                <div className="text-4xl mb-2">📚</div>
                <p className="text-white font-bold text-lg vietnamese-text">Học</p>
              </div>
            </Link>

            <Link href="/tien-do" className="block">
              <div className="bg-green-500 mobile-card text-center hover:bg-green-600 transition-all duration-200 shadow-lg min-h-[100px] flex flex-col justify-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-white font-bold text-lg vietnamese-text">Tiến độ</p>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/phan-thuong" className="block">
              <div className="bg-orange-500 mobile-card text-center hover:bg-orange-600 transition-all duration-200 shadow-lg min-h-[100px] flex flex-col justify-center">
                <div className="text-4xl mb-2">🏆</div>
                <p className="text-white font-bold text-lg vietnamese-text">Phần thưởng</p>
              </div>
            </Link>

            <Link href="/cong-dong" className="block">
              <div className="bg-purple-500 mobile-card text-center hover:bg-purple-600 transition-all duration-200 shadow-lg min-h-[100px] flex flex-col justify-center">
                <div className="text-4xl mb-2">👥</div>
                <p className="text-white font-bold text-lg vietnamese-text">Cộng đồng</p>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
