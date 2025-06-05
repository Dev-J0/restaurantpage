
    function hideAllSections() {
    const sections = ["homeContainer", "restaurantMenu", "contactContainer"];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.hidden = true;
        }
    });
}


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
}
