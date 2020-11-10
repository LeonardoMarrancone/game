'use strict';
import {setStyle} from './createStyle';

let Tile = function(id){
  this.id = id;
  this.tile = null;

  let init = (function(){
    this.tile = document.createElement('div');
    this.tile.setAttribute('id', id);
    setStyle(this.tile, {
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
    parentElement.appendChild(this.tile);
  }

  this.handleEvent = (eventType, callback) => {
    this.tile.addEventListener(eventType, callback);
  };

  this.getDomElement = () => this.tile;

  init();

};

export {Tile}
