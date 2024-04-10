import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp/SignUp.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import RestaurantDetalis from './pages/Restaurant/RestaurantDetalis.jsx';
import Review from './pages/Restaurant/Review.jsx';
import RestProfile from './pages/RestOwnerDashboard/RestProfile.jsx';
import AddItems from './pages/RestOwnerDashboard/AddItems.jsx';
import { Home } from './pages/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/Restaurant',
        element: <RestaurantDetalis/>
      },
      {
        path: '/FoodReview',
        element: <Review/>
      },
      {
        path: '/RestProfile',
        element: <RestProfile/>
      }
    ]
  },
  {
    path: "/rest-profile", 
    element: <RestProfile />,
    children: [
      {
        path: '/rest-profile/AddItems',
        element: <AddItems/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
