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
let dealCount;
let currentPlayer =0;
let players = new Array();
let roundComplete = 0;
let roundCount;
//let hitBttn = $("#hitBtn");
//let stayBttn = $("#stayBtn");


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
    dealCount = 0;
    currentPlayer = 1;
    roundComplete = 0;
    event.preventDefault();
    return dealCards();
})

$("#hitBtn").click(function(event){
    dealCards();
    console.log("hitBtn listener")
})

$("#stayBtn").click(function(event){
    fScore = players[currentPlayer].score;
    roundComplete = 1;
   console.log("staybtn listener:players score = "+fScore);
   return dealerTurn();
    
})
//shuffleDeck() to call deck and set shuffledDeck to array of random cards
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
        
    console.log("dealCards after createHand() remaining cards: "+shuffledDeck.length+" cards pulled: "+dealCount+" calling setCurrentScore")
    }
    else {
        players[currentPlayer].hand.push(shuffledDeck.pop());
        dealCount += 1;
        console.log("dealCards after hit btn test: remaing cards: "+shuffledDeck.length+" cards pulled: "+dealCount+" calling setCurrentScore");
    };
    setCurrentScore(currentPlayer);
}
    

//gets score for currentPlayer
function setCurrentScore(cp){ 
    let evalVal;
    let cScore = 0;
    let pScore = players[cp].score;
    //aces logic
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
     chkCurrentScore(cScore);
}
//if currentPlayer(!= dealer), verify  score, return/call functions
function  chkCurrentScore(ckScore){
    //if not dealer, under 21, return ckScore (keep playing)
    if (currentPlayer != 0 && ckScore < 21){
        return console.log(ckScore+" :await Hit/Stay");
    } 
    //if not dealer, over 21: return bust/set next player or dealer 
    else if (currentPlayer != 0 && ckScore >21){
         console.log(ckScore+" :send bust, increase to next player, call nextPlayer(currentPlayer)");
          nextPlayer(currentPlayer);
    }
    //if not dealer, over 21: return bust/set next player or dealer 
    else if (currentPlayer != 0 && ckScore == 21){
        console.log(ckScore+": BlackJack, call nextPlayer(currentPlayer)");
         return nextPlayer(currentPlayer);
    }  
    else return (currentPlayer + " end else "+ ckScore)
    //else {return nextPlayer(currentPlayer+1)};
    //loop score back to dealerTurn? else return
}
  

function nextPlayer(pi){
     
     if (pi+1 == players.length){
        currentPlayer = 0;
        //call dealerTurn to run through player turns 
         console.log("nexPlayer: all players turn complete, set to dealer, running dealterTurn;");
        return dealerTurn();
    } 
    
    else if (pi+1 < players.length){
        currentPlayer += 1;
       return console.log("nextPlayer: player set to "+players[currentPlayer].name+"for (multi)players turn");
    }
     
    else { 
        return console.log('exit NextPlayer')
    };
}
function dealerTurn(){
    let dScore = setCurrentScore(0);
    if (dScore < 17) {
        console.log("dealerTurn: dealer hits")
        return dealCards();
    }
    else return endRound(1);
}

function disableButtons(hit, stay){}



function endRound(rc){
    roundCount += rc;
    roundComplete = 1;
    console.log("End Round: player score = "+players[1].score+". dealer score ="+players[0].score)
 
    for (i = 0; i < players.length; i++){
        console.log(i, players[i].name, players[i].score)
    }
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

       //return set playerCount to dealer
        
        //**update to send to statusPrompt**
        
         //console.log("chkCscore3: "+cuPlayerName+" BlackJack! score: "+ckScore+ "next players turn to play return message and calling nextPlayer(currentPlayer+1)")
       //message function needs to add cooldown until player swap, next deal.
         //return nextPlayer(currentPlayer+1);

    
/*
//dealer (dealer logic?)
else if (currentPlayer == 0 && ckScore < 17){
    return dealerTurn(ckScore);
    //**update to send to statusPrompt**  //message = players.[currentPlayer].name"(dealer)"" = chkCurrentScore
    console.log("chkCscore4: "+cuPlayerName+" current score "+ckScore+". Hit or Stay? update dealer score *add in call dealerHit* return message and await input")
    
}
    //then call hitButton(submit)
else if (currentPlayer == 0 && ckScore >21){
    //*do next* update below to refelect dealer...
//return set playerCount to dealer

//**update to send to statusPrompt**
console.log("chkCscore5: "+cuPlayerName+" BUST! score: "+ckScore+"return message and calling nextPlayer(currentPlayer)")
return dealerTurn(ckScore);
}

else if (currentPlayer == 0 && ckScore == 21){
    //*do next* update below to refelect dealer...
//return set playerCount to dealer

//**update to send to statusPrompt**
console.log("chkCscore6: "+cuPlayerName+" dealer hit BlackJack! score: "+ckScore+"return message and calling nextPlayer(currentPlayer)")
return dealerTurn(ckScore);
};


/*
else {
    console.log("chkCscorehit after game end."+ckScore+"bug-disable on last player turn")
    
};
*/
