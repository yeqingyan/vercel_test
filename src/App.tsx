import React from 'react';
import bookmark from './bookmark.svg';
import './App.css';
import { items } from './data';

function App() {
  // console.log(bookmark);
  return (
    <div className="App">
      {/* header */}
      <div className="fixed w-full h-28">
        <div className="flex flex-row h-28 w-full items-end bg-red-500">
          <div className="flex justify-center w-full mx-5 mb-5 h-3/5 items-end">
            <div className="flex-grow text-center font-inter text-sm font-semibold leading-4 tracking-header text-left">
              RECIPEBOX
            </div>
            <img className="ml-auto w-3" src={bookmark} />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full pt-28 px-4">
        <div className="flex justify-center overflow-y-auto h-full w-full bg-yellow-500 h-70">
          <div className="grid grid-cols-2 gap-4">
            {items.map(item => (
              <div key={item.id} className="bg-blue-200 p-4">
                <li className="p-2 hover:bg-blue-100">{item.title}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
