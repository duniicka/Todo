import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../css/listStyle.css"
import SearchSort from "../components/SearchSort";
const Home = () => {
    return (
        <>
            <SearchSort />
            <main>
                <div className="todoLists lg:px-16 px-4 py-4">
                    <h1 className="heading">Todo Lists</h1>
                    <div className="todoList">
                        <div className="content">
                            <h4 className="listTitle">Name</h4>
                            <p className="listDescription">Description</p>
                        </div>
                        <div className="icons">
                            <button className="completedBtn">Completed</button>
                            <button className="editBtn"><FaEdit /></button>
                            <button className="deleteBtn"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="todoList">
                        <div className="content">
                            <h4 className="listTitle">Name</h4>
                            <p className="listDescription">Description</p>
                        </div>
                        <div className="icons">
                            <button className="completeBtn">Complete</button>
                            <button className="editBtn"><FaEdit /></button>
                            <button className="deleteBtn"><MdDelete /></button>
                        </div>
                    </div>


                    <div className="todoList">
                        <div className="content">
                            <h4 className="listTitle">Name</h4>
                            <p className="listDescription">Description</p>
                        </div>
                        <div className="icons">
                            <button className="completeBtn">Complete</button>
                            <button className="editBtn"><FaEdit /></button>
                            <button className="deleteBtn"><MdDelete /></button>
                        </div>
                    </div>

                    <div className="todoList">
                        <div className="content">
                            <h4 className="listTitle">Name</h4>
                            <p className="listDescription">Description</p>
                        </div>
                        <div className="icons">
                            <button className="completeBtn">Complete</button>
                            <button className="editBtn"><FaEdit /></button>
                            <button className="deleteBtn"><MdDelete /></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home