// Grabbing classes for textarea, remaining characters text and button and linking to vars
let textAreaBox = document.querySelector('.textarea-box');
let remainingCharactersText = document.querySelector('.remaining-characters-text');
let cheepButton = document.querySelector('.cheep-button');
// Creating max and min characters variables
let maxCharacters = 280;
let minCharacters = 30;

// 'Input' event listener for textarea key presses using an arrow function
textAreaBox.addEventListener('input', () => {
    // console.log('Grabbed string input.');
    let remainingCharactersNumber = maxCharacters - textAreaBox.value.length;
    // console.log(remaining); // remaining var stores max characacters - characters inputed in myTextArea
    // Updates the text underneath the box with the number of characters remaining

    // Changes text to red when less than 20% of characters are remaining
    // redText var is saying when remaining characters number is less than 20% display red, otherwise do nothing to text
    // ? means then do this and : means if it's anything else do nothing, i.e. null
    
    let redText = remainingCharactersNumber <= maxCharacters * 0.2 ? 'rgb(205, 14, 14)' : null;
    remainingCharactersText.style.color = redText;
    remainingCharactersText.innerText = `${remainingCharactersNumber} characters remaining for your 'cheep'` // template literals to place JS with a string

    // Created an onlick event for the post cheep button to ensure an alert is shown to the user if there character
    cheepButton.onclick = () => {
        // Too short/too long conditions applied to remaining characters number through alerts when button is clicked
        if (remainingCharactersNumber === 0 || remainingCharactersNumber > 0) {
            alert('Great! Your cheep post is within the character limit.');
       } else if (remainingCharactersNumber * 0.2 || remainingCharactersNumber === 1) {
           alert('Sorry, your cheep post is too long.')
       }
        return false;
    };
});
 


















































// (function() {
//     // Setting min and max characters
//     minCharactersAlert = 30;
//     maxCharacters = 280;
//     // Grabbing classes for Tweet entered and putting it into tweetEntry variable
//     let tweetEntry = document.querySelector('.tweet-entry');
    
//     // Creating charactersRemainingTitle
//         charactersRemainingTitle = '.characters-remaining';
//         charactersRemaining = document.querySelector(charactersRemainingTitle);
    
//           // Displays original characters remaining from the beginning
//           charactersRemaining.innerText = maxCharacters;
  
//           // Characters remaining will update with onkeydown event
//           tweetEntry.onkeydown = function(){
//           setTimeout(function(){
//             charactersRemaining.innerText = maxCharacters - tweetEntry.value.length;
  
//             // Deciding to show alert class from looking at remaining classes
//             let alertTitle = `${tweetEntry.value.length >= maxCharacters - mincharactersAlert ? 'warning' : ''}`;
//             charactersRemaining.className = charactersRemainingTitle + alertTitle;
//           }, 1); 
//         };
//   })();