import Link from 'next/link';

export default function CongDongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-purple-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6 vietnamese-text">👥 Cộng đồng</h1>
        <div className="space-y-4">
          
          {/* Friends Section */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">👫 Bạn bè</h2>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-bold text-readable vietnamese-text">An</p>
                    <p className="text-sm text-readable-light">Điểm: 250</p>
                  </div>
                </div>
                <div className="text-2xl">🥇</div>
              </div>
              
              <div className="bg-white p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <p className="font-bold text-readable vietnamese-text">Bình</p>
                    <p className="text-sm text-readable-light">Điểm: 180</p>
                  </div>
                </div>
                <div className="text-2xl">🥈</div>
              </div>
              
              <div className="bg-white p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div>
                    <p className="font-bold text-readable vietnamese-text">Lan</p>
                    <p className="text-sm text-readable-light">Điểm: 150</p>
                  </div>
                </div>
                <div className="text-2xl">⭐</div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="mobile-btn bg-purple-500 text-white hover:bg-purple-600 vietnamese-text">
                Thêm bạn bè
              </button>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">🏆 Bảng xếp hạng tuần</h2>
            
            <div className="space-y-2">
              {[
                { name: 'Minh', score: 320, rank: 1, avatar: 'M', color: 'bg-yellow-500' },
                { name: 'Hoa', score: 280, rank: 2, avatar: 'H', color: 'bg-gray-400' },
                { name: 'Đức', score: 260, rank: 3, avatar: 'Đ', color: 'bg-orange-400' },
                { name: 'Lan', score: 150, rank: 4, avatar: 'L', color: 'bg-blue-500' },
                { name: 'Tú', score: 120, rank: 5, avatar: 'T', color: 'bg-green-500' }
              ].map((user) => (
                <div key={user.name} className={`p-3 rounded-lg flex items-center justify-between ${
                  user.rank === 4 ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white'
                }`}>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                      <span className="text-sm font-bold">{user.rank}</span>
                    </div>
                    <div className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center mr-3`}>
                      <span className="text-white text-sm font-bold">{user.avatar}</span>
                    </div>
                    <div>
                      <p className="font-bold text-readable vietnamese-text">{user.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">{user.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">⚡ Thử thách cộng đồng</h2>
            
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-red-400 to-red-500 p-4 rounded-lg text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold vietnamese-text">🔥 Thử thách tuần</h3>
                  <span className="text-sm bg-white text-red-500 px-2 py-1 rounded-full font-bold">3 ngày</span>
                </div>
                <p className="text-sm vietnamese-text">Hoàn thành 20 bài học trong tuần</p>
                <div className="mt-2 bg-white bg-opacity-30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-xs mt-1">12/20 bài học</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-lg text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold vietnamese-text">🌟 Thử thách nhóm</h3>
                  <span className="text-sm bg-white text-green-500 px-2 py-1 rounded-full font-bold">Mới</span>
                </div>
                <p className="text-sm vietnamese-text">Cùng bạn bè đạt 1000 điểm</p>
                <div className="mt-2 bg-white bg-opacity-30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-xs mt-1">750/1000 điểm</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center space-x-2">
            <Link href="/" className="mobile-btn bg-purple-500 text-white hover:bg-purple-600 vietnamese-text">
              🏠 Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
