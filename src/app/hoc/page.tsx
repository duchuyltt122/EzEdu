import Link from 'next/link';

export default function HocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white text-center mb-6">Học</h1>
        <div className="space-y-4">
          <div className="bg-yellow-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Chọn kỹ năng học:</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/hoc/nghe" className="bg-blue-500 text-white p-3 rounded-lg text-center hover:bg-blue-600">
                🎧 Nghe
              </Link>
              <Link href="/hoc/noi" className="bg-green-500 text-white p-3 rounded-lg text-center hover:bg-green-600">
                🗣️ Nói
              </Link>
              <Link href="/hoc/doc" className="bg-orange-500 text-white p-3 rounded-lg text-center hover:bg-orange-600">
                📖 Đọc
              </Link>
              <Link href="/hoc/viet" className="bg-purple-500 text-white p-3 rounded-lg text-center hover:bg-purple-600">
                ✏️ Viết
              </Link>
            </div>
            <div className="mt-4 text-center">
              <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2">
                🏠 Trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
