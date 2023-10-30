//primitive Data types

var myArray=[1,2,3];

var myInt=58;

var myString="Hello There";

var myBool=true;



var myOjb ={};

var myCar={};
myCar["color"]="Red";
myCar["Plate"]="125 Tu 3645";
myCar["numDoors"]=2;
myCar["needsVisita"]=true;

console.log(myCar)

myCar["Plate"]="230 Tu 8540";
console.log(myCar)
myCar.proprietor=["Amine"];
console.log(myCar)
myCar.needsVisita=false
console.log(myCar)
delete myCar["Plate"];
delete myCar.color;
console.log(myCar)
myCar.showInfo=function(){
    console.log(this.proprietor);
}
myCar.showInfo()
console.log("break");
myCar["showInfo"]();

