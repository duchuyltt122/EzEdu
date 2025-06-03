export default function VietPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white text-center mb-6">✏️ Viết</h1>
        <div className="bg-yellow-200 rounded-lg p-4">
          <p className="text-center text-gray-700">
            Kỹ năng viết đang được phát triển...
          </p>
          <div className="mt-4 text-center space-x-2">
            <a href="/hoc" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              ← Quay lại
            </a>
            <a href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              🏠 Trang chủ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
