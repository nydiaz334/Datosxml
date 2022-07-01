// JavaScript Document
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "xml/ejercicio4.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Lugares Turisticos</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("TURISTICOS");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("TITTLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("CIUDAD")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}