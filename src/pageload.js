import { home } from "./home" 


export function loadMainPage() {
    console.log("Page loadeeeeeeeeed");

    const content = document.getElementById("content");

    const menuContainer = document.createElement("div");
menuContainer.setAttribute("class", "menuContainer");


    const homeButton = document.createElement("button");
    homeButton.innerText = "Home";
    home();


    const menuButton = document.createElement("button");
    menuButton.innerText = "Menu";

    const contactButton = document.createElement("button");
    contactButton.innerText = "Contact";

    menuContainer.appendChild(homeButton);
    menuContainer.appendChild(menuButton);
    menuContainer.appendChild(contactButton);


    content.appendChild(menuContainer);
}









