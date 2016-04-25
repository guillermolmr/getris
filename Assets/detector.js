#pragma strict
static var puntos:int;
static var nivel:int;
static var det:Transform;
var Creador:Transform;
var text:Transform;
var score:Transform;
function Start () {
	det=transform;
	nivel=1;
	//puntos=90;
}

function Update () {
	var i:int=0;
	var ray:Ray;
	var lineas:int;
	while(i<21){
		ray=Ray(transform.position-Vector3(0,i,0),Vector3.right);
		var hits: RaycastHit[]=Physics.RaycastAll(ray,10f);
		//print(hits.length);
		if(hits.length==10){
			var valido:boolean=false;
			for(var e=0;e<hits.length&&hits[e].transform.CompareTag("Token");){
				hits[e].transform.SendMessage("destroy");
				e++;
				valido=true;

			}
			lineas=(valido)?lineas+1:lineas;
		}
		i++;
	}




	puntos+=lineas*lineas;
	nivel=1+(puntos/10);
	text.GetComponent.<UI.Text>().text="Nivel: "+nivel+"\nPuntos: "+puntos+ "\nMax:"+PlayerPrefs.GetInt("Score");;
	if(PlayerPrefs.GetInt("Score")<puntos){
		score.GetComponent.<UI.Text>().text="New best score!\n"+puntos;
		PlayerPrefs.SetInt("Score", puntos);
	}else{
		score.GetComponent.<UI.Text>().text="Puntos: "+puntos+"\nMax:\n"+PlayerPrefs.GetInt("Score");
	}

}
function isEnd(){
	var hit:RaycastHit[]=Physics.RaycastAll(transform.position,Vector3.right,10f);
	/*if(Physics.Raycast(transform.position+Vector3.up,Vector3.right,hit)){
		if(hit.transform.gameObject.CompareTag("Token")){
			Creador.SendMessage("end");
		}

	}*/
	for(var e:int=0;e<hit.length;e++){
		if(hit[e].transform.gameObject.CompareTag("Token")){
			
			Creador.SendMessage("end");
			break;

		}
	}
}