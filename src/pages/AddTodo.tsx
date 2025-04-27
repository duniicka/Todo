import { useState } from "react";
import Swal from "sweetalert2";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim().length < 3) {
      Swal.fire('Error', 'Title must be at least 3 characters long.', 'error');
      return;
    }

    try {
      const response = await fetch("https://67a65b06510789ef0dfb3030.mockapi.io/api/movie/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          status: "pending", 
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      Swal.fire('Success!', 'Your todo has been added.', 'success');

   
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong while adding todo.', 'error');
    }
  };

  return (
    <main>
      <div className="lg:px-16 px-4 py-4">
        <h1 className="heading">Add Todo</h1>
        <div className="flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-150 py-10">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">Enter New Todo</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  required
                  minLength={3}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
              </div>

              <div>
                <button
                  style={{ backgroundColor: "rgb(106, 106, 77)", cursor: "pointer" }}
                  type="submit"
                  className="w-full text-white py-2 px-4 rounded-lg shadow"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddTodo;
