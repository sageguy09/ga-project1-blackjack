best of 5 rounds


adding unique betting method that interacts with the game
keybinds
****Project One: BlackJack****
//on page load//
/
call onLoad()
	set css/default values
	display onStartPrompt
	await 'submit' fom 'start'
	
		call getPlayerName
			set playerName to startPlayerName
				
		call shuffleDeck
			randomize Deck array order(52 objects)
		
		status prompt "hit or stay"
		close onStartPrompt
/

/
on dealButton
	set dealCount to '0'
	call dealCards()
		(loop dealCount is <= 1)
		deal card[dealcount[#]] from Deck to playerhand
			call setCardDisplay(dealtcard)
				(update class to reflect dealtCard suit/card value)
				(repeat for dealer)
		disable dealbutton

		return:
		currentPlayerScore = sum dealerCards
		currentDealerScore = sum dealerCards
/

/
on hitButton/
	call dealCards()
		(loop dealCount is > 1 and currentScore <21)	
		deal card[dealcount[#]] from Deck to player/dealer
		currentPlayerScore = sum dealerCards
		currentDealerScore = sum dealerCards
		
		call getCurrentScore()
			if current(player/dealer)Score > 21
			update/set focus statusPrompt	"player/dealer bust! You win/lose round (dealCount[#]"
			call getTotalScore
				update totalScore

			else if (player turn) update statusPrompt "Hit or Stand?"

			else if (dealer turn) update statusPrompt "Dealer current score is currentDealerScore"

/

/
if total(player)Score > 3
			update/set focus statusPrompt	"You have won!"
			display playAgainButton
if total(player)Score < 3
			update/set focus statusPrompt	"You loose!"
			display playAgainButton

/
on playAgainButton 
	call onLoad()

/
on standButton
	call dealerTurn()
	call getCurrentScore()
/

dealerTurn()
	check currentScore
		if < 17
			dealCards()
		if > 17
			getCurrentScore	



/
on resetButton
	display confrimPrompt 'are you sure'
	no - return/close prompt
	yes - call onLoad()
/

/
on settingsButton
	display settingMenu
	allow display themes
	allow custom deck color
	custom keybinds
/

/
on helpButton
	display instructions
	display keyBinds
/

/on/while keyBindsButton pressed
	display keyBind overlays




