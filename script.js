let sidebarEvent = document.querySelector("#menu")
let sidebar = document.querySelector(".sidebar")

sidebarEvent.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
}