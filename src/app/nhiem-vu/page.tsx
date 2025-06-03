import Link from 'next/link';

export default function NhiemVuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white text-center mb-6">🎯 Nhiệm vụ</h1>
        <div className="bg-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">LỘ TRÌNH HỌC</h2>

          <div className="flex items-center justify-between mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                📍
              </div>
              <span className="text-xs">Ngữ âm</span>
            </div>

            <div className="flex-1 h-1 bg-gray-300 mx-2">
              <div className="h-1 bg-blue-500 w-1/2"></div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                📍
              </div>
              <span className="text-xs text-white">Từ vựng</span>
            </div>

            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                📍
              </div>
              <span className="text-xs">Câu đơn</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm">Hoàn thành bài học cơ bản</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-sm">Đang học từ vựng mới</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>
              <span className="text-sm">Chưa mở khóa</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              ← Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
