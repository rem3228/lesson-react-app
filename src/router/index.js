import About from "../components/UI/pages/About";
import Posts from "../components/UI/pages/Posts";
import PostIdPage from "../components/UI/pages/PostIdPage";
import Login from "../components/UI/pages/Login";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
]

export const publicRoutes = [
    {path: '/login', component: Login},
]