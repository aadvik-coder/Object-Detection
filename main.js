img = "";
status1 = "";
object = [];
objectDetector = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("status").style.backgroundColor = "#54beff";
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status1 != ""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("status").style.backgroundColor = "#54ff68";
            

            fill("#ff8940");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y + 10);
            noFill();
            stroke("#ff8940");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    

    
}
function modelLoaded(){
    console.log("Model Loaded!1111!!1");
    status1 = true;
    objectDetector.detect(img, gotRessult);
}

function gotRessult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    object = results;
}