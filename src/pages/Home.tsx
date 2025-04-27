import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../css/listStyle.css";
import SearchSort from "../components/SearchSort";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { handleDelete, handleEdit, handleStatusChange as updateTodoStatus } from "../helper"; 
interface Todo {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState<'newToOld' | 'oldToNew' | "">("");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://67a65b06510789ef0dfb3030.mockapi.io/api/movie/todo");
        const data = await response.json();
        setTodos(data);
        setFilteredTodos(data);

        const completed = data.filter((todo: Todo) => todo.status === "completed").length;
        const pending = data.filter((todo: Todo) => todo.status === "pending").length;
        setChartData([
          { name: "Completed", value: completed },
          { name: "Pending", value: pending },
        ]);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    let updatedTodos = [...todos];

    if (searchText.trim() !== "") {
      updatedTodos = updatedTodos.filter(todo =>
        todo.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      updatedTodos = updatedTodos.filter(todo => todo.status === statusFilter);
    }

    if (sortOrder === "newToOld") {
      updatedTodos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortOrder === "oldToNew") {
      updatedTodos.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    setFilteredTodos(updatedTodos);
  }, [todos, searchText, sortOrder, statusFilter]);

  const handleSortChange = (order: 'newToOld' | 'oldToNew') => {
    setSortOrder(order);
  };


  const handleStatusFilterChange = (status: string) => {
    setStatusFilter(status as "all" | "completed" | "pending");
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <SearchSort
        onSortChange={handleSortChange}
        onStatusChange={handleStatusFilterChange} 
        onSearchChange={handleSearchChange}
      />
      <main>
        <div className="todoLists lg:px-16 px-4 py-4">
          <h1 className="heading">Todo Lists</h1>
          {filteredTodos.map((todo) => (
            <div className="todoList" key={todo.id}>
              <div className="content">
                <h4 className="listTitle">{todo.title}</h4>
                <p className="listDescription">{todo.description}</p>
              </div>
              <div className="icons">
                <button
                  className={todo.status === "completed" ? "completedBtn" : "completeBtn"}
                  onClick={() => updateTodoStatus(todo, (updatedTodo) => {
                    setTodos(prevTodos => prevTodos.map(t => t.id === updatedTodo.id ? { ...t, ...updatedTodo } : t));
                  })}
                >
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
          ))}
        </div>

        <div className="lg:px-16 py-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ width: "100%", height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
