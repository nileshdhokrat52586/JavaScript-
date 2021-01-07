var cars=["Ford", "Chevy", "Dodge", "Toyota"];

document.getElementById("test").innerHTML=cars;
cars.pop(2);
function myFunction(){
	cars.push("BMW");
	document.getElementById("test1").innerHTML=cars;

}

document.getElementById("test1").innerHTML=cars;
