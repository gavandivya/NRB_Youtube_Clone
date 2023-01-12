import './App.css';
import Body from './Body';
import Nav from './Nav';
import SideMenu from './SideMenu';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoPage from './VideoPage';

const routesConfig = [
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/watch",
    element: <VideoPage />,
  },
]

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />
        <div className='row'>
          <SideMenu />
          {/* <Body /> */}
          <RouterProvider router={router} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
