function memoryFlipTile(tile,val) {
  if (tile.innerHTML == "" && memory_values.length < 2) {
    tile.style.background = '#FFF';
    tile.innerHTML = val;
    if (memory_values.length == 0) {
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
    } else if (memory_values.length == 1) {
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
      if (memory_values[0] == memory_values[1]) {
        tiles_flipped += 2;
        // Clear both arrays
        memory_values = [];
        memory_tile_ids = [];
        // Check to see if the whole board is cleared
        if (tiles_flipped == memory_array.length) {
          alert("Board cleared... generating new board");
          document.getElementById('memory_board').innerHTML = "";
          newBoard();
        }
      } else {
        function flip2Back() {
          // Flip the 2 tiles back over
          var tile_1 = document.getElementById(memory_tile_ids[0]);
          var tile_2 = document.getElementById(memory_tile_ids[1]);
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