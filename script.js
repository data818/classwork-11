// grid კონტეინერი
const catGrid = document.getElementById("catGrid");

//კატების სურათების ლინკი
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach(function (cat) {
      createCard(cat.url);
    });
  });

function createCard(imageUrl) {
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Cat image";

  card.appendChild(img);
  catGrid.appendChild(card);
}
