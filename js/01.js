
$(document).ready(function(){

    // var back = 180;
    // var middle = 300;
    // var front = 500;
    // var YY,
    //     offset,
    //     sizeBack,
    //     sizeMiddle,
    //     sizeFront;
    $( "div.layer div" ).hover(
      function() {
        $( this ).removeClass( "hover" );
      }, function() {
        $( this ).addClass( "hover" );
      }
    );
  });
