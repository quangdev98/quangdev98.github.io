$(document).ready(function() {
    var i = 0;
    $(document).on('click', '.slider-next', function(){
        var next = i + 100;
        if (i === 70) {
          $('div.scroll-wrapper ul.wrapSlide li').removeAttr('style');
          $('div.scroll-wrapper ul.wrapSlide li').attr('style', 'left:0%;-webkit-transition:left 1s;transition:left 1s;');
          i = 0;
        } else {
          $('div.scroll-wrapper ul.wrapSlide li').removeAttr('style');
          $('div.scroll-wrapper ul.wrapSlide li').attr('style', 'left:-'+ next +'.1%;-webkit-transition:left 1s;transition:left 1s;');
          i = next;
        }   
    });
    $(document).on('click', '.slider-previous', function(){
        var previous = i - 100;
        if (i === 0) {
            $('div.scroll-wrapper ul.wrapSlide li').removeAttr('style');
            $('div.scroll-wrapper ul.wrapSlide li').attr('style', 'left:-70%;-webkit-transition:left 1s;transition:left 1s;');
            i = 70;
          } else {
            $('div.scroll-wrapper ul.wrapSlide li').removeAttr('style');
            $('div.scroll-wrapper ul.wrapSlide li').attr('style', 'left:-'+ previous +'.1%;-webkit-transition:left 1s;transition:left 1s;');
            i = previous;
          }
    });
});