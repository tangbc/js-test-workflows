function formatTextContent (node, text) {
	node.textContent = '[' + text + ']';
}

// just for testing code coverage
function idleFn () {}

module.exports = {
	formatTextContent: formatTextContent
};
