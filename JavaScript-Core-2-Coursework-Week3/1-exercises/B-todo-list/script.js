function todoList(todos) {
  // Write your code here...
  let contain = document.querySelector("#content");
  let myList = document.createElement("ul");
  //    ^^^ please call it 'todoList'

  contain.appendChild(myList);
  todos.forEach((element) => {
    //            ^^^ please call it 'todoItem'
    
    let myUList = document.createElement("li");
    //    ^^^ better call it 'todoListItem'

    myList.appendChild(myUList);
    
    let myText = document.createElement("p");
    //   ^^^ better call it just 'p' or 'todoMesaage'
    
    myUList.appendChild(myText);

    myText.innerText = `${element.todo}`;

    // there must be also event listener asigned on each 'todoListItem' 
    // so that "When we click on an item we want a line-through style to be added to it"
    // and "we should be able to click it again to remove the line-through styling"
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
