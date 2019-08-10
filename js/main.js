//global vars and arrays
let playerName = "" 

//functions
$(".onStartPrompt").submit(function(event){
    playerName = $('input[name="onPlayerName').val();
    console.log(playerName);
    event.preventDefault();
})


//shuffleDeck()