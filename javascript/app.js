const button = document.querySelector("#button");
const nameEl = document.querySelector("#name");
const inputCount = document.querySelector("#country");
 
button.addEventListener('click', async function() {
 
    
    const inputText1 = nameEl.value;
    const inputText2 = inputCount.value;
    
   
   API(inputText1, inputText2)
       
