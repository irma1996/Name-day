
    const response = await fetch(`https://api.abalin.net/getdate?name=${inputText1}&country=${inputText2}`);
    const data = await response.json();
    console.log(data);
 
    return data;
};