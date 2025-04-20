document.addEventListener("DOMContentLoaded", function () {
    // Animasi saat scroll
    const sections = document.querySelectorAll("section");
    const projectItems = document.querySelectorAll(".project-item");
    
    function revealOnScroll() {
        sections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight - 50) {
                section.classList.add("show");
            }
        });

        projectItems.forEach((item) => {
            if (item.getBoundingClientRect().top < window.innerHeight - 50) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Panggil saat pertama kali

    // Tambahkan efek hover ke link sosial media
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.2)";
            link.style.transition = "transform 0.3s ease-in-out";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Menu toggle untuk navigasi
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});


document.querySelector(".profile-img").addEventListener("click", function() {
    alert("Mau kenalan langsung DM/WA🤣");
});


document.querySelector(".profile-img").addEventListener("click", function() {
    document.getElementById("profileModal").style.display = "flex";
});

function closeModal() {
    document.getElementById("profileModal").style.display = "none";
}
