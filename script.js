const developerSynonyms = ["a Programmer", "a Coder", "a Software Engineer", "a Developer", "a Code Artisan", "a Script", "a Game Dev", "an App Developer", "a Web Developer", "a Full-Stack Developer", "a Front-End Developer", "a Back-End Developer", "a Mobile App Developer", "a Software Developer", "a Computer Scientist", "an Algorithm Designer", "a Tech Enthusiast", "a Software Architect", "a System Analyst", "a UI/UX Designer", "a DevOps Engineer", "a Data Scientist", "a Network Engineer", "a Quality Assurance Engineer", "a Machine Learning Engineer", "a Data Engineer", "a UI/UX Designer", "a Data Analyst", "a Technical Writer"]
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|;:'\",.<>?`~ ";
/**
 * Gets a random value from an array
 */
function getRandomFromArray(arr){
    var min = 0;
    var max = arr.length - 1;
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomInt);
    return arr[randomInt];
}
/**
 * Generates a string of random letters of a specified length
 */
function randomLetterGenerator(length){
    var output = "";
    for(var i = 0; i < length; i++){
        output+= characters[Math.floor(Math.random() * 92)]
    }

    return output;
}


//================= Used for changing the text on the eyegrabber======================
const changingTextElement = document.getElementById("changingText");
var nextWord = getRandomFromArray(developerSynonyms);
var textChanging=false;
changingTextElement.addEventListener("mousedown", function(){  
    var iterations = 0;
    if(!textChanging){
    textChanging=true;  
    const interval = setInterval(() => {
        changingTextElement.textContent = randomLetterGenerator(nextWord.length); 
        iterations++; 
        if(iterations == nextWord.length){
            changingTextElement.textContent = nextWord;
            nextWord = getRandomFromArray(developerSynonyms); 
            iterations =0;
            clearInterval(interval)
        }
    }, 40);}
    textChanging=false;
});

//====================================================================================

const rootedInMathCard = document.getElementById("rootedInMath");
const torchlightTango = document.getElementById("torchlightTango");
rootedInMathCard.addEventListener("mousedown", () => {
    window.open("https://parkerposey.itch.io/rooted-in-math");
});
torchlightTango.addEventListener("mousedown", () => {
    window.open("https://parkerposey.itch.io/torchlight-tango");
});




