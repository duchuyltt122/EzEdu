import Link from 'next/link';

export default function HocPage() {
  const levels = [
    {
      id: 1,
      title: "Cấp độ 1",
      description: "Nhận biết âm vần, nghe - nói cơ bản",
      color: "bg-green-400",
      hoverColor: "hover:bg-green-500"
    },
    {
      id: 2,
      title: "Cấp độ 2",
      description: "Câu đơn, từ vựng, viết câu",
      color: "bg-blue-400",
      hoverColor: "hover:bg-blue-500"
    },
    {
      id: 3,
      title: "Cấp độ 3",
      description: "Viết đoạn, kể chuyện, diễn đạt ý",
      color: "bg-purple-400",
      hoverColor: "hover:bg-purple-500"
    },
    {
      id: 4,
      title: "Cấp độ 4",
      description: "So sánh, suy luận, trình bày",
      color: "bg-orange-400",
      hoverColor: "hover:bg-orange-500"
    },
    {
      id: 5,
      title: "Cấp độ 5",
      description: "Viết văn dài, phân tích truyện",
      color: "bg-red-400",
      hoverColor: "hover:bg-red-500"
    },
    {
      id: 6,
      title: "Cấp độ 6",
      description: "Sáng tạo nội dung, phản biện",
      color: "bg-indigo-400",
      hoverColor: "hover:bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6 vietnamese-text">Học</h1>
        <div className="space-y-4">
          {levels.map((level) => (
            <Link key={level.id} href={`/hoc/cap-do-${level.id}`}>
              <div className={`${level.color} ${level.hoverColor} mobile-card transition-all duration-200 shadow-lg border-2 border-yellow-300`}>
                <h2 className="text-xl font-bold text-white vietnamese-text mb-2">{level.title}</h2>
                <p className="text-sm text-white vietnamese-text opacity-90">{level.description}</p>
              </div>
            </Link>
          ))}

          <div className="mt-6 text-center">
            <Link href="/" className="mobile-btn bg-blue-500 text-white hover:bg-blue-600 vietnamese-text">
              🏠 Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
