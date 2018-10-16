$(function() {
	onerrer = handler ;
	function handler(m,p,l) {
		alert(m + '\n' + p + '\n' + l);
	}

	var vai = new $.vaiThemer();
	vai.getOpitionsDocument();
});