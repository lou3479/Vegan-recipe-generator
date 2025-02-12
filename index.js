function displayRecipe(response){

    console.log("recipe generated")
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

function generateRecepie(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0964dbacb3t4c6f7ef63238e4oee0743";
    let prompt = `Generate a vegan recepie using ${instructionsInput.value}`;
    let context = "You are a vegan food expert, you love to suggest short and simple recepie. Recipes must not include any animal derived products.Generate using basic HTML. Make sure to follow the user instructions.";
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      console.log("Generating Recipe");
      console.log(`Prompt: ${prompt}`);
      console.log(`Context: ${context}`);

      axios.get(apiUrl).then(displayRecipe);
}


let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecepie);