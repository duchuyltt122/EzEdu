'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Bai1Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions = [
    {
      id: 1,
      type: 'audio',
      question: 'Nghe và chọn âm thanh đúng:',
      audio: '🔊 "A"',
      options: ['A', 'E', 'I', 'O'],
      correct: 'A',
      explanation: 'Âm "A" có âm thanh rõ ràng và dễ nhận biết'
    },
    {
      id: 2,
      type: 'matching',
      question: 'Ghép âm với hình ảnh:',
      prompt: 'Âm "M" giống như tiếng:',
      options: ['Mèo kêu', 'Chó sủa', 'Gà gáy', 'Bò rống'],
      correct: 'Mèo kêu',
      explanation: 'Âm "M" có âm thanh nhẹ nhàng như tiếng mèo kêu "meo meo"'
    },
    {
      id: 3,
      type: 'puzzle',
      question: 'Chọn âm đầu của từ:',
      prompt: '🐄 Con BÒ bắt đầu bằng âm nào?',
      options: ['B', 'P', 'M', 'N'],
      correct: 'B',
      explanation: 'Từ "BÒ" bắt đầu bằng âm "B"'
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
      <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 p-4">
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
                ? 'Xuất sắc! Bạn đã hoàn thành bài học!' 
                : score >= questions.length / 2 
                ? 'Tốt lắm! Hãy tiếp tục cố gắng!' 
                : 'Đừng nản lòng! Hãy thử lại nhé!'}
            </p>
            <div className="space-y-3">
              <button 
                onClick={resetGame}
                className="mobile-btn bg-green-500 text-white hover:bg-green-600 vietnamese-text w-full"
              >
                🔄 Làm lại
              </button>
              <Link href="/hoc/cap-do-1" className="mobile-btn bg-blue-500 text-white hover:bg-blue-600 vietnamese-text block">
                ← Quay lại cấp độ 1
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
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white mobile-card">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-readable vietnamese-text">Bài học 1</h1>
            <div className="text-sm text-readable-light vietnamese-text">
              Câu {currentQuestion + 1}/{questions.length}
            </div>
          </div>
          
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-readable vietnamese-text mb-4">
              {question.question}
            </h2>
            {question.audio && (
              <div className="text-4xl mb-4 p-4 bg-blue-100 rounded-lg">
                {question.audio}
              </div>
            )}
            {question.prompt && (
              <p className="text-readable vietnamese-text mb-4 text-lg">
                {question.prompt}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`mobile-btn text-center p-4 rounded-lg transition-all duration-200 vietnamese-text ${
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
            <Link href="/hoc/cap-do-1" className="mobile-btn bg-gray-500 text-white hover:bg-gray-600 vietnamese-text">
              ← Quay lại
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
