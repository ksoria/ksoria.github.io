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
    document.getElementById('illum').src = "https://www.youtube.com/embed/KfVvUX4f8bQ?wmode=opaque";
    timedCount();
  }
}


function SwitchPic(pic) {
pic.src = "illumtri.jpg";
}var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konami_index = 0;
$(document).keydown(function(e){
    if(e.keyCode === konami_keys[konami_index++]){
        if(konami_index === konami_keys.length){
            $(document).unbind('keydown', arguments.callee);
            $.getScript('http://www.cornify.com/js/cornify.js',function(){
                cornify_add();
                $(document).keydown(cornify_add);
            }); 
        }
    }else{
        konami_index = 0;
    }
});


function DefaultPic2(pic) {
pic.src = "Img.jpg"  
}
var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konami_index = 0;
$(document).keydown(function(e){
    if(e.keyCode === konami_keys[konami_index++]){
        if(konami_index === konami_keys.length){
            $(document).unbind('keydown', arguments.callee);
            $.getScript('http://www.cornify.com/js/cornify.js',function(){
                cornify_add();
                $(document).keydown(cornify_add);
            }); 
        }
    }else{
        konami_index = 0;
    }
});

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    var higurashi = document.getElementById('higurashi'); higurashi.src='05 Who Do We Think We Are (feat. Rick Ross).mp3'; higurashi.load();
    //window.alert("Testing");
    $(document).unbind('keydown',arguments.callee);
    $.getScript('http://www.cornify.com/js/cornify.js',function(){
      cornify_add();
      $(document).keydown(cornify_add);
    //window.alert("test");
    });
  }
});

var akeys = [], five = "73,71,79,84,79,78,73,84";
$(document).keydown(function(e) {
  akeys.push( e.keyCode );
  if ( akeys.toString().indexOf( five ) >= 0 ){
    var higurashi = document.getElementById('higurashi'); higurashi.src='15 I Got 5 on It (Reprise).mp3'; higurashi.load();
    window.alert("test");
  }
});

var urlmenu = document.getElementById( 'menu1' );
 urlmenu.onchange = function() {
      window.open(  this.options[ this.selectedIndex ].value );
 };

function goToNewPage()
    {
        var url = document.getElementById('list').value;
        if(url != 'none') {
            window.location = url;
        }
    }

function whatyougot()
  {
    var what = prompt("How much do you have?:");
    if (person=5) {
      var page = document.getElementById('page'); page.src='15 I Got 5 on It (Reprise).mp3'; page.load();
    }
  }
