function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const chefImage = document.createElement("img");
    chefImage.src = "images/planetcocoa.png";
    chefImage.alt = "Chef";
  
    home.appendChild(createParagraph("Best chocolate in our planet"));
    home.appendChild(createParagraph("A delicious cure for a bad day"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or visit us!"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;