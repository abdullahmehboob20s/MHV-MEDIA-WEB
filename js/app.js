const navbarRight = document.querySelector(".nav-right");
const hamburger = document.querySelector(".hamburger");
const crossIcon = document.querySelector(".cross-icon");
const btns = Array.from(document.querySelectorAll(".product-btn"));
const modal = document.querySelector(".checkout-modal");
const modalContent = document.querySelector(".checkout-content");
const modalCrossIcon = document.querySelector(".modal-cross-icon");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.style.animation = "modalWrapperAnimationOpen 0.2s ease forwards";
    modalContent.style.display = "block";
    modalContent.style.animation = "modalAnim 0.3s ease 0.3s forwards";
    document.body.style.overflowY = "hidden";

    modal.scrollTo(0, 0);
  });
});

modalCrossIcon.addEventListener("click", (e) => closeModal);
modal.addEventListener(
  "click",
  function (event) {
    if (
      event.target.matches(".modal-cross-icon") ||
      !event.target.closest(".checkout-content")
    ) {
      closeModal();
    }
  },
  false
);

function closeModal() {
  document.querySelector(".checkout-modal").style.display = "none";
  modal.style.display = "none";
  modalContent.style.display = "none";
  document.body.style.overflowY = "scroll";
}

hamburger.addEventListener("click", () => {
  navbarRight.classList.toggle("open");
});
crossIcon.addEventListener("click", () => {
  navbarRight.classList.remove("open");
});
