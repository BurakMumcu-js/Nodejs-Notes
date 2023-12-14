const express = require('express');

const {getMessages, postMessage} = require('./controllers/messages.controller');
const {friendsPost, friendsGet, friendsGetwithID} = require("./controllers/friends.controller");

const app = express();

const PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json());

app.post('/friends', friendsPost)

app.get('/friends', friendsGet);

app.get('/friends/:friendID', friendsGetwithID)

app.get('/messages', getMessages);

app.post('/messages', postMessage)

app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})
