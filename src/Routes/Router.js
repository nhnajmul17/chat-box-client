import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Main from "../layout/Main.js"
import Chat from "../pages/Chat";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/chats",
                element: <Chat />,

            },
        ],
    },
]);

export default router;