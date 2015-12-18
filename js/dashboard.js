// Function to determine which portrait or landscape charts to show
// param : chart requested to show

function loadorientate(askinfo){
	if (window.innerHeight > window.innerWidth){
		$("[id$='"+askinfo+"-port']").show();
		$("[id$='"+askinfo+"-land']").hide();
	}
	else {
		$("[id$='"+askinfo+"-port']").hide();
		$("[id$='"+askinfo+"-land']").show();
	}
}

// Function to call to determine which charts to show on the first page
// param: classes - classes of the clicked element

function overaged(classes){
	$("[id*='detail']").hide();
	if (/total/i.test(classes)) {						//test if class total exists
		$('#home h3').text('Achievement by All Students');
		loadorientate('overall');
	}
	else if (/belowtarget/i.test(classes)) { 			// test if below target
		$('#home h3').text('Student Achieving Below Target');
		loadorientate('under');
	}
	else if (/ontarget/i.test(classes)) { 			// test if on target
		$('#home h3').text('Student Achieving On Target');
		loadorientate('on');
	}
	else if (/overtarget/i.test(classes)) { 			// test if over target
		$('#home h3').text('Student Achieving Over Target');
		loadorientate('over');
	}
}

// document ready
$(function(){

	loadorientate('overall'); 							// shows the overall chart on document ready, determine the orientation

	$('.total, .belowtarget, .ontarget, .overtarget').tap(function(){
		overaged($(this).attr('class'));
	}); //end tap

	$('#home').bind('swiperight', function(event){		// swipe left to see below target performers
		overaged('belowtarget');
	}); //end swipe left

	$('#home').bind('swipeleft', function(event){		// swipe right to see overachievers
		overaged('overtarget');
	}); //end swipe right

	$('#home').bind('taphold', function(event){			// taphold to see students who are on target
		overaged('ontarget');
	}); //end taphold


	$('#addSkillbtn').tap(function(){
		$('#addSkill').toggle();
	})// end addSkill tap

	//Orientation change

	$( window ).on( 'orientationchange', function( event ) {
		if (event.orientation=='portrait') {
			$("[id$='port']").show();
			$("[id$='land']").hide();
		}
		else {
			$("[id$='port']").hide();
			$("[id$='land']").show();
		}
	}); //end if
}); //end ready