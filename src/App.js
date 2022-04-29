import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/globalStyle';


function App() {

      return (
        <div className="App">
          <GlobalStyle/>
            <Header/>
            <Routes/>
            <Footer/>
        </div>
      );

}

export default App;
