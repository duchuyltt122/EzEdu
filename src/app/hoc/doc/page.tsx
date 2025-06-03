import Link from 'next/link';

export default function DocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white text-center mb-6">📖 Đọc</h1>
        <div className="bg-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Trò chơi đọc hiểu:</h2>
          <div className="space-y-3">
            <Link href="/hoc/doc/games/quiz" className="block bg-blue-500 text-white p-3 rounded-lg text-center hover:bg-blue-600">
              🧩 Câu đố
            </Link>
            <Link href="/hoc/doc/games/word-assembly" className="block bg-green-500 text-white p-3 rounded-lg text-center hover:bg-green-600">
              🔤 Ghép chữ
            </Link>
            <Link href="/hoc/doc/games/block-stacking" className="block bg-orange-500 text-white p-3 rounded-lg text-center hover:bg-orange-600">
              🧱 Xếp gạch
            </Link>
          </div>
          <div className="mt-4 text-center space-x-2">
            <Link href="/hoc" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              ← Quay lại
            </Link>
            <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              🏠 Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
