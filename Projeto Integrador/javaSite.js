const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');

let counter = 0;

// Ajusta o tamanho do carrossel com base na largura da tela
function updateCarouselSize() {
    const size = carouselItems[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Função de Avanço Automático
function autoSlide() {
    const size = carouselItems[0].clientWidth;
    if (counter >= carouselItems.length - 1) counter = -1;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Controle pelos botões
document.querySelector('.next').addEventListener('click', () => {
    const size = carouselItems[0].clientWidth;
    if (counter >= carouselItems.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.querySelector('.prev').addEventListener('click', () => {
    const size = carouselItems[0].clientWidth;
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Configuração de intervalo para slide automático
setInterval(autoSlide, 3000);

// Ajusta o carrossel ao redimensionar a tela
window.addEventListener('resize', updateCarouselSize);

// Inicializa o tamanho do carrossel
updateCarouselSize();
