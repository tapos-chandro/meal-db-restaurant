import { createBrowserRouter } from 'react-router'
import Home from '../Home/Home'
import App from '../../App'
import Meals from '../Meals/Meals'
import Details from '../Details/Details'

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App></App>,
      children: [
        {
          path: '/',
          element: <Meals></Meals>
        },
        {
          path: 'details/:idMeal',
          element: <Details></Details>
        }
      ]
    }
  ])

  return router
}

export default Routers
