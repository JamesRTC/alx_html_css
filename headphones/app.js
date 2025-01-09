// Select the menu icon and menu items
const menuIcon = document.getElementById("menuIcon");
const menuItems = document.getElementById("menuItems");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", () => {
    // Toggle the 'show' class on the menu items
    menuItems.classList.toggle("show");
});