import ReactDOM from "react-dom/client";
import "../index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Read from "./crud_components/Read";
import Create from "./crud_components/Create";
import Edit from "./crud_components/Edit";
import App from "./crud_components/App";

//Crud Application Code

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Read />,
      },

      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
    ],
  },
]);

//Crud Application Code

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
