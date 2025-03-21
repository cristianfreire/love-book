// capa
const capa = document.getElementById('capa');

capa.addEventListener('click', function (event) {
  const storyRect = capa.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
  } else {
    capa.classList.toggle("flip");
    setTimeout(() => {
      document.getElementById("page1").style.display = "block";
    }, 300);
  }
});


// pg1
const page1 = document.getElementById('page1');

page1.addEventListener('click', function (event) {
  const storyRect = page1.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    // desvirar
    capa.classList.toggle("flip");
    setTimeout(() => {
      document.getElementById("capa").style.display = "block";
      page1.style.display = "none";
    }, 300);

  } else {
    page1.classList.toggle("flip");
    setTimeout(() => {
      document.getElementById("page2").style.display = "block";
    }, 300);
  }
});

// pg2
const page2 = document.getElementById('page2');
page2.addEventListener('click', function (event) {
  const storyRect = page2.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    // desvirar
    page1.classList.toggle("flip");
    setTimeout(() => {
      page2.style.display = "none";
      page1.style.display = "block";
    }, 300);

  } else {
    page2.classList.toggle("flip");
    setTimeout(() => {
      document.getElementById("page3").style.display = "block";
    }, 300);
  }
});