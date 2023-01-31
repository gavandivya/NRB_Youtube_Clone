import './App.css';
import Body from './Body';
import Nav from './Nav';
import SideMenu from './SideMenu';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoPage from './VideoPage';
import ThemeContext from './Context/ThemeContext';
import { useState } from 'react';
import SearchContext from './Context/SearchContext';

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
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ searchContext: search, setSearchContext: setSearch }}>
      <ThemeContext.Provider value={{ themeCon: theme, setThemeCon: setTheme }}>
        <Provider store={store}>
          <div className="container-fluid">
            <Nav />
            <div className='row'>
              <SideMenu />
              {/* <Body /> */}
              <RouterProvider router={router} />
            </div>
          </div>
        </Provider>
      </ThemeContext.Provider>
    </SearchContext.Provider >
  );
}

export default App;
