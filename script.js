let currentImageIndex = 0;
const images = [
    "https://via.placeholder.com/400x250?text=Project+Image+1",
    "https://via.placeholder.com/400x250?text=Project+Image+2",
    "https://via.placeholder.com/400x250?text=Project+Image+3"
];

function nextSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('carousel-img').src = images[currentImageIndex];
}

function prevSlide() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('carousel-img').src = images[currentImageIndex];
}

