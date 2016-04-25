#pragma strict

function Start () {
	transform.tag="Token";
	gameObject.layer=2;
	GetComponent.<Collider>().isTrigger=true;
	gameObject.DestroyImmediate(GetComponent.<Rigidbody>());
	GetComponent.<BoxCollider>().size=Vector3(0.9,0.9,0.9);

}

function Update () {
	//detection();
}
function detection(){
	if(Physics.Raycast(transform.position,Vector3(0,-1,0),1f)){
		//figura.b=true;
	}
	//figura.l=Physics.Raycast(transform.position,Vector3(-1,0,0),1f);
	//figura.r=Physics.Raycast(transform.position,Vector3(1,0,0),1f);


}
function untag(){
	gameObject.layer=9;
	GetComponent.<Collider>().isTrigger=false;
	gameObject.AddComponent(Rigidbody);
	GetComponent.<Rigidbody>().useGravity=false;
	GetComponent.<Rigidbody>().isKinematic=true;
}
function destroy(){
	var ray:Ray=Ray(transform.position,Vector3.up);
	var hits: RaycastHit[]=Physics.RaycastAll(ray,20);
	for(var e=0;e<hits.length;){
				hits[e].transform.position.y--;
				e++;
			}
	Destroy(gameObject);

}
function color(color:Color){
	GetComponent.<Renderer>().material.SetColor("_Color",color);
}
function diguise(){
	gameObject.SetActive(false);

}
function undiguise(){
	gameObject.SetActive(true);
}