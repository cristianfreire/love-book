// Seleciona os elementos
const capa = document.getElementById('capa');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

capa.addEventListener('click', function (event) {
  const storyRect = capa.getBoundingClientRect();
  const clickPosition = event.clientX;
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    console.log('Clique à esquerda');
  } else {
    capa.classList.add("flip");
    page1.classList.add("fade-in");
    page1.style.display = "block";
  }
});

// Página 1
page1.addEventListener('click', function (event) {
  const storyRect = page1.getBoundingClientRect();
  const clickPosition = event.clientX;
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    // Voltar para capa
    capa.classList.remove("flip");
    page1.classList.remove("fade-in");
    page1.classList.add("fade-out");

    page1.addEventListener("animationend", () => {
      page1.style.display = "none";
      page1.classList.remove("fade-out", "fade-in");
    }, { once: true });

  } else {
    // Ir para a página 2
    page1.classList.add("flip");
    page2.style.display = "block";
    page2.classList.add("fade-in");
  }
});


// pg2
page2.addEventListener('click', function (event) {
  const storyRect = page2.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    // Voltar para pg1
    page1.classList.remove("flip");
    page2.classList.remove("fade-in");
    page2.classList.add("fade-out");

    page2.addEventListener("animationend", () => {
      page2.style.display = "none";
      page2.classList.remove("fade-out", "fade-in");
    }, { once: true });

  } else {
    // Ir para a página 2
    page2.classList.add("flip");
    page3.style.display = "block";
    page3.classList.add("fade-in");
  }
});

// pg3
page3.addEventListener('click', function (event) {
  const storyRect = page3.getBoundingClientRect(); // Pega a posição da div
  const clickPosition = event.clientX; // Pega a posição do clique na horizontal

  // Calcula o meio da div
  const middle = storyRect.left + storyRect.width / 2;

  if (clickPosition < middle) {
    // desvirar
    page2.classList.toggle("flip");
    setTimeout(() => {
      page3.style.display = "none";
      page2.style.display = "block";
    }, 300);

  } else {
    page3.classList.toggle("flip");
    setTimeout(() => {
      document.getElementById("page3").style.display = "block";
    }, 300);
  }
});