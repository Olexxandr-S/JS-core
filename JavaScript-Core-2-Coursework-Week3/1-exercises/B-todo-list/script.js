function todoList(todos) {
  // Write your code here...
  let contain = document.querySelector("#content");
  let todoList = document.createElement("ul");
  //    ^^^ please call it 'todoList'

  contain.appendChild(todoList);
  todoItem.forEach((element) => {
    //            ^^^ please call it 'todoItem'

    let todoListItem = document.createElement("li");
    //    ^^^ better call it 'todoListItem'

    todoList.appendChild(todoListItem);
    todoListItem.className = "unClick";

    todoListItem.addEventListener("click", () => {
      todoListItem.className == "unClick"
        ? (todoListItem.className = "click")
        : (todoListItem.className = "unClick");
    });

    let todoMesaage = document.createElement("p");
    //   ^^^ better call it just 'p' or 'todoMesaage'

    todoListItem.appendChild(todoMesaage);

    todoMesaage.innerText = `${element.todo}`;

    // there must be also event listener asigned on each 'todoListItem'
    // so that "When we click on an item we want a line-through style to be added to it"
    // and "we should be able to click it again to remove the line-through styling"
  });
}

const todoItem = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todoItem);
