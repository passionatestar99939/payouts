import Router from "./routes";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;


// import { useState } from 'react';
// import { InfoBox } from './components/InfoBox';
// function App() {
//   let [showInfo1, setShowInfo1] = useState(false);
//   return (
//     <div className="container">
//       <div className="info-box-wrapper">
//         <button onClick={() => {setShowInfo1(true)}} style={{marginRight: '4px'}}>Show InfoBox Functional</button>
//         <InfoBox show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} message="Click outside to close this"/>
//       </div>
//     </div>
//   );
// }
// export default App;