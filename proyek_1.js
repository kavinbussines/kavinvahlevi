document.addEventListener("DOMContentLoaded", function () {
    console.log("Portofolio UI/UX siap!");
});
function openModal(imageSrc, description) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalText").innerText = description;
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}