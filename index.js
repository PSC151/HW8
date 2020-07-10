const ask = require("ask");
var fs = require('fs');
const { isMainThread } = require("worker_threads");

ask
    .prompt([
      {
          type:'input',
          message: 'What is the title?',
          name:'title',
      },
      {
        type:'input',
        message: 'explain description',
        name:'description',
      },  
      {
        type:'input',
        message: 'table of contents list',
        name:'table',
      },
      {
        type:'input',
        message: 'Installation',
        name:'install',
      },
      {
        type:'input',
        message: 'how to use',
        name:'usage',
      },
      {
        type:'input',
        message: 'what is the license',
        name:'license',
      },
      {
        type:'input',
        message: 'whos contributing',
        name:'contributions',
      },
      {
        type:'input',
        message: 'test',
        name:'test',
      },
      {
        type:'input',
        message: 'questions',
        name:'question',
      },
    ])


   // I know theres supposed to be more code but I do not know how to do it yet. Not even sure if this is correct.

