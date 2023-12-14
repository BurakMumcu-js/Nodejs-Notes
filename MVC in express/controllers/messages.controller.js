function getMessages(req, res) {
    res.send('<ul><li>noluyor</li><li>yaaaa</li></ul>');
}

function postMessage(req, res) {
    console.log('update messages ...')
}

module.exports = {
    getMessages,
    postMessage,
}
