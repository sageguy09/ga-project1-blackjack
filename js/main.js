//deck array
let cardImgDir = "css/cardPNG/";
let deck = [
    {cardVar: '2',
    cardSuit: 'diamonds',
    cardVal: 2,
    carImg: cardImgDir+"2_of_diamonds"
    },

]
    










]
let number = ['2', '3', '4' ,'5', '6', '7', '8', '9', '10']
let face = ['king', 'queen', 'jack', 'ace']
let suit = ['diamond', 'heart', 'diamond', 'heart']

//global vars and arrays
let playerName = "" 



//functions
$(".onStartPrompt").submit(function(event){
    playerName = $('input[name="onPlayerName').val();
    console.log(playerName);
    event.preventDefault();
})


//shuffleDeck()

