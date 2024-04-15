import React from 'react';
import bookmark from './images/bookmark_black.svg';
import './App.css';
import { items } from './data';
import ReceiptGridItem from './Components/ReceiptGridItem';
import { Receipt } from './types/Receipt.d';
import Bookmark from './Components/Bookmark';

function App() {
  // console.log(bookmark);
  return (
    <div className="App">
      {/* header */}
      <div className="fixed w-full h-28 bg-white">
        <div className="flex flex-row h-28 w-full items-end">
          <div className="flex justify-center w-full mx-5 mb-5 h-3/5 items-end">
            <div className="flex-grow text-center font-inter text-sm font-semibold leading-4 tracking-header text-left">
              RECIPEBOX
            </div>
            <div className="relative ml-auto w-4">
              <div className="absolute place-content-center w-2 h-2 -top-1 left-2 rounded-full bg-red-600">
                <div className="text-ssm">3</div>
              </div>
              <img className="w-3 fill-black" src={bookmark} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full pt-28 px-4">
        <div className="flex justify-center overflow-y-auto h-full w-full h-70">
          <div className="grid grid-cols-2 gap-4">
            { items.map(item => {
                const receipt: Receipt = {
                  id: item.id,
                  title: item.title,
                  imageUrl: item.image[0].url,
                };
                return (<ReceiptGridItem receipt={receipt} />)
              }
                // <div key={item.id} className="bg-blue-200 p-4">
                //   <li className="p-2 hover:bg-blue-100">{item.title}</li>
                // </div>
              )}
          </div>
        </div>
      </div>
      {/* <div className="fixed top-0 left-0 w-full h-screen">
        <Bookmark receipts={items.map(item => ({id: item.id,
          title: item.title,
                imageUrl: item.image[0].url,}))}/>
      </div> */}
    </div>
  );
}

export default App;
