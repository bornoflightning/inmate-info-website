
const button = document.querySelector(".button");
const card = document.querySelector(".card");


let doggie = {
    breed : "breed",
    getDog : function() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => generateImage(data.message))
        .catch(err => console.error(err));
        }   
    };





function generateImage(data) {
    const html = `
        <img src= '${data}' alt>
        <p>Here is a random image of a doggie!!</p> `;   
    card.innerHTML = html;
}

button.addEventListener("click", function() {
    doggie.getDog();
});