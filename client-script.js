
//event handlers
document.getElementById("open-file").onclick = function(){
  console.log("open-file clicked.");
  //window.open("http://localhost:8080");
  res = "http://localhost:8080";
  document.getElementById("response-window").innerHTML = '<object type="text/html" data="http://localhost:8080">object</object>';
};
