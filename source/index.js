
$( function() {
  let radios = $('input[type=radio][name="colorBtn"]');
  let colorResult = '';

  function hexFromRGB(r, g, b) {
    let hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }

  function refreshSwatch(){
    let red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" );
      colorResult = hexFromRGB( red, green, blue );

    for (let radio of radios){
      if (($(radio).is(':checked')) && radio.value == 'color'){
        $( ".swatch__text" ).css( "color", "#" + colorResult );
      }else if (($(radio).is(':checked')) && radio.value == 'bgColor'){
        $( ".swatch" ).css( "background-color", "#" + colorResult );
      }
    }
  }

  $( "#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max:255,
    value: 20,
    slide: refreshSwatch,
    change: refreshSwatch
  });

  $("#red").slider("value", 255);
  $("#green").slider("value", 140);
  $("#blue").slider("value", 60);

});
