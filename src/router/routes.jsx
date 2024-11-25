import Login from "../auth/login";
import SignUp from "../auth/SignUp";
import BookList from "../components/BookListPage";

const routes = [
    {
        path: "/login", 
        element:<Login/>
    },
   
    {
        path: "/signup",
        element:<SignUp/>
    },
    {
        path: "/",
        element:<SignUp/>
    },
    {
        path: "/booklist",
        element:<BookList/>
    },
]

export default routes;

