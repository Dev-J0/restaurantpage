import { hideAllSections  } from "./hideSections";



    export function contact() {

    
    hideAllSections();

    const existing = document.getElementById("contactContainer");
    if (existing) {
        existing.hidden = false;
        return;
    }

    const content = document.getElementById("content");
    const contactContainer = document.createElement("div");
    contactContainer.id = "contactContainer";
    contactContainer.className = "contactContainer";

    const contactTitle = document.createElement("h1");
    contactTitle.innerText = "Contact us";

    const contactText = document.createElement("p");
    contactText.innerText = "Want to contact us? 065652656";

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactText);

    content.appendChild(contactContainer);
      console.trace("contact() was called");
}
