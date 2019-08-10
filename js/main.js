//global

/*
$(".onStartPrompt").submit(function(event){
    playerName = $('.onPlayerName')
    console.log(playerName);
event.preventDefault();
    //$('.PlayerName').val = $('.onPlayerName') 
})
*/


$(".onStartPrompt").submit(function(event){
    let getPlayerName = $('input[name="onPlayerName').val();
    console.log(getPlayerName);
    event.preventDefault();
})


