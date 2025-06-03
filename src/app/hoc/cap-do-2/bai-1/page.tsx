'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function CapDo2Bai1Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions = [
    {
      id: 1,
      type: 'sentence_building',
      question: 'Tạo câu đơn:',
      prompt: 'Chọn câu đúng để mô tả hình ảnh: 🐱',
      options: ['Con mèo ngủ.', 'Mèo con ngủ.', 'Ngủ con mèo.', 'Con ngủ mèo.'],
      correct: 'Con mèo ngủ.',
      explanation: 'Câu đúng: "Con mèo ngủ." - Chủ ngữ + Động từ'
    },
    {
      id: 2,
      type: 'word_order',
      question: 'Sắp xếp từ thành câu:',
      prompt: 'Sắp xếp: "ăn / cơm / Bé / "',
      options: ['Bé ăn cơm.', 'Cơm ăn bé.', 'Ăn bé cơm.', 'Cơm bé ăn.'],
      correct: 'Bé ăn cơm.',
      explanation: 'Thứ tự đúng: Chủ ngữ (Bé) + Động từ (ăn) + Tân ngữ (cơm)'
    },
    {
      id: 3,
      type: 'sentence_completion',
      question: 'Hoàn thành câu:',
      prompt: 'Bố đi ___',
      options: ['làm việc', 'việc làm', 'làm việc đi', 'đi việc làm'],
      correct: 'làm việc',
      explanation: '"Bố đi làm việc" là câu hoàn chỉnh và đúng ngữ pháp'
    }
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white mobile-card text-center">
            <h1 className="text-2xl font-bold text-readable vietnamese-text mb-4">Kết quả</h1>
            <div className="text-6xl mb-4">
              {score === questions.length ? '🎉' : score >= questions.length / 2 ? '😊' : '😔'}
            </div>
            <p className="text-xl vietnamese-text mb-4">
              Bạn đã trả lời đúng {score}/{questions.length} câu!
            </p>
            <p className="text-readable vietnamese-text mb-6">
              {score === questions.length 
                ? 'Xuất sắc! Bạn đã tạo câu đơn rất tốt!' 
                : score >= questions.length / 2 
                ? 'Tốt lắm! Tiếp tục luyện tập!' 
                : 'Hãy học thêm về cấu trúc câu!'}
            </p>
            <div className="space-y-3">
              <button 
                onClick={resetGame}
                className="mobile-btn bg-blue-500 text-white hover:bg-blue-600 vietnamese-text w-full"
              >
                🔄 Làm lại
              </button>
              <Link href="/hoc/cap-do-2" className="mobile-btn bg-green-500 text-white hover:bg-green-600 vietnamese-text block">
                ← Quay lại cấp độ 2
              </Link>
              <Link href="/" className="mobile-btn bg-gray-500 text-white hover:bg-gray-600 vietnamese-text block">
                🏠 Trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white mobile-card">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-readable vietnamese-text">Cấp độ 2 - Bài 1</h1>
            <div className="text-sm text-readable-light vietnamese-text">
              Câu {currentQuestion + 1}/{questions.length}
            </div>
          </div>
          
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-readable vietnamese-text mb-4">
              {question.question}
            </h2>
            <div className="text-xl mb-4 p-4 bg-yellow-100 rounded-lg">
              <p className="text-readable vietnamese-text">
                {question.prompt}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`mobile-btn text-center p-4 rounded-lg transition-all duration-200 vietnamese-text w-full ${
                  selectedAnswer === null
                    ? 'bg-blue-100 hover:bg-blue-200 text-readable'
                    : selectedAnswer === option
                    ? option === question.correct
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : option === question.correct
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <div className={`p-4 rounded-lg mb-4 ${
              selectedAnswer === question.correct ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <p className="text-readable vietnamese-text">
                {question.explanation}
              </p>
            </div>
          )}

          <div className="text-center">
            <Link href="/hoc/cap-do-2" className="mobile-btn bg-gray-500 text-white hover:bg-gray-600 vietnamese-text">
              ← Quay lại
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
