const root = document.getElementById("root");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  })
  .then((data) => {
    let img = document.createElement("img");
    img.alt = `${data.alt}`;
    img.src = `${data.img}`;
    img.title = `${data.title}`;
    root.appendChild(img);
  })
  .catch((error) => {
    alert(error);
  });
