import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

// Bringing in the pages the router will use to conditionally show the appropriate views
import ErrorPage from './components/pages/ErrorPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
// import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  // Define the accessible routes, and which components respond to which URL

    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      //   {
      //     path: 'portfolio',
      //     element: <PortfolioPage />,
      //   },
      //   {
      //     path: 'contact',
      //     element: <ContactPage />,
      //   },
      //   {
      //     path: 'resume',
      //     element: <ResumePage />,
      //   },
      ],
    },
]);


// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

