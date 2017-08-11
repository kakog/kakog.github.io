// inputID: id of the input field to check
// nextStageID: hidden block id
// i: index of the string to type to change visibility of hidden block nextStageID to "visible"
const passArray = [0];
const checkPoint = ( inputID, i, nextStageID ) => {
  if ( document.getElementById(inputID).value === passArray[i].toString() ) {
    document.getElementById(nextStageID).style.visibility = "visible";
    location.hash = '#' + nextStageID;
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