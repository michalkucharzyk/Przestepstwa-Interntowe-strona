<SCRIPT LANGUAGE= "JavaScript" type= "text/javascript">
<!-- Ukrycie przed przeglądarkami nie obsługującymi JavaScriptów -->
var timerID = null
function wyswietlCzas()
{
  var data = new Date();
  var godziny = data.getHours();
  var minuty = data.getMinutes();
  var sekundy = data.getSeconds();
  var czas = godziny;
  czas += ((minuty < 10) ? ":0" : ":") + minuty;
  czas += ((sekundy < 10) ? ":0" : ":") + sekundy;
  document.zegar.wyswietlacz.value = czas;
  timerID = setTimeout("wyswietlCzas()",1000);
}