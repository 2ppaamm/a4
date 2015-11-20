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
	$('button').click(function(submit){
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
		window.open("dashboard.html");
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


}); // document readys
