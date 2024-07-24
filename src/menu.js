function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "Godiva",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Lindt",
      )
    );
    menu.appendChild(
      createMenuItem(
        "BonBonBon",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Vosges",
      )
    );
    menu.appendChild(
      createMenuItem(
        "SeesCandies",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Lagustas",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Patchi",
      )
    );
    menu.appendChild(
      createMenuItem(
        "Guylian",
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/pizzas/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;