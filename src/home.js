
    function hideAllSections() {
    const sections = ["homeContainer", "restaurantMenu", "contactContainer"];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.hidden = true;
        }
    });
}



export function home() {
    hideAllSections();

    let homeContainer = document.getElementById("homeContainer");
    if (!homeContainer) {
        homeContainer = document.createElement("div");
        homeContainer.id = "homeContainer";
        homeContainer.className = "homeContainer";

        const homeTitle = document.createElement("h1");
        homeTitle.innerText = "Welcome to Our Restaurant";

        const homeText = document.createElement("p");
        homeText.innerText = "Enjoy our delicious food and cozy atmosphere.";

        homeContainer.appendChild(homeTitle);
        homeContainer.appendChild(homeText);

        document.getElementById("content").appendChild(homeContainer);
    }

    homeContainer.hidden = false;
}
