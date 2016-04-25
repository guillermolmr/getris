#pragma strict
static var t:float;
static var creador:Transform;
static var contador:int;
static var velocidad:float;
var cube1:Transform;
var cube2:Transform;
var cube3:Transform;
var cube4:Transform;

public var color:Color;
//private var collision:boolean;
function Start () {
	mediador.figurita=transform;
	gameObject.AddComponent(Rigidbody);
	GetComponent.<Rigidbody>().useGravity=false;
	GetComponent.<Rigidbody>().isKinematic=true;
	transform.BroadcastMessage("color",color);

	if(detector.nivel<9){
		velocidad=0.06*detector.nivel;
		//print("velocidad");
	}else{
		velocidad=0.60;
	}
	t=Time.time-velocidad;
}

function Update () {
	if(Creador.fin){
		transform.gameObject.SetActive(false);
	}
	second();
	if(Input.GetButtonDown("Horizontal")&&Input.GetAxisRaw("Horizontal")<0){
		if(left()){
			transform.position.x--;
		}

	}
	if(Input.GetButtonDown("Horizontal")&&Input.GetAxisRaw("Horizontal")>0){
		if(right()){
			transform.position.x++;
		}

	}
	if(Input.GetButtonDown("Vertical")&&Input.GetAxisRaw("Vertical")<0){
		if(!bot()){
			transform.position.y--;
		}

	}
	if(Input.GetKeyDown(KeyCode.Space)){
		canRotate();

	}
}
function uileft(){
	if(left()){
			transform.position.x--;
		}
}
function uiright(){
	if(right()){
			transform.position.x++;
		}
}
function uibot(){
	if(!bot()){
			transform.position.y--;
		}
}
function uirotate(){
	canRotate();
}

function second(){
	

		
	
	if(Time.time-velocidad>1+t){
		if(bot()){
			BroadcastMessage("untag");
			creador.SendMessage("next");
			transform.DetachChildren();
			Destroy(gameObject);
		}else{
			transform.position.y--;
			contador=0;
		}

	t+=1-velocidad;
	detector.det.SendMessage("isEnd");
	}

}
function left(){
	var direccion:Vector3=Vector3(-1,0,0);
	if(Physics.Raycast(cube1.position,direccion,1f)||Physics.Raycast(cube2.position,direccion,1f)||Physics.Raycast(cube3.position,direccion,1f)||Physics.Raycast(cube4.position,direccion,1f)){
		return false;
	}else{
		return true;
	}
}
function right(){
	var direccion:Vector3=Vector3(1,0,0);
	if(Physics.Raycast(cube1.position,direccion,1f)||Physics.Raycast(cube2.position,direccion,1f)||Physics.Raycast(cube3.position,direccion,1f)||Physics.Raycast(cube4.position,direccion,1f)){
		return false;
	}else{
		return true;
	}
}
function bot(){
	var direccion:Vector3=Vector3(0,-1,0);
	if(Physics.Raycast(cube1.position,direccion,1f)||Physics.Raycast(cube2.position,direccion,1f)||Physics.Raycast(cube3.position,direccion,1f)||Physics.Raycast(cube4.position,direccion,1f)){
		return true;

	}else{
		return false;
	}
}
function canRotate(){
	transform.Rotate(Vector3(0,0,-90));
	if(collision()){
		transform.position.x--;
		if(collision()){
			transform.position.x+=2;
			if(collision()){
				transform.position.x-=3;
				if(collision()){
					transform.position.x+=4;
					if(collision()){
						transform.position.x-=2;
						transform.Rotate(Vector3(0,0,90));
					}
				}
			}
		}
	}


}
function collision(){
	var direccion=Vector3(0,0,-1);
	var origen=Vector3(0,0,1);
	if(Physics.Raycast(cube1.position+origen,direccion,1f)||Physics.Raycast(cube2.position+origen,direccion,1f)||Physics.Raycast(cube3.position+origen,direccion,1f)||Physics.Raycast(cube4.position+origen,direccion,1f)){
		return true;
	}else{
		return false;
	}
	
}
//function OnTriggerEnter(n){
	
//}
//function OnTriggerStay(n:Collider){
//	if(n.transform.position.x<transform.position.x){
//		transform.position.x++;
//		contador++;
//	}
//	if(n.transform.position.x>transform.position.x){
//		transform.position.x--;
//		contador++;
//	}
//	if(contador>2){
//		transform.Rotate(Vector3(0,0,90));
//		contador=0;
//	}
//}
//function OnTriggerExit(){
//	
//}