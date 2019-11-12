//Use Get 
//Request
let xhttp = new XMLHttpRequest();
xhttp.open('GET','https://thatsthespir.it/api',true);
xhttp.send(null);
//load
xhttp.addEventListener("load", transferCompetejs,false);
function transferCompetejs(evt){
    let objetJson = JSON.parse(this.response);
    const author = objetJson.author;
    const quote = objetJson.quote;
    const pic = objetJson.photo;
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    document.getElementById("picAuthor").src = pic;
}