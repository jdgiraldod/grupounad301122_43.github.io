//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=1; scoWrongDo=1; scoMessage="Haz perdido"; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Haz Ganado"; messageTime="Se te acabo el tiempo"; messageError="No es correcto"; messageErrorG="No es correcto"; messageAttempts="Lo siento se te acabaron los intentos"; isShowMessage=false;
var urlOk="../index.html"; urlTime="../index.html"; urlError="../index.html"; urlAttempts="../index.html";
var goURLOk="_parent"; goURLTime="_self"; goURLAttempts="_self"; goURLError="_self"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","Rw","","","","","","","","","RA","","",""],["","","RQ","","Qw","Tw","RA","SQ","Rw","Tw","","SQ","","",""],["","","Uw","","","","","Tg","","","","Uw","","",""],["","","VA","","Uw","Tw","Rg","VA","Vw","QQ","Ug","RQ","","",""],["","","SQ","","","","","Ug","","","","0Q","","",""],["UA","Ug","Tw","RA","VQ","Qw","VA","Tw","","","","Tw","","",""],["","","Tg","","","","","RA","","","","","","",""],["","","","","","","","VQ","","","","","","",""],["","","","","","","","Qw","","UA","","","","",""],["","","","","Vw","","","Qw","","Ug","","","","",""],["","","","VA","RQ","Qw","Tg","SQ","Qw","Tw","Uw","","","",""],["","","","","Qg","","","Tw","","Qw","","","","",""],["","","","","","","","Tg","","RQ","","","","",""],["","","","","","","","","","Uw","","","","",""],["","SQ","Tg","Rw","RQ","Tg","SQ","RQ","Ug","Tw","","","","",""]];
var x1=[3,12,8,10,5,5,5,1,4,2];
var y1=[1,1,2,9,10,2,4,6,11,15];
var x2=[3,12,8,10,5,10,12,8,11,10];
var y2=[7,6,13,15,12,2,4,6,11,15];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["La asunción y ejercicio de responsabilidades sobre un proceso","Se define como el proceso previo de configuración mental, \"prefiguración\".","Preparar el desarrollo de algo","Puede informalmente entenderse como un programa en ejecución","Es un documento o información electrónica capaz de contener texto.","Es un conjunto de elementos que se combinan siguiendo ciertas reglas","Conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.","Resultado de un trabajo u operación.","Procedimientos o conjunto de reglas, normas o protocolos","Persona de conocimientos científicos y tecnológicos para la innovación, invención, desarrollo."];
var colNum=15;
var rowNum=15;
