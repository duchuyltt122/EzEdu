// Game-specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;
    
    const gameType = gameArea.dataset.game;
    
    switch(gameType) {
        case 'ghep-chu':
            initWordBuildingGame();
            break;
        case 'xep-gach':
            initBrickStackingGame();
            break;
        case 'cau-do':
            initQuizGame();
            break;
    }
});

// Word Building Game
function initWordBuildingGame() {
    const draggableLetters = document.querySelectorAll('.draggable-letter');
    const letterSlots = document.querySelectorAll('.letter-slot');
    
    // Add drag event listeners
    draggableLetters.forEach(letter => {
        letter.addEventListener('dragstart', handleDragStart);
        letter.addEventListener('dragend', handleDragEnd);
        
        // Touch support
        letter.addEventListener('touchstart', handleTouchStart);
        letter.addEventListener('touchmove', handleTouchMove);
        letter.addEventListener('touchend', handleTouchEnd);
    });
    
    letterSlots.forEach(slot => {
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleDrop);
        slot.addEventListener('dragenter', handleDragEnter);
        slot.addEventListener('dragleave', handleDragLeave);
    });
}

let draggedElement = null;
let touchOffset = { x: 0, y: 0 };

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    if (draggedElement && !e.target.classList.contains('filled')) {
        const letter = draggedElement.dataset.letter;
        const targetLetter = e.target.dataset.letter;
        
        if (letter === targetLetter) {
            e.target.textContent = letter;
            e.target.classList.add('filled', 'correct');
            draggedElement.classList.add('used');
            draggedElement.style.display = 'none';
            
            checkWordCompletion();
        } else {
            // Wrong letter - show feedback
            e.target.style.background = '#ff6b6b';
            setTimeout(() => {
                e.target.style.background = '';
            }, 500);
        }
    }
}

// Touch support for mobile
function handleTouchStart(e) {
    e.preventDefault();
    draggedElement = e.target;
    const touch = e.touches[0];
    const rect = e.target.getBoundingClientRect();
    touchOffset.x = touch.clientX - rect.left;
    touchOffset.y = touch.clientY - rect.top;
    e.target.classList.add('dragging');
}

function handleTouchMove(e) {
    e.preventDefault();
    if (!draggedElement) return;
    
    const touch = e.touches[0];
    draggedElement.style.position = 'fixed';
    draggedElement.style.left = (touch.clientX - touchOffset.x) + 'px';
    draggedElement.style.top = (touch.clientY - touchOffset.y) + 'px';
    draggedElement.style.zIndex = '1000';
}

function handleTouchEnd(e) {
    e.preventDefault();
    if (!draggedElement) return;
    
    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (elementBelow && elementBelow.classList.contains('letter-slot')) {
        const dropEvent = new Event('drop');
        dropEvent.preventDefault = () => {};
        dropEvent.target = elementBelow;
        handleDrop(dropEvent);
    }
    
    // Reset position
    draggedElement.style.position = '';
    draggedElement.style.left = '';
    draggedElement.style.top = '';
    draggedElement.style.zIndex = '';
    draggedElement.classList.remove('dragging');
    draggedElement = null;
}

function checkWordCompletion() {
    const slots = document.querySelectorAll('.letter-slot');
    const filledSlots = document.querySelectorAll('.letter-slot.filled');
    
    if (slots.length === filledSlots.length) {
        showSuccess('Chúc mừng! Bạn đã hoàn thành từ!');
        playSuccessSound();
    }
}

// Brick Stacking Game
function initBrickStackingGame() {
    const brickPieces = document.querySelectorAll('.brick-piece');
    const brickSlots = document.querySelectorAll('.brick-slot');
    
    brickPieces.forEach(brick => {
        brick.addEventListener('dragstart', handleBrickDragStart);
        brick.addEventListener('dragend', handleBrickDragEnd);
    });
    
    brickSlots.forEach(slot => {
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleBrickDrop);
        slot.addEventListener('dragenter', handleDragEnter);
        slot.addEventListener('dragleave', handleDragLeave);
    });
}

function handleBrickDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
}

function handleBrickDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
}

function handleBrickDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    if (draggedElement && !e.target.classList.contains('filled')) {
        const letter = draggedElement.dataset.letter;
        const order = draggedElement.dataset.order;
        const position = e.target.dataset.position;
        
        if (order === position) {
            e.target.textContent = letter;
            e.target.classList.add('filled');
            draggedElement.style.display = 'none';
            
            checkBrickCompletion();
        } else {
            // Wrong position
            e.target.style.background = '#ff6b6b';
            setTimeout(() => {
                e.target.style.background = '';
            }, 500);
        }
    }
}

function checkBrickCompletion() {
    const slots = document.querySelectorAll('.brick-slot');
    const filledSlots = document.querySelectorAll('.brick-slot.filled');
    
    if (slots.length === filledSlots.length) {
        showSuccess('Tuyệt vời! Bạn đã xếp đúng thứ tự!');
        playSuccessSound();
    }
}

// Quiz Game
function initQuizGame() {
    const answerButtons = document.querySelectorAll('.answer-btn');
    let score = 0;
    
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isCorrect = this.dataset.answer === 'correct';
            
            // Disable all buttons
            answerButtons.forEach(btn => btn.disabled = true);
            
            if (isCorrect) {
                this.classList.add('correct');
                score += 10;
                updateScore(score);
                showSuccess('Đúng rồi! +10 điểm');
                playSuccessSound();
                
                // Load next question after delay
                setTimeout(loadNextQuestion, 2000);
            } else {
                this.classList.add('wrong');
                // Show correct answer
                answerButtons.forEach(btn => {
                    if (btn.dataset.answer === 'correct') {
                        btn.classList.add('correct');
                    }
                });
                
                setTimeout(loadNextQuestion, 3000);
            }
        });
    });
}

function updateScore(newScore) {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = newScore;
    }
}

const quizQuestions = [
    {
        question: "Con vật nào có tiếng kêu 'gâu gâu'?",
        answers: ["Mèo", "Chó", "Gà", "Vịt"],
        correct: 1
    },
    {
        question: "Màu gì được tạo từ màu đỏ và màu vàng?",
        answers: ["Xanh", "Cam", "Tím", "Hồng"],
        correct: 1
    },
    {
        question: "Có bao nhiêu chân trong từ 'con gà'?",
        answers: ["1", "2", "3", "4"],
        correct: 1
    }
];

let currentQuestionIndex = 0;

function loadNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizQuestions.length) {
        showSuccess('Bạn đã hoàn thành tất cả câu hỏi!');
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    const questionElement = document.querySelector('.question');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const questionTitle = document.querySelector('.question-card h3');
    
    if (questionElement && answerButtons.length > 0) {
        questionTitle.textContent = `Câu hỏi ${currentQuestionIndex + 1}`;
        questionElement.textContent = question.question;
        
        answerButtons.forEach((btn, index) => {
            btn.textContent = question.answers[index];
            btn.dataset.answer = index === question.correct ? 'correct' : 'wrong';
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });
    }
}
