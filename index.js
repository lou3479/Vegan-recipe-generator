function generateRecepie(event) {
    event.preventDefault();

    let recipeElement = document.querySelector("#recipe");

    new Typewriter("#recipe", {
      strings: "This is where the recipe will go",
      autoStart: true,
      delay: 1,
      cursor: "",
    });

}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecepie);