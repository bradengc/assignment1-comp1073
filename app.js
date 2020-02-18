// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = "noun verb adjective secondnoun setting";
var speakButton = document.querySelector('button');

// create a specific array for each button
var nouns = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"];
var nounButton = document.querySelector('nouns');

var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var verbButton = document.querySelector('verbs');

var adjectives = ["a funny", "a goofy", "a scary", "a slimy", "a barking", "a fat"];
var adjectiveButton = document.querySelector('adjectives');

var secondnouns = ["Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"];
var secondnounButton = document.querySelector('secondnouns');

var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
var settingsButton = document.querySelector('settings');
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// a function that pick a random variable from an array
function randomSelection() {
	return [Math.floor(Math.random() * Array.length)];
}

function pickNoun(){
	//picks a variable from an array at random
	var nounSelection = randomSelection(nouns);
	// replaces a variable in the text to speak sentence with a random variable from the array list
	textToSpeak.replace("noun", nounSelection);
}

function pickVerb(){
	var verbSelection = randomSelection(verbs);

	textToSpeak.replace("verb", verbSelection);
}

function pickAdjective(){
	var adjectiveSelection = randomSelection(adjectives);

	textToSpeak.replace("Adjective", adjectiveSelection);
}

function pickSecondNoun(){
	var secondNounSelection = randomSelection(secondnouns);

	textToSpeak.replace("secondnoun", secondNounSelection);
}

function pickSetting(){
	var settingSelection = randomSelection(settings);

	textToSpeak.replace("setting", settingSelection);
}


/* Event Listeners
-------------------------------------------------- */

//seperate buttons that will choose a random variable in each of there arrays when clicked

document.getElementById("nouns").addEventListener("click", function(){
	pickNoun();
})

document.getElementById("verbs").addEventListener("click", function(){
	pickVerb();
})

document.getElementById("adjectives").addEventListener("click", function(){
	pickAdjective();
})

document.getElementById("secondnouns").addEventListener("click", function(){
	pickSecondNoun();
})

document.getElementById("settings").addEventListener("click", function(){
	pickSetting();
})


// Onclick handler for the button that speaks the text contained in the above var textToSpeak
document.getElementById("speak").addEventListener("click", function(){
	speakNow(textToSpeak);
})




