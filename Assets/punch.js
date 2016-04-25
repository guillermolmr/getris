#pragma strict
var force:float;
var radio:float;
var upwards:float;
var mode:ForceMode;
function Start () {

}

function Update () {
	if(Input.GetButton("Fire1")){
		var ray: RaycastHit;
		Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition),ray);
		transform.position=ray.point;
	}
}
function OnTriggerStay(col:Collider){
	if(col.CompareTag("rigi")){
		col.GetComponent.<Rigidbody>().AddExplosionForce(force,transform.position,radio,upwards,mode);
	}
}