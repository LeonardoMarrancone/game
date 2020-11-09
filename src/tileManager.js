"use strict";

import {Tile} from './tile';

let TileManager = function(context, memory){
  let memory_values = [];
  let memory_tile_ids = [];
  let tiles_flipped = 0;

  this.createBoard = () => {
    let i=0;
    while(i < memory.length){
     let t = new Tile(i);
     t.handleEvent('Click', () => memoryFlipTile(t, memory[i]));
      t.attach(context);
      i++;
    }
  }

  function memoryFlipTile(tile,val) {
    if (tile.innerHTML === "" && memory_values.length < 2) {
      tile.style.background = '#FFF';
      tile.innerHTML = val;
      if (memory_values.length === 0) {
        memory_values.push(val);
        memory_tile_ids.push(tile.id);
      } else if (memory_values.length === 1) {
        memory_values.push(val);
        memory_tile_ids.push(tile.id);
        if (memory_values[0] === memory_values[1]) {
          tiles_flipped += 2;
          // Clear both arrays
          memory_values = [];
          memory_tile_ids = [];
          // Check to see if the whole board is cleared
          if (tiles_flipped === memory.length) {
            alert("Board cleared... generating new board");
          }
        } else {
          function flip2Back() {
            // Flip the 2 tiles back over
            let tile_1 = document.getElementById(memory_tile_ids[0]);
            let tile_2 = document.getElementById(memory_tile_ids[1]);
            tile_1.style.background = '#CCC';
            tile_1.innerHTML = "";
            tile_2.style.background = '#CCC';
            tile_2.innerHTML = "";
            // Clear both arrays
            memory_values = [];
            memory_tile_ids = [];
          }

          setTimeout(flip2Back, 700);
        }
      }
    }
  }

}

export {TileManager}
