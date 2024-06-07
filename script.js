// Initialize SpeechRecognition object
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

// Set continuous to true for continuous recognition
recognition.continuous = true;

// Define a variable to store the chosen functionality
let chosenFunctionality = "";

// Function to start speech recognition
function startSpeechRecognition() {
    chosenFunctionality = "speechToText";
    recognition.start();
}

// Function to start text-to-speech
function startTextToSpeech() {
    chosenFunctionality = "textToSpeech";
    const text = document.getElementById("outputText").value;
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Please enter some
