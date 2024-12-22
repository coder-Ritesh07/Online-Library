import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import BrowseBook from './Components/MainComponents/BrowseBook.jsx'
import Error from './Components/ErrorComponents/Error.jsx'
import BookDetails from './Components/MainComponents/BookDetails.jsx'
import Fiction from './Components/CategoryComponents/Fiction.jsx'
import NonFiction from './Components/CategoryComponents/NonFiction.jsx'
import SciFi from './Components/CategoryComponents/SciFi.jsx'
import Romance from './Components/CategoryComponents/Romance.jsx'
import Horror from './Components/CategoryComponents/Horror.jsx'
import FictionDetails from './Components/CategoryComponents/CategoryBookDetails/FictionDetails.jsx'
import NonFictionDetails from './Components/CategoryComponents/CategoryBookDetails/NonFictionDetails.jsx'
import SciFiDetails from './Components/CategoryComponents/CategoryBookDetails/SciFiDetails.jsx'
import RomanceDetails from './Components/CategoryComponents/CategoryBookDetails/RomanceDetails.jsx'
import HorrorDetails from './Components/CategoryComponents/CategoryBookDetails/HorrorDetails.jsx'
import {BrowseBook} from './Components/MainComponents/BrowseComponent/BrowseBook.jsx'
import BrowseDetails from './Components/MainComponents/BrowseComponent/BrowseDetails.jsx'
import AddBook from './Components/MainComponents/AddBookComponent/AddBook.jsx'
import { Provider } from 'react-redux'
import appStore from './Utils/AppStore.js'
// import FictionByUrl from './Components/CategoryComponents/CategoryBookDetails/FictionByUrl.jsx'



let router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>
  },
  {
   path:'/browse',
   element:<Provider store={appStore}><BrowseBook/></Provider>
  },
  {
    path:'/browse/book/:id',
    element:<Provider store={appStore}><BrowseDetails/></Provider>
  },
  {
    path:'book/:id',
    element:<BookDetails/>
  },
  {
    path:'/fiction',
    element:<Fiction/>
  },
  {
     path:'/fiction/book/:id',
     element:<FictionDetails/>
  },
  {
    path:'/nonfiction',
    element:<NonFiction/>
  },
  {
    path:'/nonfiction/book/:id',
    element:<NonFictionDetails/>
  },
  {
    path:'/scifi',
    element:<SciFi/>
  },
  {
    path:'/scifi/book/:id',
    element:<SciFiDetails/>
  },
  {
    path:'/romance',
    element:<Romance/>
  },
  {
      path:'/romance/book/:id',
      element:<RomanceDetails/>
  },
  {
    path:'/horror',
    element:<Horror/>
  },
  {
    path:'/horror/book/:id',
    element:<HorrorDetails/>
  },
  {
    path: 'books/category/fiction', 
    element: <Fiction/> 
  },
  {
    path:'books/category/nonfiction',
    element:<NonFiction/>
  },
  {
    path:'books/category/scifi',
    element:<SciFi/>
  },
  {
    path:'books/category/romance',
    element:<Romance/>
  },
  {
    path:'books/category/horror',
    element:<Horror/>
  },
  {
    path:'/addbooks',
    element:<Provider store={appStore}><AddBook/></Provider>
  }
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
