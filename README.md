# canvas-quizzes2-selectively-enable

The script will hide the +Quiz/Test button from all courses except those specifically listed in the regular expression on the second line. In this case below courses with an ID of 17, 26, and 28. To add more courses just include the course ID separated by a "|" (vertical bar).

```

$( document ).ready(function() {
	
	$('.new_quiz_lti_wrapper').hide();
	
	onPage(/\/courses\/(17|26|28)+\/assignments/, function() { //add site ID's separted by vertical bar
		$('.new_quiz_lti_wrapper').show();
	});
	function onPage(regex, fn) {
  		if (location.pathname.match(regex)){
			fn();
		}
	}
});
```

I suspect Instructure may change the way Quizzes.Next is displayed at some point, so we will keep an eye out in future revisions.
