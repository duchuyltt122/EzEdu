const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'EzEdu - Học tiếng Việt qua trò chơi',
        games: [
            {
                id: 'ghep-chu',
                name: 'Ghép chữ',
                description: 'Ghép các chữ cái thành từ',
                icon: '🏠',
                color: 'green'
            },
            {
                id: 'xep-gach',
                name: 'Xếp gạch',
                description: 'Xếp các khối chữ cái',
                icon: '📚',
                color: 'blue'
            },
            {
                id: 'cau-do',
                name: 'Câu đố',
                description: 'Trả lời câu hỏi thú vị',
                icon: '❓',
                color: 'orange'
            }
        ]
    });
});

app.get('/game/:gameId', (req, res) => {
    const gameId = req.params.gameId;
    const games = {
        'ghep-chu': {
            title: 'Ghép chữ',
            description: 'Kéo thả các chữ cái để tạo thành từ'
        },
        'xep-gach': {
            title: 'Xếp gạch',
            description: 'Xếp các khối chữ cái theo thứ tự đúng'
        },
        'cau-do': {
            title: 'Câu đố',
            description: 'Trả lời các câu hỏi về tiếng Việt'
        }
    };

    if (games[gameId]) {
        res.render('game', {
            title: games[gameId].title,
            gameId: gameId,
            gameData: games[gameId]
        });
    } else {
        res.redirect('/');
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
