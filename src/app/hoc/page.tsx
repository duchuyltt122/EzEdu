import Link from 'next/link';

export default function HocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6 vietnamese-text">Học</h1>
        <div className="space-y-4">
          <div className="bg-yellow-200 mobile-card">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">Chọn kỹ năng học:</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/hoc/nghe" className="mobile-btn bg-blue-500 text-white hover:bg-blue-600 text-center min-h-[60px] flex items-center justify-center vietnamese-text">
                🎧 Nghe
              </Link>
              <Link href="/hoc/noi" className="mobile-btn bg-green-500 text-white hover:bg-green-600 text-center min-h-[60px] flex items-center justify-center vietnamese-text">
                🗣️ Nói
              </Link>
              <Link href="/hoc/doc" className="mobile-btn bg-orange-500 text-white hover:bg-orange-600 text-center min-h-[60px] flex items-center justify-center vietnamese-text">
                📖 Đọc
              </Link>
              <Link href="/hoc/viet" className="mobile-btn bg-purple-500 text-white hover:bg-purple-600 text-center min-h-[60px] flex items-center justify-center vietnamese-text">
                ✏️ Viết
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link href="/" className="mobile-btn bg-blue-500 text-white hover:bg-blue-600 vietnamese-text">
                🏠 Trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
