$( document ).ready(function() {
	
	$('.new_quiz_lti_wrapper').hide();
	
	onPage(/\/courses\/(17|26|28)+\/assignments/, function() { //to enable quizzes.next in a course add site ID's separted by vertical bar
		$('.new_quiz_lti_wrapper').show();
	});
	function onPage(regex, fn) {
  		if (location.pathname.match(regex)){
			fn();
		}
	}
});
