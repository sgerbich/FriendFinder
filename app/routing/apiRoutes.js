var friendsData = require("../data/friends");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var tempPerson = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        }
        console.log("this should be it " + req.body.scores);
        var scoreAdd = [];
        
        for(p=0;p<9;p++){
            scoreAdd.push(parseInt(req.body.scores[p]));
            console.log(p);
        }
        tempPerson.scores = scoreAdd;
        console.log("sjodfabubgbwbougbuoabousg " + tempPerson.scores);

        var compatibleId = 0;
        var compatibleScore = 100;
        for (k=0;k<scoreAdd.length-1;k++)
        {
            if(Math.abs(scoreAdd[k]-scoreAdd[scoreAdd.length])< compatibleScore){
              compatibleId = k;
              compatibleScore = Math.abs(scoreAdd[k]-scoreAdd[scoreAdd.length])
            }
        }
        var connect = friendsData[compatibleId];
        res.json(connect);
        friendsData.push(tempPerson);
        
        console.log(tempPerson);
    });

}