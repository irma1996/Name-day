const button = document.querySelector("#button");
const nameEl = document.querySelector("#name");
const inputCount = document.querySelector("#country");
 
button.addEventListener('click', async function() {
 
    
    const inputText1 = nameEl.value;
    const inputText2 = inputCount.value;
    
   
   API(inputText1, inputText2)   
   .then(data => {
               const resultHtml = document.querySelector("#resultHtml");
               let html = ""
               
               data.results.forEach((result) => {
                    
                
                    html += `<p>${result.name}</p>
                    <p>${result.day} Day</p>
                    <p>${result.month} Month</p>
                    `;
               
               });
               resultHtml.innerHTML = html;
           }) 
    });
    