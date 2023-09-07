const developerSynonyms = ["Programmer", "Coder", "Software Engineer", "Developer", "Code Artisan", "Script", "Game Dev", "App Developer" ];
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|;:'\",.<>?`~ ";
function getRandomFromArray(arr){
    var min = 0;
    var max = arr.length - 1;
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomInt);
    return arr[randomInt];
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // Toggle between themes
    if (currentTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

function randomLetterGenerator(length){
    var output = "";
    for(var i = 0; i < length; i++){
        output+= characters[Math.floor(Math.random() * 92)]
    }

    return output;
}


const changingTextElement = document.getElementById("changingText");
var nextWord = getRandomFromArray(developerSynonyms);

changingTextElement.addEventListener("mouseover", function(){  
    var iterations = 0;  
    const interval = setInterval(() => {
        changingTextElement.textContent = randomLetterGenerator(nextWord.length); 
        iterations++; 
        if(iterations == nextWord.length){
            changingTextElement.textContent = nextWord;
            nextWord = getRandomFromArray(developerSynonyms); 
            iterations =0;
            clearInterval(interval)
        }
    }, 40);
});

/*changingTextElement.addEventListener("mouseout", function(){
    
});*/