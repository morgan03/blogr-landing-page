mobileMenuIcon = document.querySelector(".mobile-hamburger");
mobileMenuItems = document.querySelectorAll(".mobile_label");

mobileMenuItems.forEach((item) => item.addEventListener("click", expandMenuItems));
mobileMenuIcon.addEventListener("click", expandMenu);

function expandMenu(e){
  let closeIcon = 'url("images/icon-close.svg")';
  let hamburgerIcon = 'url("images/icon-hamburger.svg")';
  let headingContent = document.querySelector("#heading-content");
  let headingButtons = document.querySelector("#heading-btn");
  let mobileMenu = document.querySelector(".mobile-menu");

  if (e.target.classList.contains("open")){
    headingContent.classList.add("hide-item");
    headingButtons.classList.add("hide-item");
    mobileMenu.classList.remove("hide-item");
    e.target.style.background = closeIcon;
    e.target.style.height = '25px';
    e.target.classList.remove("open");
  }
  else{
    mobileMenu.classList.add("hide-item");
    headingContent.classList.remove("hide-item");
    headingButtons.classList.remove("hide-item");
    e.target.style.background = hamburgerIcon;
    e.target.style.height = '18px';
    e.target.classList.add("open");
  }
}

function expandMenuItems(e){
  if (e.target.id == 'label-product') {
    var menuContent = document.querySelector("#content-product");
  }
  else if (e.target.id == 'label-company' ){
    var menuContent = document.querySelector("#content-company");
  }
  else{
    var menuContent = document.querySelector("#content-connect");
  }

  if (menuContent.classList.contains("hide-item")){
    menuContent.classList.remove("hide-item");
  }
  else{
    menuContent.classList.add("hide-item")
  }
}
