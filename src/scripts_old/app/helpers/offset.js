const body = document.body;

function getOffset(element) {
  let top = 0, left = 0;
  var bodyRect = body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset = elemRect.top - bodyRect.top;
    return offset;
}

function getDocumentHeight(){

	let html = document.documentElement;

	return Math.max( body.scrollHeight, body.offsetHeight,
				 html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function getPositionStart( element, wHeight = window.innerHeight, viewFactor ){

	var offset = getOffset(element);
	var elementHeight = element.offsetHeight;
	var windowHeight = wHeight;
	var factor = viewFactor ? viewFactor : 0;

	var positionTop = offset - windowHeight + (elementHeight * factor);
	return positionTop > 0 ? positionTop : 0;

}

function getPositionEnd( element, wHeight = window.innerHeight, viewFactor ){

	var offset = getOffset(element);
	var elementHeight = element.offsetHeight;
	var factor = viewFactor ? viewFactor : 0;
    const documentHeight = getDocumentHeight();

	var positionBottom = offset + elementHeight - (elementHeight * factor);

	return positionBottom > documentHeight - wHeight ? documentHeight - wHeight : positionBottom;

}


module.exports = {getPositionStart, getPositionEnd, getDocumentHeight};