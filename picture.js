 mkdir (name) 
 npm init
 npm install picture-tube --save 
 wget (pictureURL)
 
 https://github.com/substack/picture-tube#user-content-code
 
 
 var pictureTube = require('picture-tube');
var tube = pictureTube();
tube.pipe(process.stdout);
 
var fs = require('fs');
fs.createReadStream('republic_of_china_640.png').pipe(tube);
