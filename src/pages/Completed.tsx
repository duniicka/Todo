import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { handleDelete, handleEdit } from "../helper";

interface Todo {
  id: string; 
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

const Completed = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState<'newToOld' | 'oldToNew' | ''>('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://67a65b06510789ef0dfb3030.mockapi.io/api/movie/todo");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const filteredTodos = todos
    .filter((todo) => todo.status === "completed")
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'newToOld') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortOrder === 'oldToNew') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return 0;
    });

  return (
    <main>
      <div className="todoLists lg:px-16 px-4 py-4">
        <div className="searchSort lg:px-16 px-4 mb-4 flex gap-2">
          <input
            className="search p-2 border rounded"
            type="text"
            placeholder="Search Todo"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="sortByDate p-2 border rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'newToOld' | 'oldToNew')}
          >
            <option value="">Sort by Date</option>
            <option value="newToOld">New to Old</option>
            <option value="oldToNew">Old to New</option>
          </select>
        </div>

        <h1 className="heading text-xl font-bold mb-4">Completed Todo Lists</h1>

        {filteredTodos.length === 0 ? (
          <p className="text-gray-500">No completed todos found.</p>
        ) : (
          filteredTodos.map((todo) => (
            <div
              className="todoList border p-4 rounded mb-4 flex justify-between items-start"
              key={todo.id}
            >

              <div className="content flex-1">
                <h4 className="listTitle font-semibold">{todo.title}</h4>
                <p className="listDescription text-gray-700">{todo.description}</p>
              </div>


              <div className="icons">
                <button className={todo.status === "completed" ? "completedBtn" : "completeBtn"}>
                  {todo.status}
                </button>
                <button className="editBtn" onClick={() => handleEdit(todo, (updatedTodo) => {
                  setTodos(prevTodos => prevTodos.map(t => t.id === updatedTodo.id ? { ...t, ...updatedTodo } : t));
                })}>
                  <FaEdit />
                </button>

                <button className="deleteBtn" onClick={() => handleDelete(todo.id, (deletedId) => {
                  setTodos(prevTodos => prevTodos.filter(t => t.id !== deletedId));
                })}>
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Completed;
