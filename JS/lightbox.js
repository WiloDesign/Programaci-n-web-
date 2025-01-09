function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    if (lightbox && lightboxImg) {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    } else {
        console.error("Lightbox elements not found");
    }
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    } else {
        console.error("Lightbox element not found");
    }
}