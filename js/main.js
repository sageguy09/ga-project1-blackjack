//deck array
let cardImgDir = "css/cardPNG/";
let deck = [
    //suit diamonds
    {cardVar: '2',
    cardSuit: 'diamonds',
    cardVal: 2,
    carImg: cardImgDir+"2_of_diamonds.png"
    },
    {cardVar: '3',
    cardSuit: 'diamonds',
    cardVal: 3,
    carImg: cardImgDir+"3_of_diamonds.png"
    },
    {cardVar: '4',
    cardSuit: 'diamonds',
    cardVal: 4,
    carImg: cardImgDir+"4_of_diamonds.png"
    },
    {cardVar: '5',
    cardSuit: 'diamonds',
    cardVal: 5,
    carImg: cardImgDir+"5_of_diamonds.png"
    },
    {cardVar: '6',
    cardSuit: 'diamonds',
    cardVal: 6,
    carImg: cardImgDir+"6_of_diamonds.png"
    },
    {cardVar: '7',
    cardSuit: 'diamonds',
    cardVal: 7,
    carImg: cardImgDir+"7_of_diamonds.png"
    },
    {cardVar: '8',
    cardSuit: 'diamonds',
    cardVal: 8,
    carImg: cardImgDir+"8_of_diamonds.png"
    },
    {cardVar: '9',
    cardSuit: 'diamonds',
    cardVal: 9,
    carImg: cardImgDir+"9_of_diamonds.png"
    },
    {cardVar: '10',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"10_of_diamonds.png"
    },
    {cardVar: 'Jack',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"jack_of_diamonds.png"
    },
    {cardVar: 'Queen',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"queen_of_diamonds.png"
    },
    {cardVar: 'King',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"king_of_diamonds.png"
    },
    {cardVar: 'Ace',
    cardSuit: 'diamonds',
    cardVal: 11,
    carImg: cardImgDir+"ace_of_diamonds.png"
    },
    //suit hearts
    {cardVar: '2',
    cardSuit: 'hearts',
    cardVal: 2,
    carImg: cardImgDir+"2_of_hearts.png"
    },
    {cardVar: '3',
    cardSuit: 'hearts',
    cardVal: 3,
    carImg: cardImgDir+"3_of_hearts.png"
    },
    {cardVar: '4',
    cardSuit: 'hearts',
    cardVal: 4,
    carImg: cardImgDir+"4_of_hearts.png"
    },
    {cardVar: '5',
    cardSuit: 'hearts',
    cardVal: 5,
    carImg: cardImgDir+"5_of_hearts.png"
    },
    {cardVar: '6',
    cardSuit: 'hearts',
    cardVal: 6,
    carImg: cardImgDir+"6_of_hearts.png"
    },
    {cardVar: '7',
    cardSuit: 'hearts',
    cardVal: 7,
    carImg: cardImgDir+"7_of_hearts.png"
    },
    {cardVar: '8',
    cardSuit: 'hearts',
    cardVal: 8,
    carImg: cardImgDir+"8_of_hearts.png"
    },
    {cardVar: '9',
    cardSuit: 'hearts',
    cardVal: 9,
    carImg: cardImgDir+"9_of_hearts.png"
    },
    {cardVar: '10',
    cardSuit: 'hearts',
    cardVal: 10,
    carImg: cardImgDir+"10_of_hearts.png"
    },
    {cardVar: 'Jack',
    cardSuit: 'hearts',
    cardVal: 10,
    carImg: cardImgDir+"jack_of_hearts.png"
    },
    {cardVar: 'Queen',
    cardSuit: 'hearts',
    cardVal: 10,
    carImg: cardImgDir+"queen_of_hearts.png"
    },
    {cardVar: 'King',
    cardSuit: 'hearts',
    cardVal: 10,
    carImg: cardImgDir+"king_of_hearts.png"
    },
    {cardVar: 'Ace',
    cardSuit: 'hearts',
    cardVal: 11,
    carImg: cardImgDir+"ace_of_hearts.png"
    },
    //suit clubs
    {cardVar: '2',
    cardSuit: 'clubs',
    cardVal: 2,
    carImg: cardImgDir+"2_of_clubs.png"
    },
    {cardVar: '3',
    cardSuit: 'clubs',
    cardVal: 3,
    carImg: cardImgDir+"3_of_clubs.png"
    },
    {cardVar: '4',
    cardSuit: 'clubs',
    cardVal: 4,
    carImg: cardImgDir+"4_of_clubs.png"
    },
    {cardVar: '5',
    cardSuit: 'clubs',
    cardVal: 5,
    carImg: cardImgDir+"5_of_clubs.png"
    },
    {cardVar: '6',
    cardSuit: 'clubs',
    cardVal: 6,
    carImg: cardImgDir+"6_of_clubs.png"
    },
    {cardVar: '7',
    cardSuit: 'clubs',
    cardVal: 7,
    carImg: cardImgDir+"7_of_clubs.png"
    },
    {cardVar: '8',
    cardSuit: 'clubs',
    cardVal: 8,
    carImg: cardImgDir+"8_of_clubs.png"
    },
    {cardVar: '9',
    cardSuit: 'clubs',
    cardVal: 9,
    carImg: cardImgDir+"9_of_clubs.png"
    },
    {cardVar: '10',
    cardSuit: 'clubs',
    cardVal: 10,
    carImg: cardImgDir+"10_of_clubs.png"
    },
    {cardVar: 'Jack',
    cardSuit: 'clubs',
    cardVal: 10,
    carImg: cardImgDir+"jack_of_clubs.png"
    },
    {cardVar: 'Queen',
    cardSuit: 'clubs',
    cardVal: 10,
    carImg: cardImgDir+"queen_of_clubs.png"
    },
    {cardVar: 'King',
    cardSuit: 'clubs',
    cardVal: 10,
    carImg: cardImgDir+"king_of_clubs.png"
    },
    {cardVar: 'Ace',
    cardSuit: 'clubs',
    cardVal: 11,
    carImg: cardImgDir+"ace_of_clubs.png"
    },
    //suit spades
    {cardVar: '2',
    cardSuit: 'spades',
    cardVal: 2,
    carImg: cardImgDir+"2_of_spades.png"
    },
    {cardVar: '3',
    cardSuit: 'spades',
    cardVal: 3,
    carImg: cardImgDir+"3_of_spades.png"
    },
    {cardVar: '4',
    cardSuit: 'spades',
    cardVal: 4,
    carImg: cardImgDir+"4_of_spades.png"
    },
    {cardVar: '5',
    cardSuit: 'spades',
    cardVal: 5,
    carImg: cardImgDir+"5_of_spades.png"
    },
    {cardVar: '6',
    cardSuit: 'spades',
    cardVal: 6,
    carImg: cardImgDir+"6_of_spades.png"
    },
    {cardVar: '7',
    cardSuit: 'spades',
    cardVal: 7,
    carImg: cardImgDir+"7_of_spades.png"
    },
    {cardVar: '8',
    cardSuit: 'spades',
    cardVal: 8,
    carImg: cardImgDir+"8_of_spades.png"
    },
    {cardVar: '9',
    cardSuit: 'spades',
    cardVal: 9,
    carImg: cardImgDir+"9_of_spades.png"
    },
    {cardVar: '10',
    cardSuit: 'spades',
    cardVal: 10,
    carImg: cardImgDir+"10_of_spades.png"
    },
    {cardVar: 'Jack',
    cardSuit: 'spades',
    cardVal: 10,
    carImg: cardImgDir+"jack_of_spades.png"
    },
    {cardVar: 'Queen',
    cardSuit: 'spades',
    cardVal: 10,
    carImg: cardImgDir+"queen_of_spades.png"
    },
    {cardVar: 'King',
    cardSuit: 'spades',
    cardVal: 10,
    carImg: cardImgDir+"king_of_spades.png"
    },
    {cardVar: 'Ace',
    cardSuit: 'spades',
    cardVal: 11,
    carImg: cardImgDir+"ace_of_spades.png"
    },
]
 //deck card variables   
//let number = ['2', '3', '4' ,'5', '6', '7', '8', '9', '10']
//let face = ['king', 'queen', 'jack', 'ace']
//let suit = ['diamond', 'heart', 'diamond', 'heart']

//global vars and arrays
let playerName = "" 

//stretch idead//let cardPlayed = (shuffledDeck[i].cardVar+" of "+shuffledDeck[i].cardSuit) //calls cardPlayed for message prompts
let shuffledDeck = new Array; 
let dealCount = 0;
let currentPlayer =0;
let players = new Array();

    

//functions
//submit onStartPrompt
$(".onStartPrompt").submit(function(event){
    enteredName = $('input[name="onPlayerName').val()
    if (enteredName != "Enter Player Name"){
    playerName = enteredName
    }
    else {
        playerName = "Player"
    };
    shuffledDeck = new shuffleDeck();
    dealCount = 1;
    currentPlayer = 1;
    event.preventDefault();
    return dealCards();
})

$("#hitBtn").click(function(event){
    dealCards();
    dealCount += 1



})

//shuffleDeck() to call deck and set shuffledDeck to array of random cards
//call deck
function shuffleDeck() {
    let shuffle = [].concat(deck);
    let currentIndex = deck.length, temporaryValue, randomIndex;
    while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = shuffle[currentIndex];
        shuffle[currentIndex] = shuffle[randomIndex];
        shuffle[randomIndex] = temporaryValue;
    }
    return [].concat(shuffle);
};
//lookup and assign player name(s)
function getName(i){
    //let gname; 
    if (i == 0){
        return "dealer";
    }
    else {
        return playerName;
    }
};

function createHand(pc){
    //adds hand array
    players = new Array();
    for (let i = 0; i < pc; i++){
        cHand = new Array();
        let cPlayer = 
            {
            name: getName(i),
            hand: cHand,
            score: 0,
            cardsDealt: 0,
            pNum: i
        }
        players.push(cPlayer);
    }
}


function dealCards(){
    if (dealCount == 1){
        //**stretch: update parameter to be playerCount */
        createHand(2);
        for (let i = 0; i < 2; i++){
            for(var j = 0; j < players.length; j++){
                players[j].hand.push(shuffledDeck.pop());
                dealCount += 1;
                
            }
        }
    console.log("createHand deal: "+shuffledDeck.length+" pull: "+dealCount)
    }
    else {
        players[currentPlayer].hand.push(shuffledDeck.pop());
        dealCount += 1;
        console.log("hit btn test: "+shuffledDeck.length+" pull: "+dealCount);
           
    }
    setCurrentScore(currentPlayer);
}
    

//gets score for currentPlayer
function setCurrentScore(cp){
    let cScore = 0;
        for (let i = 0; i < players[cp].hand.length; i++){
            //insert formula to deterimine if ace exists, set val to 1 if true
            cScore += players[cp].hand[i].cardVal;
        }
    players[cp].score = cScore;
    console.log("setCurrentScore prompt "+players[cp].name+" current score = "+ players[cp].score);
     chkCurrentScore(cScore);
}
//check currentPlayer score, provide response
function  chkCurrentScore(ckScore){
    
    //if not dealer, under 21, return ckScore
    if (currentPlayer != 0 && ckScore < 21){
        //**update to send to statusPrompt**
        console.log("chkCscore1: "+players[currentPlayer].name+" current score "+ckScore+". Hit or Stay?")
        
    } 
    //if not dealer, over 21: return bust/set next player or dealer 
    else if (currentPlayer != 0 && ckScore >21){
        //return set playerCount to dealer
        
        //**update to send to statusPrompt**
        console.log("chkCscore2: "+players[currentPlayer].name+" BUST! score: "+ckScore+ "next players turn to play")
        return nextPlayer(currentPlayer+1);
    }
    
    //dealer (dealer logic?)
    else if (currentPlayer == 0 && ckScore < 17){
        //message = players.[currenPlayer].name"(dealer)"" = chkCurrentScore
        //**update to send to statusPrompt**
        console.log(players[currentPlayer].name+" current score "+ckScore+". Hit or Stay?")
    }
        //then call hitButton(submit)
      else if (currentPlayer == 0 && ckScore >21){
          //*do next* update below to refelect dealer...
        //return set playerCount to dealer
       
        //**update to send to statusPrompt**
        console.log(players[currentPlayer].name+" BUST! score: "+ckScore+nxtPlayer)
        return nextPlayer(currentPlayer)
    }


/*
    else if (currentPlayer == players.length && ckScore >21){
        console.log(players[currentPlayer].name+" BUST! score: "+ckScore+". "+players[0].name+
    }
  */
    else {
        chkSPmpt5 = "chkCurrentScore Prompt end line "
        console.log("chkCscore: if else:end line:"+ckScore)
    };
}


    
function nextPlayer(pi){
     
    if (pi > players.length){
        currentPlayer += 1;
       return console.log("nextPlayer set to "+players[currentPlayer].name);
    }
    else if (pi == players.length){
        currentPlayer = 0;
        return console.log("dealer set as Player "+players[0].name);
    }
    else if (pi == 0) {
        console.log("end game: player1 score= "+players[1].score+"dealer score="+players[0].score );
    };
}
    

/*
    while(shuffle.length < 52){
        Card = Math.
    }
      //debugger return console.log(shuffle);}
    let shuffle = [];
    //variable= #ofObj, 
   
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
    }
    
    
    */

 