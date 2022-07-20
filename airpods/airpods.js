// const searchButton = document.querySelector("nav .desktop-nav .link-search");
// const closeButton = document.querySelector(".search-container .link-close");
// const desktopNav = document.querySelector(".desktop-nav");
// const searchContainer = document.querySelector(".search-container");
// const overlay = document.querySelector(".overlay");


// searchButton.addEventListener("click",() => {
//     desktopNav.classList.add("hide");
//     searchContainer.classList.remove("hide");
//     overlay.classList.add("show");
// })

// closeButton.addEventListener("click",() => {
//     desktopNav.classList.remove("hide");
//     searchContainer.classList.add("hide");
//     overlay.classList.remove("show");
// })

// overlay.addEventListener("click",() => {
//     desktopNav.classList.remove("hide");
//     searchContainer.classList.add("hide");
//     overlay.classList.remove("show");
// })

// // mobile version

// const menuIconContainer = document.querySelector("nav .menu-icon-container");
// const navContainer = document.querySelector(".nav-container");

// menuIconContainer.addEventListener("click", () => {
//     navContainer.classList.toggle("active");
// })

// const searchBar = document.querySelector(".mobile-search-container .search-bar");
// const nav = document.querySelector(".nav-container nav");
// const searchInput = document.querySelector(".mobile-search-container input");
// const cancelButton = document.querySelector(".mobile-search-container .cancel-button");

// searchInput.addEventListener("click",() => {
//     searchBar.classList.add("active");
//     nav.classList.add("move-up");
//     desktopNav.classList.add("move-down");
// })

// cancelButton.addEventListener("click",() => {
//     searchBar.classList.remove("active");
//     nav.classList.remove("move-up");
//     desktopNav.classList.remove("move-down");
// })



// ----------------------------------------------------------------------------------------------------
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()