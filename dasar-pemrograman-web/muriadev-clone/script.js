// tombol class active
const navbar = document.querySelector(".menu, .btn-nav");
// ketika hamburger menu di pencet
document.querySelector("#humberger").onclick = () => {
  navbar.classList.toggle("active");
};
