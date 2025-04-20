document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");



    const scrollAmount = 270; // Jarak scroll setiap klik (sesuai ukuran kartu)
    
    // Fungsi untuk scroll ke kiri
    prevBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Fungsi untuk scroll ke kanan
    nextBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // Update tombol disabled jika di awal atau akhir
    carousel.addEventListener("scroll", function () {
        prevBtn.disabled = carousel.scrollLeft <= 0;
        nextBtn.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;
    });

    // Inisialisasi tombol di awal
    prevBtn.disabled = true;
});

function updateButtonVisibility() {
    // Sembunyikan tombol jika scroll sudah di ujung kiri atau kanan
    if (carousel.scrollLeft <= 0) {
        prevBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
    }

    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        nextBtn.classList.add("hidden");
    } else {
        nextBtn.classList.remove("hidden");
    }
}

prevBtn.addEventListener("click", function () {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

nextBtn.addEventListener("click", function () {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

carousel.addEventListener("scroll", updateButtonVisibility);

// Set awal saat halaman dimuat
updateButtonVisibility();

function openModal(imageSrc, description) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalText").innerText = description;
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}





