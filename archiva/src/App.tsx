import './App.css';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function App() {
  return (
    <div className="popup-container">
      <img src="logo.png" alt="Archiva Logo" className="logo" />
      <h1 className="title">Archiva</h1>
      <p className="connect-text">Connect with</p>
      <div className="button-container">
        <button className="auth-button google">
          <FcGoogle className="icon" />
          Google
        </button>
        <button className="auth-button apple">
          <FaApple className="icon" />
          Apple
        </button>
      </div>
      <p className="support-text">
        Need Help? <a href="https://support.archiva.com" className="support-link">Contact Archiva Support</a>
      </p>
    </div>
  );
}

export default App;
