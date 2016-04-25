#pragma strict
var I:Transform;
var L:Transform;
var O:Transform;
var RL:Transform;
var S:Transform;
var T:Transform;
var Z:Transform;
var menu:Transform;
var endmenu:Transform;
var ls:UnityEngine.SceneManagement.SceneManager;

static var cubes:GameObject[];
static var Creador:Transform;
static var pausado:boolean;
static var fin :boolean;
var puncher:Transform;
function Start () {
	fin=false;
	pausado=false;
	next();
	figura.creador=transform;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)&&!fin){
		if(!pausado){
			pause();
		}else{
			unpause();
		}
	
	}
}
function pause(){
	Time.timeScale=0;
	menu.gameObject.SetActive(true);
	pausado=true;
	cubes=GameObject.FindGameObjectsWithTag("Token");
	for(var cube:GameObject in cubes){
		cube.SetActive(false);
	}

}
function reset(){
	Time.timeScale=1;
	 ls.LoadScene(0);
	 detector.puntos=0;


}
function unpause(){
	Time.timeScale=1;
	menu.gameObject.SetActive(false);
	pausado=false;


	for(var cube:GameObject in cubes){
		cube.SetActive(true);
	}
}
function end(){
	fin=true;
	puncher.gameObject.SetActive(true);
	/*Time.timeScale=0;
	endmenu.gameObject.SetActive(true);
	cubes=GameObject.FindGameObjectsWithTag("Token");
	for(var cube:GameObject in cubes){
		cube.SetActive(false);
	}*/
	endmenu.gameObject.SetActive(true);
	cubes=GameObject.FindGameObjectsWithTag("Token");
	for(var cube:GameObject in cubes){
		var rigi:Rigidbody=cube.GetComponent.<Rigidbody>();
		rigi.isKinematic=false;
		rigi.useGravity=true;
		cube.tag="rigi";

	}





}
function next(){
	var inst:Transform;
	var mov:boolean=false;
	var rotar:boolean=false;
	switch (Random.Range(0,7)){
	case 0: inst=I;
			mov=true;
			break;

	case 1: inst=L;
			break;

	case 2: inst=O;
			mov=true;
			break;
	
	case 3: inst=RL;
			break;

	case 4: inst=S;
			break;
	case 5: inst=T;
			break;
	case 6: inst=Z;
			rotar=true;
			break;

	}
	if(mov){
		Instantiate(inst,transform.position+Vector3(-0.5,-0.5,0),transform.rotation);
	}else{
		if(rotar){
			var temporal:Transform=Instantiate(inst,transform.position,transform.rotation);
			temporal.Rotate(Vector3(0,180,0));
		}else{
			Instantiate(inst,transform.position,transform.rotation);
		}
	}
}