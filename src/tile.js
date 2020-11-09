'use strict';
import {setStyle} from './createStyle';

let Tile = function(id){
  this.id = id;
  let tile;

  let init = (function(){
    tile = document.createElement('div');
    tile.setAttribute('id', id);
    setStyle(tile, {
      backgroundRepeat: 'no-repeat',
      border:'black 1px solid',
      width:'71px',
      height:'71px',
      float:'left',
      margin:'10px',
      padding:'20px',
      fontSize:'64px',
      cursor:'pointer',
      textAlign:'center',
    })

  }).bind(this);

  this.attach = function(parentElement){
    parentElement.appendChild(tile);
  }

  this.handleEvent = (eventType, callback) => {
    tile.addEventListener(eventType, callback);
  };

  init();

};

export {Tile}
