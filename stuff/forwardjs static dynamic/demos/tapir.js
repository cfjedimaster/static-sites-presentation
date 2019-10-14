
var $results;
var $search;

$(document).ready(function() {

	$results = $('#results');
	$search = $('#search');
	$('#searchButton').on('click', doSearch);
});

function doSearch() {
	var term = $search.val();
	if($.trim(term) === '') return;
	console.log('search for '+term);
	$.get('http://www.tapirgo.com/api/1/search.json?token=579a32ee14ad6634516cc68a&query='+encodeURIComponent(term)).then(function(res) {
		if(!res.length) {
			$results.html('<i>Sorry, there were no results.</i>');
			return;
		}
		var s = '<b>Results:</b><ul>';
		for(var i=0;i<res.length;i++) {
			s += '<li><a href="' + res[i].link + '">'+res[i].title+'</a></li>'
			console.dir(res[i]);
		}
		s += '</ul>';
		$results.html(s);
	});
}