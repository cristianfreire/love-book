// Seleciona os elementos
const page0 = document.getElementById('page0');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');

let currentPage = 0;
const totalPages = 6;

page0.addEventListener('click', function (event) {
  const storyRect = page0.getBoundingClientRect();
  const clickPosition = event.clientX;
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
  } else {
    if (currentPage <= totalPages) {
      console.log(`page${currentPage}`);
      document.getElementById(`page${currentPage}`).classList.toggle("flip");
      currentPage++;
    }

  }
});

// Página 1
page1.addEventListener('click', function (event) {
  const storyRect = page1.getBoundingClientRect();
  const clickPosition = event.clientX;
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    if (currentPage <= totalPages) {
      console.log('Clique à esquerda');
      currentPage--;
      document.getElementById(`page${currentPage}`).classList.toggle("flip");
    }
  } else {
    if (currentPage <= totalPages) {
      console.log(`page${currentPage}`);
      document.getElementById(`page${currentPage}`).classList.add("flip");
      currentPage++;
    }
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

  } else {
    console.log(`page${currentPage}`);
    document.getElementById(`page${currentPage}`).classList.add("flip");
    currentPage++;
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

  } else {
    console.log(`page${currentPage}`);
    document.getElementById(`page${currentPage}`).classList.add("flip");
    currentPage++;
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

  } else {
    // console.log(`page${currentPage}`);
    // document.getElementById(`page${currentPage}`).classList.add("flip");
    // currentPage++;
  }
});