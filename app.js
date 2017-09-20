var program = require('commander');
let readFile = (x)=>{
    console.log("this is",x)
    
}
program
    .version('0.1.0')
    .arguments('<cmd>')
    .action(function (cmd) {
        cmdValue = cmd;
        readFile( cmd);
        //envValue = env;
    });

program.parse(process.argv);

 if (typeof cmdValue === 'undefined') {
     console.error('enter file name');
     process.exit(1);
 }
//console.log('command:', cmdValue);
//console.log('command:', cmdValue || "no environment given");