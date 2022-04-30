import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/globalStyle';
import { ToastContainer, toast } from 'react-toastify';


function App() {
      return (
        <div className="App">
          <GlobalStyle/>
            <Routes/>   
        </div>
      );
}

export default App;
