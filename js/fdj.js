    //首先或许要操作的元素
    function getId(tag){
        return document.getElementById(tag)
    }
    var box=getId("box");
    var small=getId("small");
    var mask=getId("mask");
    var big=getId("big");
    var pic=big.children[0];
    console.log(pic);
    //鼠标移动到图片上出现两个效果
    small.onmouseover=function(){
        mask.style.display="block";
        big.style.display="block";
    }
    small.onmouseout=function(){
        mask.style.display="none";
        big.style.display="none"
    }
        //设置小图的焦点框，跟随鼠标；
    small.onmousemove=function(e){
        var marginL=box.offsetLeft;
        var marginT=box.offsetTop;
        var currentX= e.clientX;
        var currentY= e.clientY;
        var x=currentX-marginL-mask.offsetWidth/2;
        var y=currentY-marginT-mask.offsetHeight/2;
 
        //给焦点框设置移动区域
        if(x<0){x=0;}
        if(x>small.offsetWidth-mask.offsetWidth){x=small.offsetWidth-mask.offsetWidth};
        if(y<0){y=0;}
        if(y>small.offsetHeight-mask.offsetHeight){y=small.offsetHeight-mask.offsetHeight};
        mask.style.left=x+"px";
        mask.style.top=y+"px";
        //设置大盒子中显示的内容
        var relativeX=mask.offsetLeft;
        var relativeY=mask.offsetTop;
        var proporationX=pic.offsetWidth/small.offsetWidth;
        var proporationY=pic.offsetHeight/small.offsetWidth;
        pic.style.marginLeft=-relativeX*proporationX+"px";
        pic.style.marginTop=-relativeY*proporationY+"px";
    }