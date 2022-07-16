function talk(){
var know = {
"Oi" : "Olá visitante, tudo bem ?",
"Quem é você ?" : "Oi, eu sou o chatBoat desenvolvido por Adrielly Para treinar JS",
"Como você está?" : "muito bem, e você? ",
"O que posso fazer por você?" : "Me siga no GitHub https://github.com/AdriellySayonara e no linkeInd https://www.linkedin.com/in/adrielly-sayonara-de-oliveira-silva-2129a4139/" ,
"Tchau" : "Tchau, volte sempre para conferir minhas atualizações !"
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know){
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Desculpa, não consigo te entender<br>"
}
}