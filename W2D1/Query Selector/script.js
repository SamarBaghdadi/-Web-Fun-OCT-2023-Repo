var count=0;


console.log("Hello from script");

var tomato = document.querySelector("#myimg");
function switchImg(){
    // console.log("I am switching images");
    // console.log(tomato.src)
    if(tomato.src=="http://127.0.0.1:5501/W2D1/Query%20Selector/assets/1.jpg"){
        console.log(tomato.src)
        tomato.src="http://127.0.0.1:5501/W2D1/Query%20Selector/assets/2.jpg";
    }else{
        console.log(tomato.src)
        tomato.src="http://127.0.0.1:5501/W2D1/Query%20Selector/assets/1.jpg";
    }


    
}

var myColor=document.querySelector("h1");
function changeColor(){
    myColor.style.backgroundColor="black";
    myColor.style.color="white";
}

var message=document.querySelector("p");

function likes(){
    
    count=count+1;
    message.innerText="I have "+ count + " likes";
    // count++;

}