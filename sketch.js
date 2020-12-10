const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain;
var thunder, thunderImg;
var guy, guyImg

function preload(){
guyImg=loadAnimation("Img/walking_1.png", "Img/walking_2.png", "Img/walking_3.png", "Img/walking_4.png", "Img/walking_5.png", "Img/walking_6.png", "Img/walking_7.png", "Img/walking_8.png");
}

function setup(){
createCanvas(480,800);

guy=createSprite(240, 200, 50, 50);
guy.addAnimation("guyImg", guyImg);

var balls= [];

}

function draw(){
    background(0);
    
    if(frameCount%10===0){ 
        balls.push(new Ball(random(width/2-30, width/2+30), 10,10)); 
        score++; } 
        for (var j = 0; j < balls.length; j++) { 
          balls[j].display(); } 
          for (var k = 0; k < divisions.length; k++) { 
          divisions[k].display(); }
    
}   

