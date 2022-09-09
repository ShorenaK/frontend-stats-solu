
import '../styles/App.css';
import CopyCard from './CopyCard'
import GraphicsCard from './GraphicsCard'
import TwoCol from './TwoCol'
// import example: 
//      You can import static assets directly using a variable of your choosing

// import desktopImage from '../assets/images/image-header-desktop.jpg'

function App() {
  return (
    <div className="App">
        <TwoCol>
            <CopyCard />
            <GraphicsCard/>
        </TwoCol>
        {/* structure your HTML + CSS rules to match the designs provided */}
    </div>
  );
}

export default App;
