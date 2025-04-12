import AddTodo from "../pages/AddTodo";
import Completed from "../pages/Completed";
import Home from "../pages/Home";
import Pending from "../pages/Pending";
import Error from "../pages/Error";
import Layout from "../layout/layout";
const ROUTER = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "addTodo",
                element: <AddTodo />
            },
            {
                path: "completed",
                element: <Completed />
            },
            {
                path: "pending",
                element: <Pending />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
];

export default ROUTER;
