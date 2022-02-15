import React from 'react';
import Carousel1 from "../components/Carousel/Carousel"
import Signup from '../components/Signup/Signup'
import Login from '../components/Login/Login';

const Home = () => {
  // const [token, setToken] = useState();

  
  
  return (
    <div className="container">
      <Carousel1 />
      <Signup />
      {/* <Login setToken={setToken}
        token={token}/> */}
      <Login />
      

    </div>
  );
};

export default Home;
