'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function CongDongPage() {
  const [showNewPost, setShowNewPost] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Minh',
      avatar: 'M',
      avatarColor: 'bg-blue-500',
      time: '2 giờ trước',
      content: 'Hôm nay mình đã hoàn thành cấp độ 2! Các bài học về câu đơn rất thú vị. Ai cũng đang học cấp độ nào rồi? 😊',
      likes: 12,
      comments: 3,
      image: {
        type: 'achievement',
        content: '🎉 CẤP ĐỘ 2 HOÀN THÀNH! 🎉',
        emoji: '📚✨🏆',
        bgColor: 'bg-gradient-to-r from-blue-400 to-blue-600'
      }
    },
    {
      id: 2,
      author: 'Hoa',
      avatar: 'H',
      avatarColor: 'bg-pink-500',
      time: '5 giờ trước',
      content: 'Mình vừa đạt chuỗi 10 ngày học liên tục! 🔥🔥🔥 Cảm ơn các bạn đã động viên mình. Mục tiêu tiếp theo là 20 ngày!',
      likes: 25,
      comments: 8,
      image: {
        type: 'streak',
        content: '🔥 CHUỖI 10 NGÀY 🔥',
        emoji: '📅✅✅✅✅✅✅✅✅✅✅',
        bgColor: 'bg-gradient-to-r from-orange-400 to-red-500'
      }
    },
    {
      id: 3,
      author: 'Đức',
      avatar: 'Đ',
      avatarColor: 'bg-green-500',
      time: '1 ngày trước',
      content: 'Ai biết cách làm bài ghép chữ ở cấp độ 1 không? Mình bị kẹt ở bài 3 rồi 😅',
      likes: 8,
      comments: 5,
      image: {
        type: 'puzzle',
        content: 'BÀI GHÉP CHỮ - CẤP ĐỘ 1',
        emoji: '🧩 C + Á = CÁ 🐟',
        bgColor: 'bg-gradient-to-r from-green-400 to-green-600'
      }
    },
    {
      id: 4,
      author: 'Lan',
      avatar: 'L',
      avatarColor: 'bg-purple-500',
      time: '2 ngày trước',
      content: 'Chia sẻ với các bạn: mình học tốt nhất vào buổi sáng! Các bạn thích học lúc nào nhất? 🌅',
      likes: 15,
      comments: 12,
      image: {
        type: 'schedule',
        content: 'LỊCH HỌC CỦA MÌNH',
        emoji: '🌅 6:00 - 7:00 📚',
        bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-400'
      }
    }
  ]);
  const [newPostContent, setNewPostContent] = useState('');

  const handleSubmitPost = () => {
    if (newPostContent.trim()) {
      // Random image for new posts
      const randomImages = [
        {
          type: 'celebration',
          content: '🎉 BÀI VIẾT MỚI! 🎉',
          emoji: '✨📝💫',
          bgColor: 'bg-gradient-to-r from-purple-400 to-pink-500'
        },
        {
          type: 'learning',
          content: '📚 CHIA SẺ HỌC TẬP 📚',
          emoji: '🤓📖✏️',
          bgColor: 'bg-gradient-to-r from-blue-400 to-indigo-500'
        },
        {
          type: 'motivation',
          content: '💪 ĐỘNG LỰC HỌC TẬP 💪',
          emoji: '🌟⚡🚀',
          bgColor: 'bg-gradient-to-r from-green-400 to-teal-500'
        }
      ];

      const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

      const newPost = {
        id: posts.length + 1,
        author: 'Bạn',
        avatar: '👤',
        avatarColor: 'bg-orange-500',
        time: 'Vừa xong',
        content: newPostContent,
        likes: 0,
        comments: 0,
        image: randomImage
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
      setShowNewPost(false);
    }
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-purple-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6 vietnamese-text">👥 Cộng đồng</h1>
        <div className="space-y-4">

          {/* New Post Section */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-readable vietnamese-text">✍️ Chia sẻ</h2>
              <button
                onClick={() => setShowNewPost(!showNewPost)}
                className="mobile-btn bg-purple-500 text-white hover:bg-purple-600 vietnamese-text text-sm"
              >
                {showNewPost ? 'Hủy' : 'Đăng bài'}
              </button>
            </div>

            {showNewPost && (
              <div className="space-y-3">
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Chia sẻ điều gì đó với cộng đồng..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none vietnamese-text text-readable"
                  rows={3}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSubmitPost}
                    disabled={!newPostContent.trim()}
                    className="mobile-btn bg-green-500 text-white hover:bg-green-600 vietnamese-text flex-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    📝 Đăng
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white mobile-card shadow-lg">
                {/* Post Header */}
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 ${post.avatarColor} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-bold text-sm">{post.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-readable vietnamese-text">{post.author}</p>
                    <p className="text-xs text-readable-light">{post.time}</p>
                  </div>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <p className="text-readable vietnamese-text leading-relaxed">{post.content}</p>

                  {/* Post Image */}
                  {post.image && (
                    <div className={`mt-3 p-4 rounded-lg text-white text-center ${post.image.bgColor}`}>
                      <div className="text-lg font-bold vietnamese-text mb-2">
                        {post.image.content}
                      </div>
                      <div className="text-2xl">
                        {post.image.emoji}
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-2 text-readable-light hover:text-red-500 transition-colors"
                  >
                    <span className="text-lg">❤️</span>
                    <span className="text-sm vietnamese-text">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-readable-light hover:text-blue-500 transition-colors">
                    <span className="text-lg">💬</span>
                    <span className="text-sm vietnamese-text">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-readable-light hover:text-green-500 transition-colors">
                    <span className="text-lg">📤</span>
                    <span className="text-sm vietnamese-text">Chia sẻ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="bg-yellow-100 mobile-card shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-readable vietnamese-text">🏆 Bảng xếp hạng tuần</h2>

            <div className="space-y-2">
              {[
                { name: 'Minh', score: 320, rank: 1, avatar: 'M', color: 'bg-yellow-500' },
                { name: 'Hoa', score: 280, rank: 2, avatar: 'H', color: 'bg-gray-400' },
                { name: 'Đức', score: 260, rank: 3, avatar: 'Đ', color: 'bg-orange-400' },
                { name: 'Lan', score: 150, rank: 4, avatar: 'L', color: 'bg-blue-500' },
                { name: 'Tú', score: 120, rank: 5, avatar: 'T', color: 'bg-green-500' }
              ].map((user) => (
                <div key={user.name} className={`p-3 rounded-lg flex items-center justify-between ${
                  user.rank === 4 ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white'
                }`}>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                      <span className="text-sm font-bold">{user.rank}</span>
                    </div>
                    <div className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center mr-3`}>
                      <span className="text-white text-sm font-bold">{user.avatar}</span>
                    </div>
                    <div>
                      <p className="font-bold text-readable vietnamese-text">{user.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">{user.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center space-x-2">
            <Link href="/" className="mobile-btn bg-purple-500 text-white hover:bg-purple-600 vietnamese-text">
              🏠 Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
