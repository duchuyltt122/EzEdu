'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Level {
  id: number;
  word: string;
  image: string;
  letters: string[];
  hint: string;
}

const levels: Level[] = [
  { id: 1, word: 'MẸ', image: '👩', letters: ['M', 'Ẹ', 'B', 'A'], hint: 'Người sinh ra bạn' },
  { id: 2, word: 'BỐ', image: '👨', letters: ['B', 'Ố', 'M', 'C'], hint: 'Người cha của bạn' },
  { id: 3, word: 'NHÀ', image: '🏠', letters: ['N', 'H', 'À', 'X'], hint: 'Nơi bạn sống' },
  { id: 4, word: 'CHÓ', image: '🐕', letters: ['C', 'H', 'Ó', 'T'], hint: 'Con vật trung thành' },
  { id: 5, word: 'MÈO', image: '🐱', letters: ['M', 'È', 'O', 'P'], hint: 'Con vật kêu meo meo' },
  { id: 6, word: 'HOA', image: '🌸', letters: ['H', 'O', 'A', 'K'], hint: 'Thứ đẹp và thơm' },
  { id: 7, word: 'CÂY', image: '🌳', letters: ['C', 'Â', 'Y', 'L'], hint: 'Thứ xanh và cao' },
  { id: 8, word: 'MẶT TRỜI', image: '☀️', letters: ['M', 'Ặ', 'T', ' ', 'T', 'R', 'Ờ', 'I', 'X', 'Y'], hint: 'Nguồn sáng ban ngày' },
  { id: 9, word: 'NƯỚC', image: '💧', letters: ['N', 'Ư', 'Ớ', 'C', 'K', 'L'], hint: 'Thứ để uống' },
  { id: 10, word: 'SÁCH', image: '📚', letters: ['S', 'Á', 'C', 'H', 'M', 'N'], hint: 'Thứ để đọc và học' }
];

export default function WordAssemblyGame() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const level = levels[currentLevel - 1];

  useEffect(() => {
    if (level) {
      setAvailableLetters([...level.letters].sort(() => Math.random() - 0.5));
      setSelectedLetters([]);
      setIsCompleted(false);
      setShowHint(false);
    }
  }, [currentLevel, level]);

  const handleLetterClick = (letter: string, index: number) => {
    setSelectedLetters([...selectedLetters, letter]);
    setAvailableLetters(availableLetters.filter((_, i) => i !== index));
  };

  const handleSelectedLetterClick = (index: number) => {
    const letter = selectedLetters[index];
    setAvailableLetters([...availableLetters, letter]);
    setSelectedLetters(selectedLetters.filter((_, i) => i !== index));
  };

  const checkAnswer = useCallback(() => {
    const answer = selectedLetters.join('');
    if (answer === level.word) {
      setIsCompleted(true);
      setTimeout(() => {
        if (currentLevel < levels.length) {
          setCurrentLevel(currentLevel + 1);
        }
      }, 2000);
    }
  }, [selectedLetters, level.word, currentLevel]);

  useEffect(() => {
    if (selectedLetters.length === level.word.length) {
      checkAnswer();
    }
  }, [selectedLetters, checkAnswer, level.word.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-green-400">
      {/* Header */}
      <header className="bg-green-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/hoc/doc" className="text-white text-sm">← Quay lại</Link>
          <Link href="/" className="text-white text-sm">🏠 Trang chủ</Link>
        </div>
        <h1 className="text-white text-xl font-bold">Ghép chữ</h1>
        <div className="text-white text-sm">Level {currentLevel}/10</div>
      </header>

      {/* Game Content */}
      <main className="px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Image and Word Display */}
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg text-center">
            <div className="text-6xl mb-4">{level.image}</div>
            
            {/* Word Slots */}
            <div className="flex justify-center gap-2 mb-4">
              {level.word.split('').map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"
                >
                  <span className="text-xl font-bold text-gray-800">
                    {selectedLetters[index] || ''}
                  </span>
                </div>
              ))}
            </div>

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
          </div>

          {/* Available Letters */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-center mb-4">Chọn chữ cái:</h3>
            <div className="grid grid-cols-4 gap-3">
              {availableLetters.map((letter, index) => (
                <button
                  key={index}
                  onClick={() => handleLetterClick(letter, index)}
                  className="w-12 h-12 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Letters */}
          {selectedLetters.length > 0 && (
            <div className="bg-white rounded-2xl p-6 mt-4 shadow-lg">
              <h3 className="text-lg font-bold text-center mb-4">Chữ đã chọn:</h3>
              <div className="flex justify-center gap-2">
                {selectedLetters.map((letter, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectedLetterClick(index)}
                    className="w-12 h-12 bg-red-500 text-white rounded-lg font-bold text-lg hover:bg-red-600 transition-colors"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Success Message */}
          {isCompleted && (
            <div className="bg-green-500 text-white rounded-2xl p-6 mt-4 text-center">
              <h3 className="text-xl font-bold mb-2">🎉 Chính xác!</h3>
              <p>Bạn đã hoàn thành level {currentLevel}!</p>
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
