var c=0;
var t;
var timer_is_on=0;

function time()
{
  var months = ['Janurary','February','March','April','May','June','July','August','September','October','November','December'];
  var tomorrow = new Date();
  tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));
  document.getElementById("date").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();
}

function Textchange()
{
document.getElementById("mattrex").innerHTML = "We are the Illuminati";
}

function defaultStyle()
{  
  document.getElementById("mattrex").innerHTML = "Welcome to Kevin Soria's Website";  
}

function timedCount()
{
document.getElementById('txt').value=c;
c=c+1;
t=setTimeout("timedCount()",1000);
}

function handleClick() {
  if (timer_is_on) {
    timer_is_on = false;
    defaultStyle();
    DefaultPic2(photo1);
    document.getElementById('illum').src = "https://www.youtube.com/embed/-iZW909WuB4?wmode=opaque";
    clearTimeout(t);
  }
  else {
    timer_is_on = true;
    Textchange();
    SwitchPic(photo1);
    document.getElementById('illum').src = "https://www.youtube.com/watch?v=KfVvUX4f8bQ?wmode=opaque";
    timedCount();
  }
}

function SwitchPic(pic) {
pic.src = "http://24.media.tumblr.com/07e4418d9e8f6a1e73d068cb87d3c07c/tumblr_mevmbpue861qcc17ao1_500.jpg";
}

function DefaultPic2(pic) {
pic.src = "Img.jpg"  
}

