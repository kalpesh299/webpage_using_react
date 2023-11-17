import logo from './logo.svg';
import './App.css';
import { Head } from './components/Head';
import { Hero } from './components/Hero';
import { Image } from './components/Image';
import { Info } from './components/Info';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
<Head/>
<Image/>
<Hero/>
<Info/>
<Footer/>
    </div>
  );
}

export default App;
