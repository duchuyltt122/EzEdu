import Link from 'next/link';

export default function TienDoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white text-center mb-6">📊 Tiến độ</h1>
        <div className="bg-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">BIỂU ĐỒ TIẾN ĐỘ HỌC</h2>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Đọc</span>
                <span className="text-sm">75%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Viết</span>
                <span className="text-sm">45%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Ngữ pháp</span>
                <span className="text-sm">30%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <ul className="text-sm space-y-1">
              <li>• Cần luyện thêm viết mạch lạc.</li>
              <li>• Đọc hiểu đang tiến bộ rất tốt!</li>
            </ul>
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
