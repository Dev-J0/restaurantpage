

    function hideAllSections() {
    const sections = ["homeContainer", "restaurantMenu", "contactContainer"];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.hidden = true;
        }
    });
}



export function menu() {
     hideAllSections();

    const existing = document.getElementById("menuContainer");
    if (existing) {
        existing.hidden = false;
        return;
    }

    const content = document.getElementById("content");
const menuContainer = document.createElement("div");
menuContainer.id = "restaurantMenu";
menuContainer.className = "menuContent";


    const menuTitle = document.createElement("h1");
    menuTitle.innerText = "Our Menu";

    const dishes = [
        { name: "Margherita Pizza", description: "Classic pizza with fresh tomatoes and mozzarella.", price: "$12" },
        { name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing.", price: "$8" },
        { name: "Spaghetti Carbonara", description: "Pasta with eggs, cheese, pancetta, and pepper.", price: "$15" },
    ];

    const menuList = document.createElement("ul");
    dishes.forEach(dish => {
        const dishItem = document.createElement("li");

        const dishName = document.createElement("h3");
        dishName.innerText = dish.name;

        const dishDesc = document.createElement("p");
        dishDesc.innerText = dish.description;

        const dishPrice = document.createElement("p");
        dishPrice.innerText = dish.price;

        dishItem.appendChild(dishName);
        dishItem.appendChild(dishDesc);
        dishItem.appendChild(dishPrice);
        menuList.appendChild(dishItem);
    });

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuList);
    content.appendChild(menuContainer);
}
