#!/usr/bin/env node
 //npm install --save node-notifier
//npm install menubar --save
//npm install electron -g

var menubar = require('menubar')




console.log('Testing Adonis');
var program = require('commander');
const notifier = require('node-notifier');

program.arguments('<file>')
    .version('0.1.0', '-v, --version')
    .option('-i, --start', 'Start the program')
    .option('-o, --stop', 'Stop the program')
    .parse(process.argv);

if (program.start && program.stop) {
    console.log("Invalid");
    return
}
if (program.start) {
    console.log("program is starting");
    notifier.notify({
        title: 'Adonis',
        subtitle: 'Adonis is starting',
        message: 'Hello, there!',
        sound: true, // Only Notification Center or Windows Toasters
        wait: true, // Wait with callback, until user action is taken against notification
    });
    notifier.on('click', function (notifierObject, options) {
        // Triggers if `wait: true` and user clicks notification
        console.log("Notification clicked");
    });

    notifier.on('timeout', function (notifierObject, options) {
        // Triggers if `wait: true` and notification closes
        console.log("Notification not clicked");
    });
    notifier.on('dismissed', function (notifierObject, options) {
        // Triggers if `wait: true` and notification closes
        console.log("Notification dissmissed");
    });
    var mb = menubar({alwaysOnTop:true});

mb.on('ready', function ready () {
  console.log('app is ready')
})
}
if (program.stop) console.log("program is stoped");

program.arguments('<file>')
    .option('-u, --username <username>', 'The user to authenticate as')
    .option('-p, --password <password>', 'The user\'s password')
    .action(function (file) {
        console.log('user: %s pass: %s file: %s', program.username, program.password, file);
    }).parse(process.argv);

/*
const notifier = require('node-notifier');

// String
notifier.notify('Go empty the dishwasher!');

// Object
notifier.notify({
  'title': 'David Walsh Blog',
  'subtitle': 'Daily Maintenance',
  'message': 'Go approve comments in moderation!',
  'icon': 'dwb-logo.png',
  'contentImage': 'blog.png',
  'sound': 'ding.mp3',
  'wait': true
});
*/
