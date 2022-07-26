const photoBox = document.getElementById("photo-box");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  photoBox.replaceChildren([]);

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      const photo = document.createElement("li");
      photo.className = "photo";

      let dog = document.createElement("img");
      dog.alt = "";
      dog.src = `${data.message}`;
      photo.appendChild(dog);

      photoBox.appendChild(photo);
    })
    .catch((error) => {
      alert(error.status);
    });
});
