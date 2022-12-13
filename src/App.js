import Router from "./routes"

import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      <Router />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="bg-green-300 text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </div>
  )
}

export default App

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
