function checkEmail(inputEmail) {
    var format = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (format.test(inputEmail)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function(){
	$('input[type=email]').focusout(function(event){
		$(this).siblings(".error").html(' ');
		if ($(this).val().length == 0  || !checkEmail($(this).val())) {
			$(this).attr({
				class: 'error'
			}); //end attr
			$(this).siblings(".error").html('Invalid email');
			event.preventDefault();
		} else {
			$(this).attr({
				class: 'none'
			});
			$(this).siblings(".error").html(' ');
		}
	}); //end focusout
	$('form button').click(function(submit){
		$(this).siblings(".error").html(' ');
		if ($(this).prevAll('input[type=email]:first').val().length == 0  || !checkEmail($(this).prevAll('input[type=email]:first').val())) {
			$(this).prevAll('input[type=email]:first').attr({
				class: 'error'
			}); //end attr
			$(this).siblings(".error").html('Invalid email');
			event.preventDefault();
		} else {
			$(this).attr({
				class: 'none'
			});
			$(this).siblings(".error").html(' ');
		}
		window.open("teach.html");
//		window.location.href = 'dashboard.html';
	}); //end submit

	$('#subject').change(function(){
		if ($('#subject').val() == 'math' || $('#subject').val() == 'read'|| $('#subject').val() == 'lms') {
			$('div.msg').html('To help us direct your query better, please indicate level below.');
			$('#selectlevel').show();
		} else if ($('#subject').val() == 'todd') {
			$('div.msg').html('Our toddler program is meant for toddlers below four years old.');
			$('#selectlevel').css('display', 'none');
		} else {
			$('div.msg').html(' ');
			$('#selectlevel').css('display', 'none');
		}
	}); //end change

	$('.more').click(function(){
		$(this).siblings('.text').toggleClass("fulltext synopsis");
      	$(this).text(function(i, text){
          return text === "hide article" ? "...read more" : "hide article";
      })
	}); //end more click

	// hover over pictures
	$( "article img" ).hover(
		function() {
	  		$( this ).css({
	  			opacity:'0.2' });
	  		$(this).animate({
          		"width": "+="+ 100 }, "slow");
	  	}, function() {
	  		$(this).css({
	  			opacity:'1' });
			$(this).animate({
          		"width": "-="+ 100 }, "slow");
	});

	// Set feature articles in different color
	$( "article:first" ).css({ 
		backgroundColor: "#ac9880",
		color: '#ddd'
	 });

	$('article .text p').mouseover(function(){
		$(this).css({backgroundColor:'grey', color:"white"});
	});

	$('article img').click(function(){
		$(this).hide(1000).show(4000);
	});


// clear canvas
	$('#clear').click(function(){
		$('#canvas1').clearCanvas()
	});//clear canvas

// upload image through canvas
	$('#fileToUpload').change(function(){
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            alert("Only formats are allowed : "+fileExtension.join(', '));
        }
        //		$('#blah')[0].src = window.URL.createObjectURL(this.files[0]);
		$('#canvas1').drawRect({
			name: 'box',
			fillStyle: '#960000',
			strokeStyle: '#963',
			strokeWidth: 5,
			x: 365,
			y: 260,
			width: 730,
			height: 520
		})
		.drawImage({
			source: window.URL.createObjectURL(this.files[0]),
			x: 365,
			y: 260
		});
	}); // end change

	$('#line1').focusout(function(){
		// Draw text
		$('#canvas1').drawText({
		  name: 'myText',
		  fillStyle: '#ddd',
		  strokeWidth: 2,
	      x: 365, y: 50,
		  fontSize: '2em',
		  fontFamily: 'Verdana, sans-serif',
		  text: $('#line1').val()
		})

	}); //end focusout

}); // document readys
