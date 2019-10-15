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

//global vars and arrays
let playerName = "" 

//stretch idead//let cardPlayed = (shuffledDeck[i].cardVar+" of "+shuffledDeck[i].cardSuit) //calls cardPlayed for message prompts
let shuffledDeck = new Array; 
let dealCount = 0;
let currentPlayer =0;
let players = new Array();
let roundComplete;
let roundCount;
let hitBttn = $("#hitBtn");
let stayBttn = $("#stayBtn");


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
    shuffledDeck = shuffleDeck();
    dealCount = 0;
    currentPlayer = 1;
    roundComplete = 0;
    event.preventDefault();
    return dealCards();
})
//hitBtn listener to dealCards
hitBttn.click(function(event){
    dealCards();
    dealCount += 1
})
//styBtn lister to return score, set next player
stayBttn.click(function(event){
    cScore = players[currentPlayer].score;
   console.log("players score = "+cScore)
   return nextPlayer(currentPlayer+1);
})
//set shuffledDeck to array of random cards
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
//create hand arrays based on player count
function createHand(pc){
    //adds hand array for each player
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

// deal initials cards to hand Arrays
function dealCards(){
    if (dealCount == 0){
        //**stretch: update parameter to be playerCount */
        createHand(2);
        for (let i = 0; i < 2; i++){
            for(var j = 0; j < players.length; j++){
                players[j].hand.push(shuffledDeck.pop());
                dealCount += 1;
                //activate hit/stay/reset buttons
            }
        }
        
    //console.log("dealCards after createHand() remaining cards: "+shuffledDeck.length+" cards pulled: "+dealCount+" calling setCurrentScore")
    }
    else {
        players[currentPlayer].hand.push(shuffledDeck.pop());
        dealCount += 1;
        //console.log("dealCards after hit btn test: remaing cards: "+shuffledDeck.length+" cards pulled: "+dealCount+" calling setCurrentScore");
           
    }
    setCurrentScore(currentPlayer);
}
const updateGameboardScore = (currentPlayer) => {
    pscoreVal = players[currentPlayer].score
    if (currentPlayer === 1){
        elem = '.playerScore'
    }
    else{
        elem = '.dealerScore'
    }
    let scoreElem = document.querySelector(elem)
    scoreElem.textContent = pscoreVal
    

}

//gets score for currentPlayer
function setCurrentScore(cp){ 
    let evalVal;
    let cScore = 0;
    let pScore = players[cp].score;
    let pHand = players[cp].hand;
        for (let i = 0; i < pHand.length; i++){
            if (pHand[i].cardVal == 11 && pScore > 10){
                 evalVal = 1;
            }
            else {
                evalVal = pHand[i].cardVal;
            }
            cScore += evalVal;
        }
        
    players[cp].score = cScore;     
    console.log("setCurrentScore prompt "+players[currentPlayer].name+" current score = "+ players[cp].score+" after setting players score, calling chkCurrentScore with cScore");
    updateGameboardScore(cp)
    return chkCurrentScore(cScore)
};
//if currentPlayer(!= dealer), verify  score, return/call functions
function  chkCurrentScore(ckScore){
    //if not dealer, under 21, return ckScore (keep playing)
    if (currentPlayer != 0 && ckScore < 21){
        return console.log(ckScore+" :await Hit/Stay");
    } 
    //if not dealer, over 21: return bust/set next player or dealer 
    else if (currentPlayer != 0 && ckScore >21){
         console.log(ckScore+" :send bust, increase to next player, call nextPlayer(currentPlayer)");
         return nextPlayer(currentPlayer+1);
    }
    //if not dealer, over 21: return bust/set next player or dealer 
    else if (currentPlayer != 0 && ckScore == 21){
        console.log(ckScore+": BlackJack, call nextPlayer(currentPlayer)");
         return nextPlayer(currentPlayer+1);
    }  
    else if (currentPlayer == 0){
         return console.log("dealer turn");}
}
  
//assign current player# 
function nextPlayer(pi){
    if (pi < players.length){
        currentPlayer += 1;
       return console.log("nextPlayer: player set to "+players[currentPlayer].name+"for (multi)players turn");
    }
    else if (pi == players.length){
        currentPlayer = 0;
        //call dealerTurn to run through player turns 
         console.log("nexPlayer: all players turn complete, set to dealer, running dealterTurn;");
         dealerTurn();
    }
    else { 
        return console.log('exit NextPlayer')
    };
}

function setDealerScore(cp){ 
    let evalVal;
    let cScore = 0;
    let pScore = players[cp].score;
    let pHand = players[cp].hand;
        for (let i = 0; i < pHand.length; i++){
            if (pHand[i].cardVal == 11 && pScore > 10){
                 evalVal = 1;
            }
            else {
                evalVal = pHand[i].cardVal;
            }
            cScore += evalVal;
        }
        
    players[cp].score = cScore;
    updateGameboardScore(0);
    return cScore;}


function dealerTurn(){
    let dScore = setDealerScore(0);
    let gameup = updateGameboardScore(1)
    console.log("dealerTurn call Score "+dScore)
    if (dScore < 17) {
        players[0].hand.push(shuffledDeck.pop());
        dealCount += 1;
        console.log("dealerTurn: post dealer hits, pre dScore");
        dScore;
        gameup;
        return dealerTurn();
    }
    else {
        return endRound(1);
    }
}
//*start*disable game buttons
function disableButtons(hit, stay){}

//end of round function
function endRound(rc){
    roundCount += rc;
    roundComplete = 1;
    let dealerScore = players[0].score;
    let playerScore = players[1].score;
    winCalc(dealerScore, playerScore)
    console.log("End Round: player score = "+playerScore+". dealer score ="+dealerScore)
}
//determine winner, provide response
function winCalc(dealerScore, playerScore){
    if (playerScore > dealerScore){
        console.log(playerName+" Wins Round")
    }
    if (playerScore < dealerScore){
        console.log(playerName+" Wins Round")
    }
    if (playerScore == dealerScore){
        console.log("Player & Dealer Tie: No Contest")
    }
}
/*Start to jQuery*/
//cCard ==
//start jquery DOM manipulation code
/*function addCardImage(cCard) {
    let dealHandAr = players[0].hand;
    let playHandAr = players[0].hand;

    let newCard = $('<img></img>');
    newCard.attr('class',"handCard")
    if

}
/*
addCardImage(players[j].Hand[i]);
*/