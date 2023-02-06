import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
//import Header from './Header';

const App = () => {
  return (
    <div className="AppWrapper">
      <Header />
      <Navbar />
      <Profile />
      
    </div>
  );
}
//



export default App;
