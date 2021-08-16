canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

roverX = 10;
roverY = 10;

roverWidth = 100;
roverHeight = 100;

backgroundImage = "mars.jpg";
roverImage = "rover.png";
//some random something
function add()
{
    backgroundImage = new Image();
    backgroundImage.onload = uploadBackground;
    backgroundImage.src = backgroundImage;
    //rover Image lol

    roverImage = new Image();
    roverImage.onload = uploadRover;
    roverImage.src = roverImage;
}
function uploadBackground()
{
    ctx.DrawImage(backgroundImage,0,0,canvas.width,canvas.height);
}
function uploadRover()
{
    ctx.DrawImage(roverImage,roverX,roverY,roverWidth,roverHeight);
}
window.addEventListener("keyDown",myKeyDown);
function myKeyDown(e)
{
    keyPress = e.keyCode;
    console.log(keypress);

    if(keyPress == "87")
    {
        up();
        console.log("up");
    }
    if(keyPress == "65")
    {
        left();
        console.log("left");
    }
    if(keyPress == "68")
    {
        right();
        console.log("right");
    }
    if(keyPress == "83")
    {
        down();
        console.log("Mark rober");
    }
}
function up() 
{

}
function left()
{

}
function right()
{
    
}