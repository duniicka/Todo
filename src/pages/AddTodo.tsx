const AddTodo = () => {
    return (
        <main>
            <div className="lg:px-16 px-4 py-4">
                <h1 className="heading">Add Todo</h1>
                <form action="">
                    <div className="flex items-center justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-lg  w-150 py-10">
                            <h1 className="text-2xl font-semibold mb-4 text-gray-800">Enter New Todo</h1>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
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
                                        name="description"
                                        className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <button style={{ backgroundColor: "rgb(106, 106, 77)", cursor: "pointer" }}
                                        type="submit"
                                        className="w-full text-white py-2 px-4 rounded-lg shadow"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddTodo