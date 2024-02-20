import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Cart from './components/Cart'
import HomePage from './components/HomePage'

const App = () => {

    const routes = createBrowserRouter(
        [
            {
                path:"/",
                element:<HomePage/>,
                children:[
                    {
                        path:'',
                        element:<Home/>
                    },
                    {
                        path:'cart',
                        element:<Cart/>
                    }
                ]
            }
        ]
    )

  return (
    <RouterProvider router={routes}/>
  )
}

export default App