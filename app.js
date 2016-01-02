'use strict';

function bindSelectionFolderClick() {
  var button = document.querySelector('#select_folder')
  button.addEventListener('click', function (){
    alert('clicked on the button')
  })
}

// Runs when the browser has loaded the page
window.onload = function (){
  bindSelectionFolderClick()
}
