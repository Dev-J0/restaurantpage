
import { home } from "./home" 
import { contact } from "./contact"
import { menu } from "./menu"

export function loadMainPage() {
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



    menuButton.addEventListener("click", function() {
     //    content.innerHTML = "";
            
        console.log("Menu button clicked")
    });

    homeButton.addEventListener("click", function() {
        console.log("Homebutton clickeeeeed");
    });


  contactButton.addEventListener("click", function() {
        console.log("CLICK BUTTON");
        contact();
  })






  

    menuContainer.appendChild(homeButton);
    menuContainer.appendChild(menuButton);
    menuContainer.appendChild(contactButton);
    content.appendChild(menuContainer);
}









