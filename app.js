const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const startButton = document.getElementById('start-button');
const wordButton = document.getElementById('word-button');

const words = ["りんご", "ゴリラ", "ラッパ", "パセリ"];
let currentWordIndex = -1;

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    nextWord();
});

wordButton.addEventListener('click', () => {
    nextWord();
});

function nextWord() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
    }
    wordButton.textContent = words[currentWordIndex];
}
