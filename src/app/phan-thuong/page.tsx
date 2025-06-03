import Link from 'next/link';

export default function PhanThuongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-orange-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6 vietnamese-text">🏆 Phần thưởng</h1>
        <div className="space-y-4">
          
          {/* Achievements Section */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">🎖️ Thành tích đã đạt được</h2>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-lg text-center">
                <div className="text-2xl mb-1">🥇</div>
                <p className="text-xs font-bold text-white vietnamese-text">Học giỏi</p>
                <p className="text-xs text-yellow-100">Hoàn thành 10 bài</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-lg text-center">
                <div className="text-2xl mb-1">📚</div>
                <p className="text-xs font-bold text-white vietnamese-text">Đọc sách</p>
                <p className="text-xs text-blue-100">Đọc 5 câu chuyện</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-lg text-center">
                <div className="text-2xl mb-1">⭐</div>
                <p className="text-xs font-bold text-white vietnamese-text">Siêu sao</p>
                <p className="text-xs text-green-100">Đạt 100 điểm</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-3 rounded-lg text-center">
                <div className="text-2xl mb-1">🎯</div>
                <p className="text-xs font-bold text-white vietnamese-text">Chính xác</p>
                <p className="text-xs text-purple-100">100% đúng 5 lần</p>
              </div>
            </div>
          </div>

          {/* Rewards Collection */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">🎁 Kho phần thưởng</h2>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🌟</div>
                  <div>
                    <p className="font-bold text-readable vietnamese-text">Ngôi sao vàng</p>
                    <p className="text-sm text-readable-light">Có 15 ngôi sao</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-yellow-600">15</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">💎</div>
                  <div>
                    <p className="font-bold text-readable vietnamese-text">Kim cương</p>
                    <p className="text-sm text-readable-light">Có 3 viên kim cương</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">3</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🎈</div>
                  <div>
                    <p className="font-bold text-readable vietnamese-text">Bóng bay</p>
                    <p className="text-sm text-readable-light">Có 8 bóng bay</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Rewards */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">📅 Phần thưởng hàng ngày</h2>
            
            <div className="grid grid-cols-7 gap-2">
              {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, index) => (
                <div key={day} className={`p-2 rounded-lg text-center ${
                  index < 3 ? 'bg-green-500 text-white' : 
                  index === 3 ? 'bg-blue-500 text-white' : 
                  'bg-gray-300 text-gray-600'
                }`}>
                  <div className="text-xs font-bold vietnamese-text">{day}</div>
                  <div className="text-lg">{index < 3 ? '✅' : index === 3 ? '🎁' : '📦'}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <button className="mobile-btn bg-blue-500 text-white hover:bg-blue-600 vietnamese-text">
                Nhận thưởng hôm nay
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center space-x-2">
            <Link href="/" className="mobile-btn bg-orange-500 text-white hover:bg-orange-600 vietnamese-text">
              🏠 Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
