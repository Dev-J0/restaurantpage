
export function home() {
    const content = document.getElementById("content");

    const homeButton = document.createElement("button");
    homeButton.innerText = "Home";
    
    const homeText = document.createElement("p");
    homeText.innerText = "We keep it simple: good food, curious flavors, and zero nonsense. A menu that shifts with the mood, plates that don't shout, and a space where silence tastes like something.Come for the food. Stay until you remember you were hungry.";

    const title = document.createElement("h1");
    title.innerText = " Welcome to Salt & Static";
    
    
    content.appendChild(homeButton);
    content.appendChild(title);
    content.appendChild(homeText);
    


}