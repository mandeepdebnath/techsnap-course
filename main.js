let sectionBtn1 = document.querySelector(".section-btn-1");
let sectionBtn2 = document.querySelector(".section-btn-2");
let sectionBtn3 = document.querySelector(".section-btn-3");
let sectionBtn4 = document.querySelector(".section-btn-4");
let sectionBtn5 = document.querySelector(".section-btn-5");
// let sectionBtn6 = document.querySelector(".section-btn-6");
// let sectionBtn7 = document.querySelector(".section-btn-7");
// let sectionBtn8 = document.querySelector(".section-btn-8");
// let sectionBtn9 = document.querySelector(".section-btn-9");
// let sectionBtn10 = document.querySelector(".section-btn-10");

let subMenu1 = document.querySelector(".sub-menu-1");
let subMenu2 = document.querySelector(".sub-menu-2");
let subMenu3 = document.querySelector(".sub-menu-3");
let subMenu4 = document.querySelector(".sub-menu-4");
let subMenu5 = document.querySelector(".sub-menu-5");
// let subMenu6 = document.querySelector(".sub-menu-6");
// let subMenu7 = document.querySelector(".sub-menu-7");
// let subMenu8 = document.querySelector(".sub-menu-8");
// let subMenu9 = document.querySelector(".sub-menu-9");
// let subMenu10 = document.querySelector(".sub-menu-10");

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
sectionBtn3.onclick = () => {
  console.log("heyy");
  subMenu3.classList.toggle("show");
};
sectionBtn4.onclick = () => {
  console.log("heyy");
  subMenu4.classList.toggle("show");
};
sectionBtn5.onclick = () => {
  console.log("heyy");
  subMenu5.classList.toggle("show");
};
// sectionBt6.onclick = () => {
//   console.log("heyy");
//   subMen6.classList.toggle("show");
// };
// sectionBtn7.onclick = () => {
//   console.log("heyy");
//   subMenu7.classList.toggle("show");
// };
// sectionBtn8.onclick = () => {
//   console.log("heyy");
//   subMenu8.classList.toggle("show");
// };
// sectionBtn9.onclick = () => {
//   console.log("heyy");
//   subMenu9.classList.toggle("show");
// };
// sectionBtn10.onclick = () => {
//   console.log("heyy");
//   subMenu10.classList.toggle("show");
// };

let mobileNavBtn = document.querySelector(".mobile-nav-icon");
let courseNav = document.querySelector(".sidebar-nav-container");

mobileNavBtn.onclick = () => {
  courseNav.classList.toggle("show-mobile");
};
