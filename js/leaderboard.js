// document ready
$(function(){
	// change to vertical tabs
    $( "#leveltab" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#leveltab li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    // Tabs Widget
	$( "#tabs, #leveltab" ).tabs({
      beforeLoad: function( event, ui ) {
        ui.jqXHR.fail(function() {
          ui.panel.html(
            "Couldn't load this tab. We'll try to fix this as soon as possible. " +
            "If this wouldn't be a demo." );
        });
      },
      heightSytle:"auto",
	  collapsible: true
	}); //tabs

	// Animate Effect
    $( "#leveltab a" ).click(function() {
        $( ".question" ).animate({
          backgroundColor: "#333",
          color: "#fff"
        }, 1000 );
    }); // tab animate

	// Selectable Interaction
    $( "#selectable1, #selectable2, #selectable3" ).selectable({
      stop: function() {
        if (result = $( "#select-result" ).empty()) {
	        $( ".ui-selected", this ).each(function() {
	          var index = $( "#selectable1 li, #selectable2 li, #selectable3 li" ).index( this );
	          result.append( "Your answer is #" + ( index + 1 ) + ". System will calculate your score." );
	        });

        }
      }
    });

//   	$( "#selectable1, #selectable2, #selectable3" ).selectable();

}); // document ready