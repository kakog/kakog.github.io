const screenSizeFunction = () => {
  // Get node
  let screenSizeDiv = document.getElementById('screenSize');
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
const cleanInputs = () => {
  [1,2,3,4,5,6,7,8].map( (x) => {
      if (document.getElementById('checkPoint' + x) !== null ) {
          document.getElementById('checkPoint' + x).value = ""
      }
  })
}
const onLoadFunction = () => {
  cleanInputs();
  screenSizeFunction();
}









// --- QUESTIONS HANDLING -----------------------------

const passArray = [
    'Kogutowicz',   // 0
    'David',        // 1
    2,              // 2
    'Conchi',       // 3
    'Pedro'         // 4
];

const getDefaultStyle = (nodeName, property) => {
    let div = document.createElement('div');
    div.setAttribute('style','position:absolute; left:-9999px;');

    let el = document.createElement(nodeName);
    div.appendChild(el);
    document.body.appendChild(div);

    let result = getComputedStyle(el, null).getPropertyValue(property);
    document.body.removeChild(div); 

    return result;
}
const unlockNextStage = ( nextStageID ) => {
    console.log('Stage ' + nextStageID[5] + ' unlocked.');
    // Show next stage
    document.getElementById(nextStageID).style.display = getDefaultStyle(document.getElementById(nextStageID).nodeName, "display");
    // Jump to next stage
    location.hash = '#' + nextStageID;
};
const checkPoint = ( inputID, i, nextStageID ) => {
  // inputID: id of the input field to check
  // nextStageID: hidden block id
  // i: index of the string to type to change visibility of hidden block nextStageID to "visible"
  if ( document.getElementById(inputID).value === passArray[i].toString() ) {
    unlockNextStage(nextStageID);
  }
};








// ------ MULTIPLE SELECTION -----------------------------------

const multipleSelectionTestAnswers = [
    '1c',     // STAGE 4. Correct answer is C
    '2a',     // STAGE 5. Correct answer is A
    '3c',     // STAGE 6. Correct answer is C
    '4a',     // STAGE 7. Correct answer is A
    '5b',     // STAGE 8. Correct answer is B
    '6a'      // STAGE 12. Correct answer is A
];
const multipleSelectionTest = (id, nextStageID) => {
    let r = multipleSelectionTestAnswers.indexOf(id);
    if ( r === -1 ) {
        document.getElementById(id).style.backgroundColor = 'red';
    } else {
        document.getElementById(id).style.backgroundColor = 'white';
        unlockNextStage(nextStageID);
    }
    
};