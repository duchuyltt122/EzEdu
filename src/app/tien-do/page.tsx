import Link from 'next/link';

export default function TienDoPage() {
  // Sample data for the last 4 weeks
  const weeklyData = [
    // Week 1 (3 weeks ago)
    [
      { completed: false, streak: false },
      { completed: true, streak: false },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: false, streak: false },
      { completed: true, streak: false },
      { completed: true, streak: true }
    ],
    // Week 2 (2 weeks ago)
    [
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: false, streak: false },
      { completed: true, streak: false },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true }
    ],
    // Week 3 (last week)
    [
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true }
    ],
    // Week 4 (this week)
    [
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true },
      { completed: true, streak: true, today: true }
    ]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6 vietnamese-text">📊 Tiến độ</h1>

        {/* Current Streak */}
        <div className="bg-yellow-100 mobile-card shadow-lg mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-readable vietnamese-text">Chuỗi ngày học</h2>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔥</span>
              <span className="text-2xl font-bold text-orange-600">7</span>
            </div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-lg font-semibold text-orange-700 vietnamese-text mb-2">
              Tuyệt vời! Bạn đã học liên tục 7 ngày!
            </p>
            <p className="text-sm text-orange-600 vietnamese-text">
              Tiếp tục duy trì để đạt mục tiêu 14 ngày 🎯
            </p>
          </div>
        </div>

        {/* Monthly Calendar */}
        <div className="bg-yellow-100 mobile-card shadow-lg mb-4">
          <h2 className="text-lg font-bold text-readable vietnamese-text mb-4">Lịch học tháng này</h2>

          <div className="space-y-4">
            {weeklyData.map((week, weekIndex) => (
              <div key={weekIndex}>
                <div className="text-xs text-readable-light vietnamese-text mb-2">
                  Tuần {weekIndex + 1}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, dayIndex) => (
                    <div key={day} className="text-center">
                      <div className="text-xs font-medium text-readable-light vietnamese-text mb-1">
                        {day}
                      </div>
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold relative
                        ${week[dayIndex].completed
                          ? week[dayIndex].today
                            ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                            : 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-400'
                        }
                      `}>
                        {week[dayIndex].completed ? '✓' : (weekIndex * 7 + dayIndex + 1)}
                        {week[dayIndex].streak && (
                          <div className="absolute -top-1 -right-1 text-sm">🔥</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Progress */}
        <div className="bg-yellow-100 mobile-card shadow-lg mb-4">
          <h2 className="text-lg font-bold text-readable vietnamese-text mb-4">📊 Tiến độ kỹ năng</h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📖</span>
                  <span className="text-lg font-semibold text-readable vietnamese-text">Đọc</span>
                </div>
                <span className="text-xl font-bold text-blue-600">75%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
                <div className="bg-blue-600 h-4 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
              </div>
              <p className="text-sm text-blue-700 vietnamese-text">Xuất sắc! Bạn đọc hiểu rất tốt.</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✏️</span>
                  <span className="text-lg font-semibold text-readable vietnamese-text">Viết</span>
                </div>
                <span className="text-xl font-bold text-green-600">60%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
                <div className="bg-green-600 h-4 rounded-full transition-all duration-500" style={{width: '60%'}}></div>
              </div>
              <p className="text-sm text-green-700 vietnamese-text">Tốt! Tiếp tục luyện viết mỗi ngày.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  <span className="text-lg font-semibold text-readable vietnamese-text">Ngữ pháp</span>
                </div>
                <span className="text-xl font-bold text-purple-600">45%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
                <div className="bg-purple-600 h-4 rounded-full transition-all duration-500" style={{width: '45%'}}></div>
              </div>
              <p className="text-sm text-purple-700 vietnamese-text">Cần cố gắng thêm với ngữ pháp!</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-yellow-100 mobile-card shadow-lg mb-4">
          <h2 className="text-lg font-bold text-readable vietnamese-text mb-4">📈 Thống kê tổng quan</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-readable vietnamese-text">Tổng số ngày học</p>
                <p className="text-2xl font-bold text-green-600">23 ngày</p>
              </div>
              <span className="text-3xl">📚</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-readable vietnamese-text">Chuỗi dài nhất</p>
                <p className="text-2xl font-bold text-orange-600">12 ngày</p>
              </div>
              <span className="text-3xl">🏆</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-readable vietnamese-text">Bài học hoàn thành</p>
                <p className="text-2xl font-bold text-blue-600">69 bài</p>
              </div>
              <span className="text-3xl">✅</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-readable vietnamese-text">Cấp độ hiện tại</p>
                <p className="text-2xl font-bold text-purple-600">Cấp độ 2</p>
              </div>
              <span className="text-3xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/" className="mobile-btn bg-green-500 text-white hover:bg-green-600 vietnamese-text">
            🏠 Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
