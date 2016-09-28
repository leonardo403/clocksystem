var btn = document.querySelector('.btn');
var app = document.querySelector('#app');

$(document).ready(function() {
	//evento click hide/show no button
	$(btn).click(function(e) {
		$(app).toggle('slow');
		e.preventDefault();
	});

});