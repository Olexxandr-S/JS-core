function readingList(books) {
  // Write your code here...
  let contain = document.querySelector("#content");
  //                                       ^^^ this is an ID for the html element.
  //                                           by the rule, an html page should have only unique IDs
  //                                           if this is not the case, then that's an issue and must be fixed
  //                                           so, having said thed, you should use another selector,
  //                                           the one, that returns a single html element instead of collection:
  //                                           let content = querySelector("#content");
  // pavel.
  //console.log(contain[0]); // don't forget to clean up unnecessary console.log() lines after you finished with debugging,
  // or, debug it with dev-tools by putting break points :)

  let listOfBooks = document.createElement("ul");
  //   ^^^ nobody knows what you intend to put into 'yourList'
  //       unless you name it in more self-descriptive way: 'listOfBooks'

  contain.appendChild(listOfBooks);
  //   ^^^ this supposed to be just 'content', after you follow the first comment above :)

  books.forEach((book) => {
    let bookLi = document.createElement("li");
    //   ^^^ you can call it 'bookLi' or 'bookElement' or just simply 'li'

    let caption = document.createElement("p");
    //   ^^^ better call it 'bookCaption' or 'caption' or 'header' (meaning "caption" or "header" for the Book Element on the page)

    let bookImage = document.createElement("img");
    //   ^^^ better call it 'bookCoverImage' or 'bookImage' or coverImage

    bookLi.appendChild(caption);
    bookLi.appendChild(bookImage);
    listOfBooks.appendChild(bookLi);

    caption.innerText = `${book.title} by ${book.author}`;
    bookImage.src = book.bookCoverImage;

    if (book.alreadyRead) {
      bookLi.classList.add("background-color--read");
      //                          ^^^ there is no such class in style.css, so we can't see effect of it
      //                              i can only see .red class in css.
      //                              so, you might want use it for unread books and create .green or something for the read books :)
    } else {
      bookLi.classList.add("background-color--unread");
    }
  });
}

// pavel:
// overall comment: the logic if fine.
// only improvements neeed in naming variables, for "cleaner code".
// names for variables and functions should be self-descriptive.
// please read through this: https://github.com/ryanmcdermott/clean-code-javascript
// and you'll also find there many more useful suggestions and best practices there :)

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
