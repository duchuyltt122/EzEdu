// Main JavaScript for EzEdu App

// Navigate to game page
function playGame(gameId) {
    window.location.href = `/game/${gameId}`;
}

// Go back to home page
function goHome() {
    window.location.href = '/';
}

// Reset current game
function resetGame() {
    const gameArea = document.getElementById('game-area');
    const gameType = gameArea.dataset.game;
    
    switch(gameType) {
        case 'ghep-chu':
            resetWordBuildingGame();
            break;
        case 'xep-gach':
            resetBrickStackingGame();
            break;
        case 'cau-do':
            resetQuizGame();
            break;
    }
}

// Next level functionality
function nextLevel() {
    alert('Chúc mừng! Bạn đã hoàn thành cấp độ này. Tính năng cấp độ tiếp theo sẽ được cập nhật sớm!');
}

// Word Building Game Functions
function resetWordBuildingGame() {
    const slots = document.querySelectorAll('.letter-slot');
    const letters = document.querySelectorAll('.draggable-letter');
    
    slots.forEach(slot => {
        slot.textContent = '';
        slot.classList.remove('filled', 'correct');
    });
    
    letters.forEach(letter => {
        letter.classList.remove('used');
        letter.style.display = 'flex';
    });
}

// Brick Stacking Game Functions
function resetBrickStackingGame() {
    const slots = document.querySelectorAll('.brick-slot');
    const bricks = document.querySelectorAll('.brick-piece');
    
    slots.forEach(slot => {
        slot.textContent = '';
        slot.classList.remove('filled');
    });
    
    bricks.forEach(brick => {
        brick.style.display = 'flex';
    });
}

// Quiz Game Functions
function resetQuizGame() {
    const buttons = document.querySelectorAll('.answer-btn');
    const scoreElement = document.getElementById('score');
    
    buttons.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
    
    if (scoreElement) {
        scoreElement.textContent = '0';
    }
}

// Add click sound effect (optional)
function playClickSound() {
    // You can add audio here if needed
    // const audio = new Audio('/sounds/click.mp3');
    // audio.play();
}

// Add success sound effect (optional)
function playSuccessSound() {
    // You can add audio here if needed
    // const audio = new Audio('/sounds/success.mp3');
    // audio.play();
}

// Utility function to show success message
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #7BC67B;
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 18px;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        animation: fadeInOut 2s ease-in-out;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        document.body.removeChild(successDiv);
    }, 2000);
}

// Add CSS animation for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('EzEdu App loaded successfully!');
    
    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
});
