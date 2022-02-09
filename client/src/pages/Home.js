import { Link } from 'react-router-dom';
// import dashboard
import Login from "../components/Login/Login"
import Signup from "../components/Signup/Signup"
// import auth file


const Home = () => {


  return (
    <div className="container">
      <Login />
      <Signup />
    </div>
  );
};

export default Home;
