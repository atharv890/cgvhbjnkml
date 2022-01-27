function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    canvas.position(500,350);
    canvas.mouseReleased(classifyCanvas);
    app1=window.speechSynthesis;
}
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function draw(){
    strokeWeight(13);
    stroke("black");
    if (mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function classifyCanvas(){
classifier.classify(canvas,Result1);
}
function Result1(error,results){
if(results){
console.log(results);
}
else{
console.log(error);
timer=0;
timer=timer++;
document.getElementById("yo").innerHTML="Timer: "+timer;
}
}