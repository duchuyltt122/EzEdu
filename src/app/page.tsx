import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-400">
      {/* Header */}
      <header className="bg-blue-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">🤖</span>
          </div>
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">🤖</span>
          </div>
          <h1 className="text-white text-2xl font-bold ml-2">Edu</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Title Section */}
          <div className="bg-cream rounded-2xl p-6 mb-6 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Trò chơi<br />tương tác
            </h2>

            {/* Game Cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* Ghép chữ Game */}
              <Link href="/games/word-assembly" className="block">
                <div className="bg-green-400 rounded-xl p-4 text-center hover:bg-green-500 transition-colors">
                  <div className="mb-3">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="flex justify-center gap-1">
                      <div className="w-6 h-6 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                      <div className="w-6 h-6 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">E</div>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    Ghép<br />chữ
                  </p>
                </div>
              </Link>

              {/* Xếp gạch Game */}
              <Link href="/games/block-stacking" className="block">
                <div className="bg-blue-400 rounded-xl p-4 text-center hover:bg-blue-500 transition-colors">
                  <div className="mb-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-6 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">T</div>
                      <div className="w-6 h-6 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">U</div>
                      <div className="w-6 h-6 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">D</div>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    Xếp<br />gạch
                  </p>
                </div>
              </Link>

              {/* Câu đố Game */}
              <Link href="/games/quiz" className="block">
                <div className="bg-yellow-400 rounded-xl p-4 text-center hover:bg-yellow-500 transition-colors">
                  <div className="mb-3">
                    <div className="text-3xl mb-2">❓</div>
                    <div className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
                      Câu đố
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    Câu đố
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
