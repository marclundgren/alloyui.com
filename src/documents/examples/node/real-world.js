AUI().use('aui-node', function(A) {
	var nodeList = A.all('.accordion .title');
	nodeList.on('click', function(e) {
		nodeList.removeClass('active');
		e.target.addClass('active');
	});
});