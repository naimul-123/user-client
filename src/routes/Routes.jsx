import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Add from "../pages/Add";
import Users from "../pages/Users";
import Update from "../components/Update";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path: '/add',
                element:<Add/>
            },
            {
                path: '/users',
                element: <Users />,
                loader: ()=> fetch('http://localhost:3000/users')
            },
            {
                path: '/update/:id',
                element: <Update />,
                loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
            }
        ]
    }
])

export default routes;