var jsdom = require('../src/jsdom');
var formatTextContent = jsdom.formatTextContent;

test('jest can use dom without opening any browsers', () => {
	var div = document.createElement('div');

	// we can use document, window etc.
	document.body.appendChild(div);

	formatTextContent(div, 'Kobe');

	expect(document.body.textContent).toBe('[Kobe]');
});
