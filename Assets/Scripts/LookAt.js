#pragma strict

var target: Transform;
var distance: float;

function Start () {
	distance = 5;
}

function Update () {
	transform.LookAt(target);
	
	transform.position.z = target.position.z - distance;
    //transform.position.y = target.position.y;
    //transform.position.x = target.position.x;
}