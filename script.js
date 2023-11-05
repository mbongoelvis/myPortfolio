// lenis for smooth scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




const opens = document.querySelector(".open")
const close = document.querySelector(".close")
const drop = document.querySelector(".drop")
const loader = document.querySelector(".loader")
const menu = document.querySelector(".menu")

// toggle menu
menu.addEventListener("click", () => {
  const menuItem = document.querySelector(".menu-dropdown")
  if (menuItem.classList.contains("hidden")) {
    menuItem.classList.remove("hidden")
    menuItem.classList.add("flex", "ld", "ld-rush-rtl-in")
  }else {
    menuItem.classList.add("hidden");
  }
})

const displayLoader = () => {
  setTimeout(() => {
    loader.style.display = "none"
  }, 3000)
}
 displayLoader()

function OpenMenu() {
    if (drop.classList.contains("hidden")) {
        drop.classList.remove("hidden")
        drop.classList.add("flex")
    }
}

function CloseMenu() { 
    if (!drop.classList.contains("hidden")) {
        drop.classList.add("hidden")
    }
}