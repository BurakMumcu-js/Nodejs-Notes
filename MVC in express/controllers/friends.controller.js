const friends = require('../models/friends.model')

function friendsPost(req, res) {
    console.log(req);
    if (!req.body.name) {
        res.status(400).json({
            error: 'friend does not exist'
        })
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newFriend);
    res.json(newFriend);
}

function friendsGet(req, res) {
    res.json(friends);
}

function friendsGetwithID(req, res) {
    const friendID = Number(req.params.friendID)
    const friend = friends[friendID]
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}

module.exports = {
    friendsPost,
    friendsGet,
    friendsGetwithID
}