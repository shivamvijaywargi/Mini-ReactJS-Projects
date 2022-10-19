import { useEffect, useState } from "react";
import Todos from "./components/Todos";

function App() {
  // const [parsedTodos, setParsedTodos] = useState([
  //   JSON.parse(localStorage.getItem("todos")),
  // ]);

  const [todoText, setTodoText] = useState("");
  const [todosList, setTodosList] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    {
      todoText &&
        setTodosList([
          ...todosList,
          {
            id: todosList.length,
            todoName: todoText,
          },
        ]);
    }

    setTodoText("");
  };

  const handleEdit = (todoId) => {
    const userUpdatedTodo = prompt("Enter updated todo");

    const todosListCopy = [...todosList];

    todosListCopy.map((todo) => {
      if (todo.id === todoId) {
        todo.todoName = userUpdatedTodo;
      }
    });

    setTodosList(todosListCopy);
  };

  const handleDelete = (todoId) => {
    const newTodosList = todosList.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodosList(newTodosList);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  }, [todosList]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center flex-col">
        <h1>ToDo list application</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo"
            className="outline px-4 py-1 focus:outline-blue-400"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-1.5 ml-2 text-white cursor-pointer hover:bg-blue-400"
          >
            Add
          </button>
        </form>

        {todosList &&
          todosList.map((todo) => (
            <Todos
              key={todo.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              allTodos={todo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
