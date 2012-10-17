(function($){
 $.fn.deltaCrop = function(options) {
    
  var defaults = {
   ozetBoyut: 250,
   minOzet: 20,
   devamiYazisi: 'devami',
   ozetiYazisi: 'ozeti',
   kesmeYazisi: '...'
  };
  
  var options = $.extend(defaults, options);
    
  return this.each(function() {
   obj = $(this);
   var body = obj.html();
   
   if(body.length > options.ozetBoyut + options.minOzet) {
    var splitLocation = body.indexOf(' ', options.ozetBoyut);
    if(splitLocation != -1) {
     var splitLocation = body.indexOf(' ', options.ozetBoyut);
     var str1 = body.substring(0, splitLocation);
     var str2 = body.substring(splitLocation, body.length - 1);
     obj.html(str1 + '<span class="deltaCrop_kesici">' + options.kesmeYazisi + 
      '</span>' + '<span  class="deltaCrop_devami">' + str2 + '</span>');
     obj.find('.deltaCrop_devami').css("display", "none");
     
     obj.append(
      '<div class="clearboth">' +
       '<a href="#" class="deltaCrop_devami_button">' +  options.devamiYazisi + '</a>' + 
      '</div>'
     );

     var moreLink = $('.deltaCrop_devami_button', obj);
     var moreContent = $('.deltaCrop_devami', obj);
     var ellipsis = $('.deltaCrop_kesici', obj);
     moreLink.click(function() {
      if(moreLink.text() == options.devamiYazisi) {
       moreContent.show('normal');
       moreLink.text(options.ozetiYazisi);
       ellipsis.css("display", "none");
      } else {
       moreContent.hide('normal');
       moreLink.text(options.devamiYazisi);
       ellipsis.css("display", "inline");
      }
      return false;
       });
    }
   }
   
  });
 };
})(jQuery);