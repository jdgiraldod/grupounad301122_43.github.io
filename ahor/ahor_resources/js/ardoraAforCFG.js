//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=1;
var successes=0; successesMax=5; attempts=0; attemptsMax=10;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Haz ganado"; messageTime="Se ha acabado el tiempo"; messageError="Intenta de nuevo"; messageErrorG="Intenta de nuevo"; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk="../index.html"; urlTime="../index.html"; urlError=""; urlAttempts="../index.html";
var goURLOk="_parent"; goURLTime="_parent"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWhvcg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["V0VC","VU5BRA","RElTRdFP","U09GVFdBUkU","UFJPR1JBTUFDSU9O","","","","",""];imaW=["","","","","","","","","",""];queW=["Navegando","Universidad Nacional A Distancia","Se define como el proceso previo de configuración mental, \"prefiguración\".","Equipo lógico o soporte lógico de un sistema informático.","Proceso de diseñar, codificar, depurar.","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; wordsG=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="ahor_resources/media/"; textBNext="Siguiente";
