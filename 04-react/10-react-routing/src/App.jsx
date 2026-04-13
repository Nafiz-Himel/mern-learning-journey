import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import ParamComp from "./components/ParamComp"
import Courses from "./components/Courses"
import Slides from "./components/Slides"
import Notes from "./components/Notes"
import NotFound from "./components/NotFound"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About/> },
      { 
        path: "/dashboard", 
        element: <Dashboard/>,
        children: [
          {
            path: "courses",
            element: <Courses/>
          },
          {
            path: "notes",
            element: <Notes/>
          },
          {
            path: "/slides",
            element: <Slides/>
          },
        ]
      },
      { path: "/student/:id", element: <ParamComp/> },
      { path: "*", element: <NotFound/>},
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App