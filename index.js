const buttonDOM = document.querySelector('.btn');
const inputDOM = document.querySelector('.inputText');
const resultsDOM = document.querySelector('.results');

buttonDOM.addEventListener('click', () => {
    console.log(inputDOM.value);

    const inputStr = inputDOM.value.toLowerCase();
    let countVowel = 0;
    for (let i = 0; i < inputStr.length; i++) {
        const letter = inputStr[i];
        if (letter.match(/([a,e,o,u,i])/)) {
            countVowel++;
        }
    }

    resultsDOM.textContent = inputDOM.value.length !== 0 ? `${inputDOM.value} has ${countVowel} vowels` : `input has ${countVowel} vowels`;
})

