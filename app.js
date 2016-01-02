'use strict';
//Dependencies
var fs      = require('fs');
var mime    = require('mime');
var path    = require('path');

function openFolderDialog(cb){
  var inputField = document.querySelector('#folderSelector')
  inputField.addEventListener('change', function (){
    var folderPath = this.value;
    cb(folderPath);
  });
  inputField.click();
}

function bindSelectionFolderClick(cb) {
  var button = document.querySelector('#select_folder')
  button.addEventListener('click', function (){
    openFolderDialog(cb)
  })
}

function hideSelectFolderButton(){
  var button = document.querySelector('#select_folder')
  button.style.display = 'none'
}

function findAllFiles (folderPath, cb) {
  fs.readdir(folderPath, function (err, files){
    if(err) {return cb (err, null)}
    cb(null, files)
  })
}

var imageMimeTypes = [
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/pjpeg',
  'image/tiff',
  'image/webp',
  'image/x-tiff',
  'image/x-windows-bmp'
]

// Runs when the browser has loaded the page
window.onload = function (){
  bindSelectionFolderClick(function (folderPath){
    hideSelectFolderButton()
    findAllImageFiles(folderPath, function(err, files){
      console.log(err)
      console.log(files)
    })
  })
}
