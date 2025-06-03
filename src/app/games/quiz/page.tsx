'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  image: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Con vật nào kêu "gâu gâu"?',
    image: '🐕',
    options: ['Mèo', 'Chó', 'Gà', 'Heo'],
    correctAnswer: 1,
    explanation: 'Chó là con vật kêu "gâu gâu"'
  },
  {
    id: 2,
    question: 'Màu gì của lá cây?',
    image: '🍃',
    options: ['Đỏ', 'Vàng', 'Xanh', 'Tím'],
    correctAnswer: 2,
    explanation: 'Lá cây có màu xanh'
  },
  {
    id: 3,
    question: 'Chúng ta dùng gì để viết?',
    image: '✏️',
    options: ['Thìa', 'Bút', 'Dao', 'Nĩa'],
    correctAnswer: 1,
    explanation: 'Chúng ta dùng bút để viết'
  },
  {
    id: 4,
    question: 'Con vật nào bay được?',
    image: '🐦',
    options: ['Cá', 'Chim', 'Bò', 'Heo'],
    correctAnswer: 1,
    explanation: 'Chim là con vật bay được'
  },
  {
    id: 5,
    question: 'Chúng ta ăn cơm bằng gì?',
    image: '🥢',
    options: ['Tay', 'Đũa', 'Chân', 'Mũi'],
    correctAnswer: 1,
    explanation: 'Chúng ta ăn cơm bằng đũa'
  },
  {
    id: 6,
    question: 'Mặt trời xuất hiện vào lúc nào?',
    image: '☀️',
    options: ['Ban đêm', 'Ban ngày', 'Tối', 'Nửa đêm'],
    correctAnswer: 1,
    explanation: 'Mặt trời xuất hiện vào ban ngày'
  },
  {
    id: 7,
    question: 'Con vật nào sống dưới nước?',
    image: '🐠',
    options: ['Chó', 'Mèo', 'Cá', 'Gà'],
    correctAnswer: 2,
    explanation: 'Cá sống dưới nước'
  },
  {
    id: 8,
    question: 'Chúng ta ngủ trên gì?',
    image: '🛏️',
    options: ['Bàn', 'Ghế', 'Giường', 'Sàn'],
    correctAnswer: 2,
    explanation: 'Chúng ta ngủ trên giường'
  },
  {
    id: 9,
    question: 'Hoa có mùi gì?',
    image: '🌸',
    options: ['Hôi', 'Thơm', 'Chua', 'Mặn'],
    correctAnswer: 1,
    explanation: 'Hoa có mùi thơm'
  },
  {
    id: 10,
    question: 'Chúng ta đi học ở đâu?',
    image: '🏫',
    options: ['Nhà', 'Trường', 'Chợ', 'Công viên'],
    correctAnswer: 1,
    explanation: 'Chúng ta đi học ở trường'
  }
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[currentQuestion - 1];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setShowExplanation(true);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowExplanation(false);
    setScore(0);
  };

  const getButtonColor = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-green-500';
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'bg-red-500';
    }
    
    return 'bg-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-400">
      {/* Header */}
      <header className="bg-yellow-600 px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white text-lg">← Quay lại</Link>
        <h1 className="text-white text-xl font-bold">Câu đố</h1>
        <div className="text-white text-sm">
          {currentQuestion}/10 | Điểm: {score}
        </div>
      </header>

      {/* Game Content */}
      <main className="px-6 py-8">
        <div className="max-w-md mx-auto">
          {currentQuestion <= questions.length ? (
            <>
              {/* Question Card */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg text-center">
                <div className="text-6xl mb-4">{question.image}</div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {question.question}
                </h2>
                
                {/* Answer Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full p-4 text-white rounded-lg font-bold text-lg transition-colors ${getButtonColor(index)}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className={`rounded-2xl p-6 mb-6 shadow-lg text-center ${
                  selectedAnswer === question.correctAnswer ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <h3 className="text-lg font-bold mb-2">
                    {selectedAnswer === question.correctAnswer ? '🎉 Chính xác!' : '❌ Sai rồi!'}
                  </h3>
                  <p className="text-gray-700">{question.explanation}</p>
                </div>
              )}

              {/* Navigation */}
              {showResult && (
                <div className="text-center">
                  {currentQuestion < questions.length ? (
                    <button
                      onClick={nextQuestion}
                      className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
                    >
                      Câu tiếp theo
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentQuestion(questions.length + 1)}
                      className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
                    >
                      Xem kết quả
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Final Results */
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🎊 Hoàn thành!
              </h2>
              <div className="text-6xl mb-4">
                {score >= 8 ? '🏆' : score >= 6 ? '🥈' : score >= 4 ? '🥉' : '📚'}
              </div>
              <p className="text-xl mb-4">
                Điểm số của bạn: <span className="font-bold text-blue-600">{score}/10</span>
              </p>
              <p className="text-gray-600 mb-6">
                {score >= 8 ? 'Xuất sắc! Bạn rất giỏi!' :
                 score >= 6 ? 'Tốt lắm! Tiếp tục cố gắng!' :
                 score >= 4 ? 'Khá tốt! Hãy luyện tập thêm!' :
                 'Cần cố gắng hơn nữa nhé!'}
              </p>
              <div className="space-y-3">
                <button
                  onClick={resetQuiz}
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
                >
                  Chơi lại
                </button>
                <Link
                  href="/"
                  className="block w-full bg-gray-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-600 transition-colors"
                >
                  Về trang chủ
                </Link>
              </div>
            </div>
          )}

          {/* Level Navigation */}
          {currentQuestion <= questions.length && (
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  if (currentQuestion > 1) {
                    setCurrentQuestion(currentQuestion - 1);
                    setSelectedAnswer(null);
                    setShowResult(false);
                    setShowExplanation(false);
                  }
                }}
                disabled={currentQuestion === 1}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                Câu trước
              </button>
              <button
                onClick={() => {
                  if (currentQuestion < questions.length) {
                    setCurrentQuestion(currentQuestion + 1);
                    setSelectedAnswer(null);
                    setShowResult(false);
                    setShowExplanation(false);
                  }
                }}
                disabled={currentQuestion === questions.length}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                Câu sau
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
