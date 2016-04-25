#pragma strict
static var figurita:Transform;
function Start () {

}

function Update () {

}
function derecha(){
	figurita.SendMessage("uiright");
}
function izquierda(){
	figurita.SendMessage("uileft");
}
function bot(){
	figurita.SendMessage("uibot");
}
function rotate(){
	figurita.SendMessage("uirotate");
}