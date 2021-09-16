canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");


Rover_width=100;
Rover_height=100;
background_image="mars.jpg";
rover_image="rover.png";
Rover_x=10;
Rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground
}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, Rover_x, Rover_y, Rover_width, Rover_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed = e.keycode;
    console.log(keyPressed);
    if (keyPressed=='38'){
        up();
        console.log("up");    
    }
    if (keyPressed=='40'){
        down();
        console.log("down");
    }
    if (keyPressed=='37'){
        left();
        console.log("left");
    }
    if (keyPressed=='39'){
        right();
        console.log("right");
    }      
}
function up(){
    if(Rover_y >=0){
        Rover_y -=10;
        console.log("When up arrow is pressed = "+ Rover_x + " - " +Rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(Rover_y <=500){
        Rover_y +=10;
        console.log("When down arrow is pressed = "+ Rover_x + " - " +Rover_y);
        uploadbackground();
        uploadrover();
    }  
}
function left(){
    if(Rover_x >=0){
        Rover_x -=10;
        console.log("When left arrow is pressed = "+ Rover_x + " - " +Rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right (){
    if(Rover_x <=700){
        Rover_x +=10;
        console.log("When right arrow is pressed = "+ Rover_x + " - " +Rover_y);
        uploadbackground();
        uploadrover();
    }
}