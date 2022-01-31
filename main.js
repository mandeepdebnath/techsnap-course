let sectionBtn1 = document.querySelector(".section-btn-1");
let sectionBtn2 = document.querySelector(".section-btn-2");
// let sectionBtn3 = document.querySelector(".section-btn-3");
// let sectionBtn4 = document.querySelector(".section-btn-4");
// let sectionBtn5 = document.querySelector(".section-btn-5");

// let sectionBtn6 = document.querySelector(".section-btn-6");
// let sectionBtn7 = document.querySelector(".section-btn-7");
// let sectionBtn8 = document.querySelector(".section-btn-8");
// let sectionBtn9 = document.querySelector(".section-btn-9");
// let sectionBtn10 = document.querySelector(".section-btn-10");

let subMenu1 = document.querySelector(".sub-menu-1");
let subMenu2 = document.querySelector(".sub-menu-2");
// let subMenu3 = document.querySelector(".sub-menu-3");
// let subMenu4 = document.querySelector(".sub-menu-4");
// let subMenu5 = document.querySelector(".sub-menu-5");
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
// sectionBtn3.onclick = () => {
//   console.log("heyy");
//   subMenu3.classList.toggle("show");
// };
// sectionBtn4.onclick = () => {
//   console.log("heyy");
//   subMenu4.classList.toggle("show");
// };
// sectionBtn5.onclick = () => {
//   console.log("heyy");
//   subMenu5.classList.toggle("show");
// };
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

let sidebar = document.querySelector(".sidebar");
let body = document.getElementById("body");

// sidebar.addEventListener("scroll", function (e) {
//   console.log("scrolling");
//   body.setAttribute("style", "height: 100%");
//   e.preventDefault();
// });

// sidebar.scroll(function (event) {
//   event.stopPropagation(); //Do not bubble up the DOM, do not scroll document.
// });

let profile = document.querySelector(".profile-avatar");
let profileDropdown = document.querySelector(".profile-dropdown");
let courseContainer = document.querySelector(".course-container");

profile.onclick = () => {
  console.log("profile clickedd");
  profileDropdown.classList.toggle("show");
};

courseContainer.onclick = () => {
  profileDropdown.classList.remove("show");
};

let overviewNav = document.getElementById("overview");
let overviewDesc = document.querySelector(".overview-desc");

let notesNav = document.getElementById("notes");
let notesDesc = document.querySelector(".notes-desc");

let qnaNav = document.getElementById("qna");
let qnaDesc = document.querySelector(".qna-desc");

let assignmentsNav = document.getElementById("assignments");
let assignmentsDesc = document.querySelector(".assignments-desc");

overviewNav.onclick = () => {
  if (
    !overviewDesc.classList.contains("show") &&
    !overviewNav.classList.contains("active")
  ) {
    console.log("nav clicked");

    overviewDesc.classList.add("show");
    overviewNav.classList.add("active");

    notesDesc.classList.remove("show");
    notesNav.classList.remove("active");

    qnaDesc.classList.remove("show");
    qnaNav.classList.remove("active");

    assignmentsDesc.classList.remove("show");
    assignmentsNav.classList.remove("active");
  }
};

notesNav.onclick = () => {
  if (
    !notesDesc.classList.contains("show") &&
    !notesNav.classList.contains("active")
  ) {
    console.log("nav clicked");

    notesDesc.classList.add("show");
    notesNav.classList.add("active");

    overviewDesc.classList.remove("show");
    overviewNav.classList.remove("active");

    qnaDesc.classList.remove("show");
    qnaNav.classList.remove("active");

    assignmentsDesc.classList.remove("show");
    assignmentsNav.classList.remove("active");
  }
};

qnaNav.onclick = () => {
  if (
    !qnaDesc.classList.contains("show") &&
    !qnaNav.classList.contains("active")
  ) {
    console.log("nav clicked");

    qnaDesc.classList.add("show");
    qnaNav.classList.add("active");

    notesDesc.classList.remove("show");
    notesNav.classList.remove("active");

    overviewDesc.classList.remove("show");
    overviewNav.classList.remove("active");

    assignmentsDesc.classList.remove("show");
    assignmentsNav.classList.remove("active");
  }
};

assignmentsNav.onclick = () => {
  if (
    !assignmentsDesc.classList.contains("show") &&
    !assignmentsNav.classList.contains("active")
  ) {
    console.log("nav clicked");

    assignmentsDesc.classList.add("show");
    assignmentsNav.classList.add("active");

    notesDesc.classList.remove("show");
    notesNav.classList.remove("active");

    qnaDesc.classList.remove("show");
    qnaNav.classList.remove("active");

    overviewDesc.classList.remove("show");
    overviewNav.classList.remove("active");
  }
};

let mobileNavBtn = document.querySelector(".mobile-nav-icon");
let courseNav = document.querySelector(".sidebar-nav-container");

mobileNavBtn.onclick = () => {
  courseNav.classList.toggle("show-mobile");
};

// document
//   .querySelector(".sidebar-nav-container")
//   .addEventListener("touchmove", preventScroll, { passive: false });

// function preventScroll(e) {
//   e.preventDefault();
//   e.stopPropagation();

//   return false;
// }
