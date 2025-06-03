'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Level {
  id: number;
  word: string;
  image: string;
  blocks: string[];
  correctOrder: number[];
  hint: string;
}

const levels: Level[] = [
  { id: 1, word: 'MẸ', image: '👩', blocks: ['Ẹ', 'M'], correctOrder: [1, 0], hint: 'Người sinh ra bạn' },
  { id: 2, word: 'BỐ', image: '👨', blocks: ['Ố', 'B'], correctOrder: [1, 0], hint: 'Người cha của bạn' },
  { id: 3, word: 'NHÀ', image: '🏠', blocks: ['À', 'H', 'N'], correctOrder: [2, 1, 0], hint: 'Nơi bạn sống' },
  { id: 4, word: 'CHÓ', image: '🐕', blocks: ['Ó', 'H', 'C'], correctOrder: [2, 1, 0], hint: 'Con vật trung thành' },
  { id: 5, word: 'MÈO', image: '🐱', blocks: ['O', 'È', 'M'], correctOrder: [2, 1, 0], hint: 'Con vật kêu meo meo' },
  { id: 6, word: 'HOA', image: '🌸', blocks: ['A', 'O', 'H'], correctOrder: [2, 1, 0], hint: 'Thứ đẹp và thơm' },
  { id: 7, word: 'CÂY', image: '🌳', blocks: ['Y', 'Â', 'C'], correctOrder: [2, 1, 0], hint: 'Thứ xanh và cao' },
  { id: 8, word: 'SÁCH', image: '📚', blocks: ['H', 'C', 'Á', 'S'], correctOrder: [3, 2, 1, 0], hint: 'Thứ để đọc và học' },
  { id: 9, word: 'NƯỚC', image: '💧', blocks: ['C', 'Ớ', 'Ư', 'N'], correctOrder: [3, 2, 1, 0], hint: 'Thứ để uống' },
  { id: 10, word: 'TRƯỜNG', image: '🏫', blocks: ['G', 'N', 'Ờ', 'Ư', 'R', 'T'], correctOrder: [5, 4, 3, 2, 1, 0], hint: 'Nơi học tập' }
];

export default function BlockStackingGame() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [stackedBlocks, setStackedBlocks] = useState<string[]>([]);
  const [availableBlocks, setAvailableBlocks] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const level = levels[currentLevel - 1];

  useEffect(() => {
    if (level) {
      setAvailableBlocks([...level.blocks].sort(() => Math.random() - 0.5));
      setStackedBlocks([]);
      setIsCompleted(false);
      setShowHint(false);
    }
  }, [currentLevel, level]);

  const handleBlockClick = (block: string, index: number) => {
    setStackedBlocks([...stackedBlocks, block]);
    setAvailableBlocks(availableBlocks.filter((_, i) => i !== index));
  };

  const handleStackedBlockClick = (index: number) => {
    const block = stackedBlocks[index];
    setAvailableBlocks([...availableBlocks, block]);
    setStackedBlocks(stackedBlocks.filter((_, i) => i !== index));
  };

  const checkAnswer = () => {
    const currentOrder = stackedBlocks.map(block => level.blocks.indexOf(block));
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(level.correctOrder);
    
    if (isCorrect) {
      setIsCompleted(true);
      setTimeout(() => {
        if (currentLevel < levels.length) {
          setCurrentLevel(currentLevel + 1);
        }
      }, 2000);
    }
  };

  useEffect(() => {
    if (stackedBlocks.length === level.blocks.length) {
      checkAnswer();
    }
  }, [stackedBlocks]);

  const resetLevel = () => {
    setAvailableBlocks([...level.blocks].sort(() => Math.random() - 0.5));
    setStackedBlocks([]);
    setIsCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-400">
      {/* Header */}
      <header className="bg-blue-600 px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white text-lg">← Quay lại</Link>
        <h1 className="text-white text-xl font-bold">Xếp gạch</h1>
        <div className="text-white text-sm">Level {currentLevel}/10</div>
      </header>

      {/* Game Content */}
      <main className="px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Image and Target Word */}
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg text-center">
            <div className="text-6xl mb-4">{level.image}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Từ cần xếp: {level.word}</h2>
            
            {/* Hint Button */}
            <button
              onClick={() => setShowHint(!showHint)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
            >
              {showHint ? 'Ẩn gợi ý' : 'Hiện gợi ý'}
            </button>

            {/* Hint */}
            {showHint && (
              <p className="text-gray-600 mb-4">{level.hint}</p>
            )}

            {/* Reset Button */}
            <button
              onClick={resetLevel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Làm lại
            </button>
          </div>

          {/* Stacking Area */}
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
            <h3 className="text-lg font-bold text-center mb-4">Xếp các khối từ dưới lên trên:</h3>
            <div className="flex flex-col-reverse items-center gap-2 min-h-[200px] justify-end">
              {stackedBlocks.map((block, index) => (
                <button
                  key={index}
                  onClick={() => handleStackedBlockClick(index)}
                  className="w-16 h-16 bg-orange-500 text-white rounded-lg font-bold text-xl hover:bg-orange-600 transition-colors shadow-lg"
                  style={{ 
                    transform: `translateY(${index * 2}px)`,
                    zIndex: stackedBlocks.length - index 
                  }}
                >
                  {block}
                </button>
              ))}
              {/* Base platform */}
              <div className="w-32 h-4 bg-gray-600 rounded-lg"></div>
            </div>
          </div>

          {/* Available Blocks */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-center mb-4">Chọn khối để xếp:</h3>
            <div className="grid grid-cols-3 gap-3">
              {availableBlocks.map((block, index) => (
                <button
                  key={index}
                  onClick={() => handleBlockClick(block, index)}
                  className="w-16 h-16 bg-blue-500 text-white rounded-lg font-bold text-xl hover:bg-blue-600 transition-colors mx-auto"
                >
                  {block}
                </button>
              ))}
            </div>
          </div>

          {/* Success Message */}
          {isCompleted && (
            <div className="bg-green-500 text-white rounded-2xl p-6 mt-4 text-center">
              <h3 className="text-xl font-bold mb-2">🎉 Xuất sắc!</h3>
              <p>Bạn đã xếp đúng từ "{level.word}"!</p>
              {currentLevel < levels.length && (
                <p className="mt-2">Chuyển sang level tiếp theo...</p>
              )}
            </div>
          )}

          {/* Level Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setCurrentLevel(Math.max(1, currentLevel - 1))}
              disabled={currentLevel === 1}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Level trước
            </button>
            <button
              onClick={() => setCurrentLevel(Math.min(levels.length, currentLevel + 1))}
              disabled={currentLevel === levels.length}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Level sau
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
