const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const roundSelect = document.querySelector('#playTo')
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let rounds = 3;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === rounds) {
            isGameOver = true;
            p1Display.classList.add('win');
            p2Display.classList.add('lose');
        }
        p1Display.innerText = p1Score;
    }
});
p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === rounds) {
            isGameOver = true;
            p2Display.classList.add('win');
            p1Display.classList.add('lose');
        }
        p2Display.innerText = p2Score;
    }
});
reset.addEventListener('click', resetGame);

roundSelect.addEventListener('change', () => {
    rounds = parseInt(roundSelect.value);
    resetGame();
});

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
    p1Display.classList.remove('win', 'lose');
    p2Display.classList.remove('win', 'lose');
    isGameOver = false;

}