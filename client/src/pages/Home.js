import { Link } from 'react-router-dom';
// import dashboard
import Login from "../components/Login/Login"
import Signup from "../components/Signup/Signup"
import Carousel from "../components/Carousel/Carousel"
// import auth file
// import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {


  return (
    <div className="container">
      <Carousel />
      <Login />
      <Signup />
    </div>
  );
};

export default Home;
