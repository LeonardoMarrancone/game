var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var height = 0;
var memory_array;

Array.prototype.memory_tile_shuffle = function(){
  var i = this.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

function newBoard(){

  tiles_flipped = 0;
  var output = '';

  let r = document.getElementById('select').selectedIndex;
  switch (r) {

    case 0:
      memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H', 'I','I'];
      height = 400;
      break;
    case 1:
      memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
      height = 533;
      break;
    case 2:
      memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L','M', 'M', 'N', 'N', 'O', 'O'];
      height = 666;
      break;

    default:

  }

      memory_array.memory_tile_shuffle();
      for(var i = 0; i < memory_array.length; i++){
      output += '<div id="tile_'+ i +'" onclick="memoryFlipTile(this,\''+ memory_array[i]+ '\')"></div>';
      }
      document.getElementById("memory_board").style.height= height + 'px';
      return document.getElementById('memory_board').innerHTML = output;

}

window.onload=function(){
  var mb = document.getElementById("startbutton");
  mb.addEventListener("click", newBoard);
}
