function setup() {
    createCanvas(200, 200);
    background(0);

dropzone = select('')
}


window.onload = function(){
    draggable('one');
};

var dragObj = null;
function draggable(id)
{
    var obj = document.getElementById(id);
    obj.style.position = "absolute";
    obj.onmousedown = function(){
            dragObj = obj;
    }
}

document.onmouseup = function(e){
    dragObj = null;
};

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    if(dragObj == null)
        return;

    dragObj.style.left = x +"px";
    dragObj.style.top= y +"px";
};
