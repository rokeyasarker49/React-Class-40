import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Main from "./components/Layout/Mian"
import Footer from "./components/Footer/Footer"




function App() {

  const router = createBrowserRouter([
    {
      //http://localhost:5173/ ='/'
      path: '/',
      element:<Main></Main>,
      children:[
        {
          // http://localhost:5173/ = '/'
          path: '/',
          element:<Home></Home>
        },
        {
          // http://localhost:5173/about = '/about'
          path: '/about',
          element:<About></About>
        },
        {
          // http://localhost:5173/Contact = '/contact'
          path: '/contact',
          element:<Contact></Contact>
            
        },

        {
          // http://localhost:5173/ = '/'
          path: '/',
          element:<Footer></Footer>
        }
        

      ]
    },
    
  ])


  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App