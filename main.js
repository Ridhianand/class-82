var mouse_event="empty";
var current_position_ofx,current_position_ofy;
var lastposition_of_x,lastposition_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mouse_down",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color");
    width=document.getElementById("width");
    mouse_event="mouse_down";
}
canvas.addEventListener("mouse_up",my_mouseup);
function my_mouseup(e)
{
    mouse_event="mouse_up";
}
canvas.addEventListener("mouse_leave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouse_leave";
}
canvas.addEventListener("mouse_move",my_mousemove);
function my_mousemove(e)
{
   current_position_ofx=e.clientX-canvas.offsetLeft;
   current_position_ofy=e.clientY-canvas.offsetTop;
   if (mouse_event=="mouse_down")
   {
       ctx.beginPath()
       ctx.strokestyle=color;
       ctx.linewidth=width;
       console.log("lastposition_of_x,lastposition_of_y= ");
    console.log("x= "+lastposition_of_x);
    console.log("y= "+lastposition_of_y);
    ctx.moveTo(lastposition_of_x,lastposition_of_y);
    console.log("current position of x and y are");
    console.log("x= "+current_position_ofx);
    console.log("y= "+current_position_ofy);
    ctx.lineTo(current_position_ofx,current_position_ofy);
    ctx.stroke();
   }
   lastposition_of_x=current_position_ofx;
   lastposition_of_y=current_position_ofy; 
}
function clear_area()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}