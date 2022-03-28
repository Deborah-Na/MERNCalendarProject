import Calendar from './components/Calendar';
import Cover from './components/Cover';
// import Image from './components/Image';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Box from './components/Box';

function App() {
  return (
  <>
      <ParallaxProvider>
        <div className="App">
          <Cover />
          {/* <Image /> */}
        </div>
      </ParallaxProvider>
        <Calendar />
        <Box />
    </>
  );
}

export default App;
