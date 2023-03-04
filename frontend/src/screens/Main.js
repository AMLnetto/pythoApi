import './Main.css';
import Login from '../components/login';
import Snippet from '../components/Snippet';

function Main() {
  return (
    <div className="Main">
      <Login className = "Login"></Login>
      <Snippet />
    </div>
  );
}

export default Main;
