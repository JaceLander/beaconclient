import './App.css';
import React from 'react';
import search from './search.png'
import profile from './profilepic.png'
import exitIcon from './exit icon.png'
// import magnifyingGlass from './magnifying glass.jpg'
// import magnifyingGlass from './magnifying glass.jpg'


const BottomToolbar = () => {
    return (
      <div className='bottom-toolbar-contain'>
          <div className='arrow-tab'>
          </div>
          <div className="bottom-toolbar">
            <img src={search} className='icon'></img>
            <img src={profile} className='icon'></img>
            <img src={exitIcon} className='icon'></img>
          </div>
        </div>
    );
  }
  export {BottomToolbar};