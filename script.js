const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
const points = document.querySelector('.points')

let isJumping = false
let position = 0;

let initialDifficulty = 30
let spaceBetweenEnemies = 4000

const pontos = 0000000
points.innerHTML = pontos

function start() {

pointsInterval = setInterval(()=> {
  newPoint = Number(points.innerHTML)
  points.innerHTML = newPoint + 1
}, 100)

  dificultyInterval = setInterval(() => {
    if (initialDifficulty > 10) {
      initialDifficulty -= 1
      spaceBetweenEnemies -= 200
    } else {
      clearInterval(initialDifficulty)
    }
  }, 10000)

  background.classList.add('start')
  const jump = () => {
isJumping = true
let upInterval = setInterval(() => {
  if(position >= 150) {
    clearInterval(upInterval)
    
    let downInterval = setInterval(() => {
      if (position <= 0) {
        clearInterval(downInterval)
        isJumping = false
      } else {
        position-=15
        dino.style.bottom = position + 'px'
      }
    }, 20)
  } else {
    position += 10;
    dino.style.bottom = position + 'px'
  }
  
}, 20);
};

function createCactus () {
const cactus = document.createElement('div');
let cactusPosition = 1000
let randomTime = Math.random()*spaceBetweenEnemies + 500;

cactus.classList.add('cactus')
cactus.style.left = cactusPosition + 'px'
background.appendChild(cactus)

leftInterval = setInterval(()=> {
  if(cactusPosition < -60) {
    
    background.removeChild(cactus);
  } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
    clearInterval(leftInterval);
    document.body.innerHTML = "<h1 class='game-over'>FIM DE JOGO</h1>"
  } else {
    cactusPosition -= 10;
    cactus.style.left = cactusPosition + 'px';
  }
}, initialDifficulty);

const randomEnemy = Math.random() * 7;

  if (randomEnemy < 5) {
    setTimeout(createCactus, randomTime)
  } else {
    setTimeout(createPterodactilo, randomTime)
  }
}


function createPterodactilo() {

const ptero = document.createElement('div');
let pteroPosition = 1000
let randomTime = Math.random()*spaceBetweenEnemies + 500;

ptero.classList.add('ptero')
ptero.style.left = pteroPosition + 'px'
background.appendChild(ptero)

leftInterval = setInterval(()=> {
  if(pteroPosition < -60) {
    
    background.removeChild(ptero);
  } else if (pteroPosition > 0 && pteroPosition < 60 && position > 60) {
    clearInterval(leftInterval);
    document.body.innerHTML = "<h1 class='game-over'>FIM DE JOGO</h1>"
  } else {
    pteroPosition -= 10;
    ptero.style.left = pteroPosition + 'px';
  }
}, initialDifficulty);

setTimeout(createCactus, randomTime)
}


createCactus();


document.addEventListener('keydown', (event) => {
if (event.keyCode === 32) {
  if(!isJumping){
    jump()
  }
}
});
}

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 83) {
    start()
    }
  }
);