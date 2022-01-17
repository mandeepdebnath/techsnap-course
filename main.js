let sectionBtn1 = document.querySelector(".section-btn-1");
let sectionBtn2 = document.querySelector(".section-btn-2");
let sectionBtn3 = document.querySelector(".section-btn-3");
let subMenu1 = document.querySelector(".sub-menu-1");
let subMenu2 = document.querySelector(".sub-menu-2");
let subMenu3 = document.querySelector(".sub-menu-3");

// let navBtn = document.querySelector(".nav-btn");
// let sidebar = document.querySelector(".sidebar");

// navBtn.onclick = () => {
//   navBtn.classList.toggle("click");
//   sidebar.classList.toggle("show-sidebar");
// };

sectionBtn1.onclick = () => {
  console.log("heyy");
  subMenu1.classList.toggle("show");
};
sectionBtn2.onclick = () => {
  console.log("heyy");
  subMenu2.classList.toggle("show");
};
// sectionBtn3.onclick = () => {
//   console.log("heyy");
//   subMenu3.classList.toggle("show");
// };

let mobileNavBtn = document.querySelector(".mobile-nav-icon");
let courseNav = document.querySelector(".sidebar-nav-container");

mobileNavBtn.onclick = () => {
  courseNav.classList.toggle("show-mobile");
};
