export function home() {
    const content = document.getElementById("content");

    const homeContainer = document.createElement("div");
    homeContainer.className = "homeContainer"; // Fixed

    const homeText = document.createElement("p");
    homeText.innerText = "We keep it simple: good food, curious flavors, and zero nonsense. A menu that shifts with the mood, plates that don't shout, and a space where silence tastes like something. Come for the food. Stay until you remember you were hungry.";

    const title = document.createElement("h1");
    title.innerText = "Welcome to Salt & Static";

    homeContainer.appendChild(title);
    homeContainer.appendChild(homeText);
    content.appendChild(homeContainer);
}
