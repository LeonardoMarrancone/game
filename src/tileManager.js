"use strict";

import {Tile} from './tile';
import {setStyle} from './createStyle';

let TileManager = function(context, memory){

  let memory_values = [];
  let memory_tile_ids = [];
  let tiles_flipped = 0;

  this.createBoard = () => {
    let i = 0;
    while (i < memory.length) {
      let t = new Tile(i);
      let val = memory[i];
      t.handleEvent('click', () => {
        console.log(t, val)
        this.memoryFlipTile(t, val)
      })
      t.attach(context);
      i++;
    }
  }

   this.memoryFlipTile = (t,val) => {
    const tile = t.getDomElement();
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
            alert("YOU WIN!!!! generating new board");
          }
        } else {
          const flip2Back = () => {
            // Flip the 2 tiles back over
            let tile_1 = document.getElementById(memory_tile_ids[0]);
            let tile_2 = document.getElementById(memory_tile_ids[1]);
            setStyle(tile_1, {background: '#CCC'});
            tile_1.innerHTML = "";
            setStyle(tile_2, {background: '#CCC'});
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
