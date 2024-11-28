const container = document.querySelector('.container');
const userOptionsCard = document.querySelector('.user-card');
const userOptions = document.querySelectorAll('.user-option')
const resetButton = document.querySelector('#reset')
const versus = document.querySelector('#versus')
const scorelr = document.querySelector('.score-lr')
const scoreRight = document.querySelector('.score-right');
const scoreLeft = document.querySelector('.score-left');
const userCard = document.querySelector('.user-card')
const computerCard = document.querySelector('.computer-card')


const rules = ['rock', 'paper', 'scissors']
let userScore = 0, computerScore = 0;

userOptionsCard.addEventListener('click', () => {
    userOptions.forEach(userOpt => userOpt.style.display = 'flex')
})

userOptions.forEach((userOption, id) => {
    userOption.addEventListener('click', () => {
        userOptions.forEach(userOpt => userOpt.style.display = 'none')
        let userSelected = rules[id]
        gameStart(userSelected)
    })
})

const gameStart = (userSelected) => {
    const computerSelected = rules[Math.floor(Math.random() * 3)]


    if (userSelected === computerSelected) {
        console.log('Berabere')
    }
    else if (
        (userSelected == 'rock' && computerSelected == 'scissors') ||
        (userSelected == 'scissors' && computerSelected == 'paper') ||
        (userSelected == 'paper' && computerSelected == 'rock')
    ) {
        userScore++;
        setScoreBoard('user', userScore);

    }
    else {
        computerScore++;
        setScoreBoard('computer', computerScore);
    }

    userCard.innerHTML = `<img src="./img/${userSelected}.png" >`
    computerCard.innerHTML = `<img src="./img/${computerSelected}.png" >`
    container.style.pointerEvents = 'none';



    const ww = whoWon()
    if (ww !== '') {
        gameOver(ww);
        resetButton.style.pointerEvents = 'auto';

    } else {
        setTimeout(() => {
            userCard.innerHTML = '?'
            computerCard.innerHTML = '?'
            container.style.pointerEvents = 'auto';
        }, 2000);
    }
}


const setImg = (who) => {
    if (who === 'user') {
        userCard.innerHTML = `<img src="./img/${userSelected}.png" >`
    }
}


const whoWon = () => {
    if (userScore === 3) {
        return 'user'
    } else if (computerScore === 3) {
        return 'computer'
    } else {
        return ''
    }
}


const setScoreBoard = (who, score) => {

    if (who === 'user') {
        scoreLeft.style.flexBasis = `${score * 20}%`
        scoreLeft.firstChild.textContent = `User (${score})`
    } else {
        scoreRight.style.flexBasis = `${score * 20}%`
        scoreRight.firstChild.textContent = `Computer (${score})`

    }
}

const gameAnimation = () => {
    const img = versus.firstElementChild
    let i = 3;
    const counter = setInterval(() => {
        versus.innerHTML = `${i}`
        i--
        if (i === -1) {
            versus.innerHTML = ``
            versus.appendChild(img)
            clearInterval(counter)
            container.style.pointerEvents = 'auto';
        }
    }, 1000);
}

const gameReset = () => {
    container.style.pointerEvents = 'none';
    gameAnimation();
    setTimeout(() => {
        userScore = 0;
        computerScore = 0;

        scoreRight.style.flexBasis = '0%';
        scoreLeft.style.flexBasis = '0%';

        userCard.innerHTML = '?'
        computerCard.innerHTML = '?'

        userOptions.forEach(userOpt => userOpt.style.display = 'none')

        scoreLeft.firstChild.textContent = `User (0)`
        scoreRight.firstChild.textContent = `Computer (0)`


        if (userCard.childNodes[1]) {
            userCard.removeChild(userCard.childNodes[1])
            computerCard.removeChild(computerCard.childNodes[1])
        }
    }, 1000);
}

resetButton.addEventListener('click', gameReset)

const addImg = (ww) => {
    const winImg = document.createElement('img')
    const loseImg = document.createElement('img')

    winImg.setAttribute('src', './img/win.png')
    loseImg.setAttribute('src', './img/lose.png')

    winImg.classList.add('win-lose-img')
    loseImg.classList.add('win-lose-img')

    if (ww === 'user') {
        userCard.appendChild(winImg)
        computerCard.appendChild(loseImg)


    } else {
        userCard.appendChild(loseImg)
        computerCard.appendChild(winImg)
    }
}

const gameOver = (ww) => {
    container.style.pointerEvents = 'none';
    scorelr.nextElementSibling.style.visibilty = true
    addImg(ww)
}