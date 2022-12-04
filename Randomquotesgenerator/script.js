var quote = document.getElementById('quote')
var auth= document.getElementById('author')
const getQuotes = async()=>{
    let rand = Math.floor(Math.random()*1644)
    console.log(rand);
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api)
        let realdata = await data.json()
        console.log(realdata[rand].text);
        quote.innerText = realdata[rand].text
        auth.innerHTML = realdata[rand].author

    } 
    catch(error){

    }
   
}
