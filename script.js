const carouselContainer = document.querySelector(".carousel-container");
const indicators = document.querySelectorAll(".indicator");
const prevArrow = document.querySelector(".carousel-arrow.prev");
const nextArrow = document.querySelector(".carousel-arrow.next");

let currentIndex = 0;

function goToSlide(index) {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function setActiveIndicator(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
  goToSlide(currentIndex);
  setActiveIndicator(currentIndex);
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % indicators.length;
  goToSlide(currentIndex);
  setActiveIndicator(currentIndex);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    goToSlide(currentIndex);
    setActiveIndicator(currentIndex);
  });
});

prevArrow.addEventListener("click", goToPrevSlide);
nextArrow.addEventListener("click", goToNextSlide);

setActiveIndicator(currentIndex);

setInterval(() => {
  currentIndex = (currentIndex + 1) % indicators.length;
  goToSlide(currentIndex);
  setActiveIndicator(currentIndex);
}, 5000);

// Dapatkan semua tautan navigasi
const navLinks = document.querySelectorAll(".nav_link");

// Pasang pendengar acara klik pada setiap tautan navigasi
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah perilaku loncat bawaan dari tautan anchor

    // Dapatkan ID bagian tujuan dari atribut href
    const targetId = link.getAttribute("href");

    // Gunakan ID bagian tujuan untuk memilih elemen bagian yang sesuai
    const targetSection = document.querySelector(targetId);

    // Hitung tinggi header yang tetap
    const headerHeight = document.querySelector("header").offsetHeight;

    // Hitung posisi scroll untuk bagian tujuan, dengan mempertimbangkan tinggi header
    const offsetTop = targetSection.offsetTop - headerHeight;

    // Gulir ke bagian tujuan secara halus
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
