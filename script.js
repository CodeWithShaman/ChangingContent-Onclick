function change1(){  
   var htmlChange = document.getElementById("html");
   htmlChange.style.backgroundColor = "orange";
   htmlChange.style.textAlign = "center";
   htmlChange.style.fontFamily = "Georgia";
   htmlChange.style.color = "skyblue";
   htmlChange.innerHTML = "Welcome To HTML";
   alert("Clicked");
   
}
function change2(){
    var htmlChange = document.getElementById("css");
    htmlChange.style.backgroundColor = "blue";
    htmlChange.style.textAlign = "center";
    htmlChange.style.color = "red";
    htmlChange.style.fontFamily = "Helvetica, Arial, sans-serif";
    htmlChange.innerHTML = "Welcome To CSS";
    alert("Clicked");
 }
 function change3(){
    var htmlChange = document.getElementById("java");
    htmlChange.style.backgroundColor = "yellow";
    htmlChange.style.textAlign = "center";
    htmlChange.style.fontFamily = "Courier, monospace";
    htmlChange.innerHTML = "Welcome To JAVASCRIPT";
    alert("Clicked");
 }