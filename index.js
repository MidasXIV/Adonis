#!/usr/bin/env node

console.log('Testing Adonis');
var program = require('commander');

program.arguments('<file>')
    .version('0.1.0','-v, --version')
    .option('-i, --start', 'Start the program')
    .option('-o, --stop' , 'Stop the program')
    .parse(process.argv);

if(program.start && program.stop){
    console.log("Invalid");
    return
}
if(program.start) console.log("program is starting");
if(program.stop)  console.log("program is stoped");

program.arguments('<file>')
    .option('-u, --username <username>', 'The user to authenticate as')
    .option('-p, --password <password>', 'The user\'s password')
    .action(function (file) {
        console.log('user: %s pass: %s file: %s',program.username, program.password, file);
    }).parse(process.argv);

