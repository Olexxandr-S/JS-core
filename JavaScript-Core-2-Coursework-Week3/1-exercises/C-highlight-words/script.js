const content = document.querySelector("#content");

function highlightWords(paragraph, colors) {
  // Write your code here...
  let paragraphElement = document.createElement(`p`);
  //    ^^^ better call it 'paragraphElement' or just simply 'p' :)

  let currentColor = document.createElement(`select`);
  //    ^^^ better reserver this variable name for some JS internal variable, like 'currentColor' below.
  //        and call this one as 'selectColor' or 'colorSelect'

  colors.forEach((color) => {
    //              ^^^ better call it 'color'

    let option = document.createElement(`option`); // oh, 'option' is perfectly fine here
    // alternative names could be: 'colorOption' or 'colorSelectOption'
    // but, as long as we have only one 'select' element on our page,
    // 'option' doesn't look vague or ambiguous here, so is still good :)
    option.innerText = color;

    currentColor.appendChild(option);
    // ^^^ yeah, as stated above,
    // 'selectedColor' is the value of the 'option' that user chooses from the 'select' element.
  });

  content.append(currentColor, paragraphElement);

  const words = paragraph.split(" ");
  words.forEach((word) => {
    //           ^^^ oh, this is good! nice chice for the variable name here! :)
    const spanElement = document.createElement("span");
    //           ^^^ and here as well! :)
    spanElement.innerText = word + " ";
    spanElement.addEventListener("click", () => {
      const selectMenu = document.querySelector("select");
      //      ^^^ you have it already in the global variable 'selectedColor' (which must be renamed :))
      //          so no need to do the same again. reuse that blobal variable.

      const currentColor =
        selectMenu.value === `none` ? `white` : selectMenu.value;

      // pavel:
      // well, there is one more thing needs to be done as per task:
      // "....or highlighting should be removed if the clicked word is already highlighted"
      // but we have none color value

      spanElement.style.backgroundColor = currentColor;
    });
    paragraphElement.appendChild(spanElement);
  });
}

// function updateColour(event) {
//   const targetedSpan = event.target;
//   const selectMenu = document.querySelector("select");
//   const currentColour = selectMenu.value;
//   targetedSpan.style.backgroundColor = currentColour;
// }
// pavel: this is good idea to use a separate function/handler for updating color for a word :)

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
