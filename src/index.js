window.addEventListener('load', function() {

  let setStyle = function (element, properties) {
    for (let property in properties) {
      element.style[property] = properties[property];
    }
  };

  const memory_easy = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
    'F',
    'F',
    'G',
    'G',
    'H',
    'H',
    'I',
    'I'];
  const memory_medium = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
    'F',
    'F',
    'G',
    'G',
    'H',
    'H',
    'I',
    'I',
    'J',
    'J',
    'K',
    'K',
    'L',
    'L'];
  const memory_hard = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
    'F',
    'F',
    'G',
    'G',
    'H',
    'H',
    'I',
    'I',
    'J',
    'J',
    'K',
    'K',
    'L',
    'L',
    'M',
    'M',
    'N',
    'N',
    'O',
    'O'];

    const context = document.createElement('div');
    context.setAttribute('id', 'context');

    //create select
    const difficult = document.createElement('select');

    //create select options
    const easy = document.createElement('option');
    easy.text = 'Easy';

    const medium = document.createElement('option');
    medium.text = 'Medium';

    const hard = document.createElement('option');
    hard.text = 'Hard';

    //create button start
    const start = document.createElement('button');
    start.innerText = 'START';
    start.addEventListener('click', newBoard);


    difficult.add(easy);
    difficult.add(medium);
    difficult.add(hard);

    context.appendChild(difficult);
    context.appendChild(start);

    let divRoot = document.getElementById('root');
    divRoot.appendChild(context);

  function newBoard() {

    let memory;
    Array.prototype.memory_tile_shuffle = function() {
      let i = this.length, j, temp;
      while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
      }
    }

    let height;

    let r = document.getElementsByTagName('select').selectedIndex;
    switch (r) {
      case 0:
        memory = memory_easy;
        height = 400;
        break;
      case 1:
        memory = memory_medium;
        height = 533;
        break;
      case 2:
        memory = memory_hard;
        height = 666;
        break;
      default:
    }
    let board = document.createElement('div')
    board.setAttribute('id', 'board')

    setStyle(board, {
      background: '#CCC',
      border: '#999 1px solid',
      width: '800px',
      padding: '24px',
      margin: '0px auto',
    })

    memory.memory_tile_shuffle();
    for (let i in memory) {
      let tile = document.createElement('div');
      tile.setAttribute('id', 'tile' + i);
      tile.addEventListener('click', memoryFlipTile);
      board.appendChild(tile);
    }

    context.appendChild(board);

    function memoryFlipTile(tile, val) {
      let memory_values = [];
      let memory_tile_ids = [];
      let tiles_flipped = 0;

      if (tile.innerHTML === "" && memory_values.length < 2) {
        setStyle(tile, {
          background: '#FFF',
        })

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
              document.getElementById('board').innerHTML = "";
              newBoard();
            }
          } else {
            function flip2Back() {
              // Flip the 2 tiles back over
              let tile_1 = document.getElementById(memory_tile_ids[0]);
              let tile_2 = document.getElementById(memory_tile_ids[1]);

              setStyle(tile_1, {
                background: '#CCC',
              });
              tile_1.innerHTML = "";

              setStyle(tile_2, {
                background: '#CCC',
              });
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

}, false);
