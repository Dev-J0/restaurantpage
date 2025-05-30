export function loadMainPage() {
    console.log("Page loadeeeeeeeeed");

    const content = document.getElementById("content");

    const title = document.createElement("h2");
    title.textContent = "Welcome";

    const paragraphTitle = document.createElement("p");
    paragraphTitle.textContent = "Please take a look at our menu";

    content.appendChild(title);
    content.appendChild(paragraphTitle);

 /*    const imgTitle = document.createElement("img");
    imgTitle.src = "./how-to-draw-a-cartoon-animal.jpg";
    content.appendChild(imgTitle);

    const sideBar = document.createElement("div");
    console.log("sidebar appearing?");
    sideBar.innerText = "Sidebar";
    sideBar.style.backgroundColor = "red";

    content.appendChild(sideBar); */
}
