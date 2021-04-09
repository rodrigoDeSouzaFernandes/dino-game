const dino = document.querySelector('.dino');
const background = document.querySelector('.background')

let isJumping = false
let position = 0;

function start() {
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
let randomTime = Math.random()*3000 + 500;

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
}, 20);

setTimeout(createCactus, randomTime)
}

function createPterodactilo() {

const ptero = document.createElement('div');
let pteroPosition = 1000
let randomTime = Math.random()*10000 + 5000;

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
}, 20);

setTimeout(createPterodactilo, randomTime)
}

createCactus();
setTimeout(() => {}, 10000)


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