
import { home } from "./home"
import { menu } from "./menu"
import { contact } from "./contact"


export function loadMainPage() {
    const menuContent = document.getElementById("menuBar");

    const menuContainer = document.createElement("div");
    menuContainer.className = "menuContainer";

    const homeButton = document.createElement("button");
    homeButton.innerText = "Home";

    const menuButton = document.createElement("button");
    menuButton.innerText = "Menu";

    const contactButton = document.createElement("button");
    contactButton.innerText = "Contact";

    homeButton.addEventListener("click", function () {
        home(); 
        console.log("Home button clicked");
    });

      contactButton.addEventListener("click", function () {
        contact();
        console.log("Contact button clicked");
    }); 
    menuButton.addEventListener("click", function () {
        menu(); 
        console.log("Menu button clicked");
    });

  

    menuContainer.appendChild(homeButton);
    menuContainer.appendChild(menuButton);
    menuContainer.appendChild(contactButton);

    menuContent.appendChild(menuContainer);

    home();
}
