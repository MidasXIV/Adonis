<h1 align="center">ADONIS</h1>

[![HitCount](http://hits.dwyl.io/midasxiv/Adonis.svg)](http://hits.dwyl.io/midasxiv/Adonis)

* A Desktop application that works in the background.
* initiate process using the commandline.
* The application identifies hand gestures and prompts details on the screen or controls the mouse.
* Shows in the notification tray.
* Will require learning electron !.

## Todo
- [x] look into commandline tools using node js. [tutorial](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)
   1. [x] using [commander](https://www.npmjs.com/package/commander) to parse commmandline arguements. it also creates --help for the tool.
   2. [ ] *chalk* to colorise the output.
   3. [ ] use *progress* to added progress bar for uploading stuff.
- [ ] how to access the webcam and run in background.
- [ ] use tensorflow on this data to recognise gestures.
   1. [ ] use their [posenet](https://storage.googleapis.com/tfjs-models/demos/posenet/camera.html), and [this](https://github.com/tensorflow/tfjs-models/tree/master/posenet)
   2. [ ] hand gesture [controller](https://towardsdatascience.com/how-to-build-a-gesture-controlled-web-based-game-using-tensorflow-object-detection-api-587fb7e0f907)
   3. [ ] identifying hands [here](https://medium.com/@victor.dibia/how-to-build-a-real-time-hand-detector-using-neural-networks-ssd-on-tensorflow-d6bac0e4b2ce)
- [ ] Research about : https://github.com/amitmerchant1990
- [ ] Since the application will run in the background we should have a task bar icon indicating the app is active. [Menubar](https://github.com/maxogden/menubar)
- [ ] prompting an overlay text on windows might not be possible so we could have an app interface to log outputs on the menubar.
   1. [x] or we can make windows notifications. [here](https://github.com/mikaelbr/node-notifier)
   
***

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git https://github.com/MidasXIV/Adonis.git

# Go into the repository
$ cd Adonis

# Install dependencies
$ npm install -g

# Run the app
$ adonis

# Help
$ adonis -h
```
electron . -i
