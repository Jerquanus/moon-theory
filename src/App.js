import backvid from './visual/background.mp4'
import './App.css';
import './components/MoonPhaseDisplay';
// import MoonPhaseDisplay from './components/MoonPhaseDisplay';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <video src={backvid} autoPlay loop muted >
      </video>
      <div className="title">
        <h1>
          MOON THEORY
        </h1>
      </div>
      <div className='mainContainer'>
        <div className='leftBox'>
          <h2>PHASE</h2>
            <div className='moonData'>
              {/* <MoonPhaseDisplay /> */}
            </div>
        </div>
        <div className='rightBox'>
          <h2>CHART</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
