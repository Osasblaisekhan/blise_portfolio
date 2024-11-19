const mobile_menu = document.getElementById("mobile_menu");
mobile_menu.addEventListener("click", function(){
    const desktop_menu = document.getElementById("desktop_menu");
    desktop_menu.classList.toggle("active");
    mobile_menu.classList.toggle("active");
})