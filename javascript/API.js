
    const API = async (inputText1, inputText2) => {

    const response = await fetch(`https://api.abalin.net/getdate?name=${inputText1}&country=${inputText2}`);
    const searchResult = await response.json();
    console.log(searchResult);
    return searchResult;
};



const api2 = async (inputText3, inputText4, inputText5) => {

    const response = await fetch(`https://api.abalin.net/namedays?country=${inputText3}&month=${inputText4}&day=${inputText5}`);
    const data = await response.json();
    console.log(data);
 
    return data;
};