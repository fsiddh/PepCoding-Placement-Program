const fs = require("fs");
const path = require("path");

function lineCount(filePath){
    const data = fs.readFileSync(filePath, 'UTF-8');
    // console.log(data);

    const lines = data.split(/\r?\n/);
    console.log(lines);
    
}

lineCount("D:\\Work\\Github Repositories\\PepCoding-Program\\1. Web Development\\1. JavaScript\\Lecture 03 (File System Organizer) (CLU-Organize) (08-03-21)\\Home Work\\Solution\\activity\\commands\\Utilities\\n_test.txt");

module.exports = {
    lineCountFn: lineCount
}