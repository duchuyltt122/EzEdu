# EzEdu - Ứng dụng học tiếng Việt qua trò chơi cho trẻ em

## Mô tả
EzEdu là một ứng dụng web giáo dục được thiết kế đặc biệt cho trẻ em để học tiếng Việt thông qua các trò chơi tương tác thú vị. Ứng dụng có giao diện thân thiện, màu sắc bắt mắt và tương thích với thiết bị di động.

## Tính năng chính

### 🏠 Ghép chữ
- Kéo thả các chữ cái để tạo thành từ
- Học cách ghép âm và tạo từ
- Giao diện trực quan với hình ảnh minh họa

### 📚 Xếp gạch  
- Xếp các khối chữ cái theo thứ tự đúng
- Rèn luyện khả năng sắp xếp và logic
- Hiệu ứng thị giác hấp dẫn

### ❓ Câu đố
- Trả lời các câu hỏi về tiếng Việt
- Kiểm tra kiến thức và từ vựng
- Hệ thống tính điểm động lực

## Công nghệ sử dụng
- **Backend**: Node.js với Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Template Engine**: EJS
- **Responsive Design**: CSS Grid và Flexbox

## Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Hướng dẫn cài đặt

1. **Clone hoặc tải dự án về máy**
   ```bash
   cd ezedu
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy ứng dụng**
   ```bash
   npm start
   ```

4. **Mở trình duyệt và truy cập**
   ```
   http://localhost:3000
   ```

## Cấu trúc dự án

```
ezedu/
├── app.js                 # File chính của server
├── package.json           # Cấu hình npm và dependencies
├── views/                 # Templates EJS
│   ├── index.ejs         # Trang chủ
│   └── game.ejs          # Trang game
├── public/               # Static files
│   ├── css/
│   │   ├── style.css     # CSS chính
│   │   └── game.css      # CSS cho games
│   └── js/
│       ├── main.js       # JavaScript chính
│       └── games.js      # Logic games
└── README.md             # Tài liệu hướng dẫn
```

## Tính năng responsive
- Tương thích với điện thoại di động
- Giao diện tự động điều chỉnh theo kích thước màn hình
- Hỗ trợ touch events cho thiết bị cảm ứng

## Hướng phát triển
- [ ] Thêm nhiều cấp độ cho mỗi game
- [ ] Hệ thống lưu tiến độ học tập
- [ ] Thêm âm thanh và hiệu ứng
- [ ] Tích hợp cơ sở dữ liệu
- [ ] Thêm nhiều loại game mới
- [ ] Hệ thống đăng nhập cho phụ huynh

## Đóng góp
Mọi đóng góp để cải thiện ứng dụng đều được hoan nghênh!

## Giấy phép
MIT License
