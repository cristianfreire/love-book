const myMusic = document.getElementById("music");
const myMusic2 = document.getElementById("music2");
const page0 = document.getElementById('page0');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');

let currentPage = 0;
const totalPages = 6;

page0.addEventListener('click', function (event) {
  const storyRect = page0.getBoundingClientRect();
  const clickPosition = event.clientX;
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
  } else {
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    currentPage++;
    console.log(`page${currentPage}`);
    myMusic.play();
    myMusic2.play();

  }
});

// Página 1
page1.addEventListener('click', function (event) {
  const storyRect = page1.getBoundingClientRect();
  const clickPosition = event.clientX;
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    myMusic2.play();

  } else {
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    currentPage++;
    console.log(`page${currentPage}`);
    myMusic2.play();

  }
});


// pg2
page2.addEventListener('click', function (event) {
  const storyRect = page2.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    myMusic2.play();

  } else {
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    currentPage++;
    console.log(`page${currentPage}`);
    myMusic2.play();
  }
});

// pg3
page3.addEventListener('click', function (event) {
  const storyRect = page3.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    myMusic2.play();
  } else {
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    currentPage++;
    console.log(`page${currentPage}`);
    myMusic2.play();
  }
});

// pg4
page4.addEventListener('click', function (event) {
  const storyRect = page4.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    myMusic2.play();
  } else {
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    currentPage++;
    console.log(`page${currentPage}`);
    myMusic2.play();
  }
});

// pg5
page5.addEventListener('click', function (event) {
  const storyRect = page5.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
    console.log('Clique à esquerda');
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.toggle("flip");
    myMusic2.play();

  } else {
    console.log(`page${currentPage}`);
  }
});