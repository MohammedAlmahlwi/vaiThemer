$(function() {
	onerrer = handler ;
	function handler(m,p,l) {
		alert(m + '\n' + p + '\n' + '\n' + l);
	}
	var vai = new $.vaiThemer({'vaiOpitionElement': true});
	// vai.getOpitionsDocument();
	vai.getOpitionsJson({
		"first":{
			'vai-href' : 'layout/css/1.css',
			'vai-from' : 2,
			'vai-to' : 5,
			'vai-only' : 6,
		},"second":{
			'vai-href' : 'layout/css/2.css',
			'vai-from' : 4,
			'vai-to' : 10,
			'vai-only' : 5,
		},"last":{
			'vai-href' : 'layout/css/3.css',
			'vai-from' : 10,
			'vai-to' : 11,
			'vai-only' : 7,
		},
	});
});