"use strict";
import {TileManager} from './tileManager';
import {setStyle} from './createStyle';

window.addEventListener('load', function() {

  let height;
  let memory_array =[];

  Array.prototype.memory_tile_shuffle = function(){
    let i = this.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
    }
  }

  let divRoot = document.getElementById('root');

  let difficult = document.createElement('select')
  difficult.setAttribute('id', 'difficult')

  let easy = document.createElement('option');
  easy.text = 'Easy';
  let medium = document.createElement('option');
  medium.text = 'Medium';
  let hard = document.createElement('option');
  hard.text = 'Hard';

  difficult.add(easy);
  difficult.add(medium);
  difficult.add(hard);

  divRoot.appendChild(difficult);

  let start = document.createElement('button');
  start.innerHTML = "START";
  divRoot.appendChild(start);

  let board = document.createElement('div')
  board.setAttribute('id', 'board');
  setStyle(board,{
    background:'#CCC',
    border:'#999 1px solid',
    width:'800px',
    padding: '24px',
    margin:'0px auto',
  })
  divRoot.appendChild(board);

  start.addEventListener('click', init)

  function init(){
    if(board.hasChildNodes()){
      board.innerHTML="";
    }

    let r = document.getElementById('difficult').selectedIndex;
    switch (r) {
      case 0:
        memory_array = [
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
        height = '400px';
        break;
      case 1:
        memory_array = [
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
        height = '533px';
        break;
      case 2:
        memory_array = [
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
        height = '666px';
        break;

      default:
    }

    setStyle(board, {
      height: height,
    })

    memory_array.memory_tile_shuffle()
    let tm = new TileManager(board, memory_array);
    tm.createBoard();
  }

}, false);
