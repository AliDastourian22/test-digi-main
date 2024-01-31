$('#menu-tab').hover(function ()  {
    $('#menu-bar').fadeIn(200);
})
$('#log-tab').hover(function ()  {
    $('#menu-bar').fadeOut(200);
})

function slider() {
    slideritems.hide()
    slideritems.eq(nextslide-1).fadeIn(200);
    nextslide++;
}


var slidertag=$('#slider');
var slideritems=slidertag.find('.items')
var nextslide=1;
$('button').click(function (){
    slider()
})