const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000); // Cambia slide ogni 3 secondi

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function apriImmagine(elemento) {
  const overlay = document.getElementById('overlay');
  const imgIngrandita = document.getElementById('img-ingrandita');
  imgIngrandita.src = elemento.src;
  overlay.style.display = 'flex';
}

function chiudiImmagine() {
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  const elementi = document.querySelectorAll(".fade-in");

  const osservatore = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        osservatore.unobserve(entry.target); // lo attiva solo una volta
      }
    });
  }, {
    threshold: 0.2 // parte quando il 20% è visibile
  });

  elementi.forEach((el) => osservatore.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("citazione");
  const fullText = el.textContent;
  el.textContent = "";

  const autore = document.querySelector(".autore");

  let index = 0;

  function typeWriter() {
    if (index < fullText.length) {
      el.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, 30);
    } else {
      // Dopo che ha finito di scrivere, mostra autore
      autore.classList.add("visible");
    }
  }

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      typeWriter();
      observer.disconnect();
    }
  });

  observer.observe(el);
});



  function toggleCollapse(element) {
    const content = element.nextElementSibling;
    const isOpen = content.style.display === "block";
    
    // Chiude tutte le altre se vuoi "stile fisarmonica":
    // document.querySelectorAll(".contenuto-collassabile").forEach(c => c.style.display = "none");
    // document.querySelectorAll(".titolo-lavoro-cliccabile").forEach(t => t.classList.remove("attiva"));

    if (isOpen) {
      content.style.display = "none";
      element.classList.remove("attiva");
    } else {
      content.style.display = "block";
      element.classList.add("attiva");
    }
  }

  document.getElementById("formContatti").addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  // Campi
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const oggetto = document.getElementById("oggetto");
  const messaggio = document.getElementById("messaggio");

  // Errori
  const erroreNome = document.getElementById("erroreNome");
  const erroreEmail = document.getElementById("erroreEmail");
  const erroreOggetto = document.getElementById("erroreOggetto");
  const erroreMessaggio = document.getElementById("erroreMessaggio");

  // Reset errori
  erroreNome.textContent = "";
  erroreEmail.textContent = "";
  erroreOggetto.textContent = "";
  erroreMessaggio.textContent = "";

  // Controlli
  const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
  if (!regexNome.test(nome.value.trim())) {
    erroreNome.textContent = "Inserisci solo lettere per nome e cognome.";
    valido = false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value.trim())) {
    erroreEmail.textContent = "Inserisci un'email valida.";
    valido = false;
  }

  if (oggetto.value.trim() === "") {
    erroreOggetto.textContent = "Inserisci un oggetto.";
    valido = false;
  } else if (oggetto.value.trim().length > 35) {
    erroreOggetto.textContent = "L'oggetto può avere al massimo 35 caratteri.";
    valido = false;
  }

  if (messaggio.value.trim() === "") {
    erroreMessaggio.textContent = "Inserisci un messaggio.";
    valido = false;
  } else if (messaggio.value.trim().length > 250) {
    erroreMessaggio.textContent = "Il messaggio deve avere massimo 250 caratteri.";
    valido = false;
  }


  if (valido) {
    alert("Messaggio inviato con successo!");
    // Puoi aggiungere qui il codice per l'invio effettivo
    document.getElementById("formContatti").reset();
  }
});

  // Mostra la freccia solo se si scrolla un po'
   const frecciaSu = document.getElementById("frecciaSu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 5) { 
      frecciaSu.style.display = "block";
    } else {
      frecciaSu.style.display = "none";
    }
  });

  frecciaSu.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Hamburger menu
  document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
