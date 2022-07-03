import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/navBar/navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Homepage from './components/homepage/homepage';
import { AuthContext } from './components/authContext';
import Bookings from './components/bookings/bookings';
import MovieDetails from './components/movieDetails/movieDetails';
function App() {
  const { isAuth } = React.useContext(AuthContext);
  return (

    <ChakraProvider theme={theme} resetCSS={false} >
      <Navbar /> <hr />
      <Routes>
        <Route path='/' element={isAuth ? <Homepage /> : <Login />} />
        <Route path='/bookings' element={isAuth ? <Bookings /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/moviedetails/:id' element={<MovieDetails/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
