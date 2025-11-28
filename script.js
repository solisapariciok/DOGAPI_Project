// Special breeds for demonstration
const specialBreeds = ["Bulldog", "Pug", "Beagle"];

// Function to fetch a random dog image and show breed info if available
function loadRandomDog() {
  fetch("https://api.thedogapi.com/v1/images/search", {
    headers: { "x-api-key": live_yxSPPmitVewn8XYl6QXEqZlhqk9ETir1aKqLB3XHSqhV351MO5abXogSKsr5WYEn }
  })
    .then(res => res.json())
    .then(data => {
      const dog = data[0];
      const imageUrl = dog.url;
      const breed = dog.breeds && dog.breeds[0] ? dog.breeds[0].name : "Unknown";

      const message = specialBreeds.includes(breed) ? 
        `Wow! It's a special ${breed} 🐶` : 
        `This is a ${breed}`;

      document.getElementById("dogContainer").innerHTML = `
        <img src="${imageUrl}" alt="Dog Image">
        <p>${message}</p>
      `;
    })
    .catch(err => console.error(err));
}

// Function to fetch all dog breeds
function listBreeds() {
  fetch("https://api.thedogapi.com/v1/breeds", {
    headers: { "x-api-key": live_yxSPPmitVewn8XYl6QXEqZlhqk9ETir1aKqLB3XHSqhV351MO5abXogSKsr5WYEn }
  })
    .then(res => res.json())
    .then(data => {
      const breedContainer = document.getElementById("breedContainer");
      breedContainer.innerHTML = "";
      data.forEach(breed => {
        breedContainer.innerHTML += `<p>${breed.name} - ${breed.temperament || "No info"}</p>`;
      });
    })
    .catch(err => console.error(err));
}

// Connect buttons to functions
document.getElementById("loadDogBtn").addEventListener("click", loadRandomDog);
document.getElementById("loadBreedBtn").addEventListener("click", listBreeds);

