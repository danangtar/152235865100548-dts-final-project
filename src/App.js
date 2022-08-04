import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from './containers/Main';
import Home from './containers/Home';
import MovieDetail from './containers/MovieDetail';
import Login from './containers/Login';
import Register from './containers/Register';

import ProtectedRoute from './components/ProtectedRoute';
import NoMatch from './containers/NoMatch';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<ProtectedRoute><MovieDetail /></ProtectedRoute>}/>
        </Route>
        <Route path="login" element={<ProtectedRoute loginOnly={false}><Login /></ProtectedRoute>}/>
        <Route path="register" element={<ProtectedRoute loginOnly={false}><Register /></ProtectedRoute>}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
