// inputID: id of the input field to check
// nextStageID: hidden block id
// i: index of the string to type to change visibility of hidden block nextStageID to "visible"
const passArray = [0,1,2,3,4,5,6,7];
const checkPoint = ( inputID, i, nextStageID ) => {
  console.log('checkpoint ' + i + ' reached!');
  
  if ( document.getElementById(inputID).value === passArray[i].toString() ) {
    // document.getElementById(nextStageID).style.visibility = "visible";
    console.log('   inputID:', inputID);
    console.log('   i:', i);
    console.log('   nextStageID:', nextStageID);
    document.getElementById(nextStageID).style.display = "";
    // location.hash = '#' + nextStageID;
  }
};


// ----  READ !!
// ----  Function above is just for testing purposes, the one below is the right one
// const passArray = ['Kogutowicz'];
// const checkPoint = ( inputID, i, nextStageID ) => {
//   if ( document.getElementById(inputID).value === passArray[i] ) {
//     document.getElementById(nextStageID).style.visibility = "visible";
//   }
// };

// You can use onscroll event on <body> tag to call a function
// each time scrolls:
//  <body onscroll="Onscrollfnction();">
const Onscrollfnction = () => {
    alert("scroll");
};
const myFunction = () => {
  // Get node
  let screenSizeDiv = document.getElementById('screenSize')
  // Remove all childs within the node
  while (screenSize.firstChild) {screenSize.removeChild(screenSize.firstChild);}
  // Create new node content
  let dims = document.createElement('p');
  dims.appendChild(document.createTextNode("w = " + window.innerWidth + "px"));
  dims.appendChild(document.createElement('br'));
  dims.appendChild(document.createTextNode("h = " + window.innerHeight + "px"));
  // Add content to the node
  screenSizeDiv.appendChild(dims);
  // Set node style
  screenSizeDiv.style.fontSize = '100%';
}








// ------ AUDIO PLAYER -----------------------------------

var music = document.getElementById('music'); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById('pButton'); // play button
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline

// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "play";
    }
}

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
}

// Gets audio file duration
music.addEventListener("canplaythrough", function() {
    duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}