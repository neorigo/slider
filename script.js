var screen_width = screen.width;
var screen_heigth = screen.height;
var k = screen_width/screen_heigth;
var block_height = (k*screen_heigth)*0.04;
var block_width = screen_width*0.04;
var t;
window.onload = function(){
    document.getElementById("butt1").style.width = [block_width] + "px";
    document.getElementById("butt1").style.height = [block_height] + "px";
    document.getElementById("butt2").style.width = [block_width] + "px";
    document.getElementById("butt2").style.height = [block_height] + "px";
}
var bgch;
var htext;
function bgchange(bgch){

        for(var i=1; i<=8; i++){
          if(bgch == i){
            document.getElementById("bg").style.backgroundImage = "url(img/" + i + ".jpg)";
            document.getElementById("bd"+i).style.background = "#000000";
            document.getElementById("a"+i).style.display = "block";
            var ptext = document.getElementById("pt"+i).innerHTML;
            htext = document.getElementById("hname");
            htext.innerHTML = ptext;
            //temp.innerHTML = "About Us";
          }
          else{
            document.getElementById("bd"+i).style.background = "#FFFFFF";
            document.getElementById("a"+i).style.display = "none";
          }
        }
}
var left = 0;
var pos = 0;
var vblock;

function sliderleft(){

    switch(left){
        case 0:
            pos = 0;
            left++;
            break;
        case 1:
            pos = -25;
            left++;
            break;
        case 2:
            pos = -50;
            left++;
            break;
        case 3:
            pos = 125;
            left++;
            break;
        case 4:
            pos = 100;
            left++;
            break;
        case 5:
            pos = 75;
            left++;
            break;
        case 6:
            pos = 50;
            left++;
            break;
        case 7:
            pos = 25;
            left = 0;
            break;
    }
          for(var i=1; i<=8; i++){
            vblock = pos - 25;
            document.getElementById("s"+i).style.display = "block";
            if(vblock == 150){
                vblock = -50;
                document.getElementById("s"+i).style.display = "none";
                document.getElementById("s"+i).style.left = vblock + "%";
                pos = -25;
            }
          if(vblock == -75){
                vblock = 125;
                document.getElementById("s"+i).style.display = "none";
                document.getElementById("s"+i).style.left = vblock + "%";
             }
            if(vblock == -50){
                document.getElementById("s"+i).style.display = "none";
             }

            document.getElementById("s"+i).style.left = vblock + "%";
            pos+=25;

          }
}

function sliderright(){

    switch(left){
        case 0:
            pos = 0;
            left = 7;
            break;
        case 1:
            pos = -25;
            left--;
            break;
        case 2:
            pos = -50;
            left--;
            break;
        case 3:
            pos = 125;
            left--;
            break;
        case 4:
            pos = 100;
            left--;
            break;
        case 5:
            pos = 75;
            left--;
            break;
        case 6:
            pos = 50;
            left--;
            break;
        case 7:
            pos = 25;
            left--;
            break;
    }
          for(var i=1; i<=8; i++){
            vblock = pos + 25;
            document.getElementById("s"+i).style.display = "block";

        if(vblock == 150){
                vblock = -50;
                document.getElementById("s"+i).style.display = "none";
                document.getElementById("s"+i).style.left = vblock + "%";
                pos = -75;
            }
            document.getElementById("s"+i).style.left = vblock + "%";
            pos+=25;

          }
}
var fbutt = 0;
var hdtext;
function closed(){
  if(fbutt == 0){
    for(var i=1; i<=8; i++){
        document.getElementById("bd"+i).style.background = "#FFFFFF";
        document.getElementById("a"+i).style.display = "none";
    }
    document.getElementById("bg").style.backgroundImage = "url(img/promo.jpg)";
    htext = document.getElementById("hname");
            htext.innerHTML = "Welcome";
    hdtext = document.getElementById("htext");
    hdtext.innerHTML = "OPEN";
    document.getElementById("himg").style.backgroundImage = "url(img/open.png)";
    document.getElementById("blockslider").style.bottom = "-100%";
    document.getElementById("butt1").style.display = "none";
    document.getElementById("butt2").style.display = "none";
    fbutt = 1;
    }
    else{
    hdtext = document.getElementById("htext");
    hdtext.innerHTML = "HIDE";
    document.getElementById("himg").style.backgroundImage = "url(img/hide.png)";
    document.getElementById("blockslider").style.bottom = "2%";
    document.getElementById("butt1").style.display = "block";
    document.getElementById("butt2").style.display = "block";
    fbutt = 0;
    }
}