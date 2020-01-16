const resultHtml = document.querySelector("#resultHtml")
const button1 = document.querySelector("#button1");
const nameEl = document.querySelector("#name");
const inputCount = document.querySelector("#country");

 
  button1.addEventListener('click', function() {
 
    
    const inputText1 = nameEl.value;
    const inputText2 = inputCount.value;


   API (inputText1, inputText2, )   
   .then(searchResult => {
    const resultHtml = document.querySelector("#resultHtml");
    let html = ""
    searchResult .results.forEach((data) => {
                    
    html += `<p>${data.name}</p>
    <p>${data.day} Day</p>
    <p>${data.month} Month</p>
      `;
               
       });
       resultHtml.innerHTML = html;
     }) 
 });

 const inputMonth = document.querySelector("#month");
 const inputDay = document.querySelector("#day");
 const inputCount2 = document.querySelector("#country2");
 const button2 = document.querySelector("#button2");

 
    button2.addEventListener('click',function() {
        
    const inputText3 = inputCount2.value;
    const inputText4 = inputMonth.value;
    const inputText5 = inputDay.value;

    api2 (inputText3, inputText4, inputText5, )   
   .then(data => {
    let output = ""
    data.data.forEach((dataa) =>{
       
    const apiCon = inputCount2.value;
                
        output = `<p>${dataa.dates.day} Day</p>
               <p>${dataa.dates.month} Month</p>
               <p>${dataa.namedays[apiCon]}</p>
            `;
               
       });
     resultHtml.innerHTML =output;
    });
 });
    
    
  