
    let five = document.getElementById("five")
    let ten = document.getElementById("ten")
    let fiften = document.getElementById("fiften")
    let twenty = document.getElementById("twenty")
    
    let rockButton = document.getElementById("rockButton")
    let paperButton = document.getElementById("paperButton")
    let scissorsButton = document.getElementById("scissorsButton")

    let playerBoxColor = document.getElementById("playerBoxColor")
    let compBoxColor = document.getElementById("compBoxColor")
    let winLooseMessage = document.getElementById("winLooseMessage")


    //Hide clicked Rounds by user
    let displayRounds = document.getElementById("displayRounds")
    //Show Display from Rounds
    let displayRoundsStatus = document.getElementById("displayRoundsStatus")
    //Ergebnis 0:0
    let ergebnisSpiel = document.getElementById("ergebnisSpiel")
    //Ergebnis Text User Rock Comp Paper
    let ergebnisText = document.getElementById("ergebnisText")
    //Restart Button
    let restartButton = document.getElementById("restart")

    let round;
    // let punkte;
    let counter = 0;
    let punkteComp = 0;
    let punktePlayer = 0;

    //Wie viele Runden wählt der User
    function getRounds(){
        if(five.checked){
            round = 5;
            // console.log(round)
        } else if(ten.checked == true){
            round = 10;
            // console.log(round)
        } else if(fiften.checked){
            round = 15;
            // console.log(round)
        } else if(twenty.checked){
            round = 20;
            // console.log(round)
        }
        return round
    }
    
    //Nach Spielende blenden sich die Buttons aus, keine Betätigung
    function buttonsBlockForClick(){
        if (counter == round){
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            if(punktePlayer>punkteComp){
                winLooseMessage.innerHTML = `You have won the game!`
                winLooseMessage.style.color="limegreen"
                winLooseMessage.style.fontSize="1.4em"
            } else if(punktePlayer<punkteComp){
                winLooseMessage.innerHTML = `You have lost the game!`
                winLooseMessage.style.color="tomato"
                winLooseMessage.style.fontSize="1.4em"
            }
            
        }
    }
    
    

    function rock(){
        // console.log("work")
        getRounds()
        counter++
        // console.log(counter)
        let random = (Math.floor(Math.random() * 3)+1)
            console.log(random)
        
        //Display Runden ausblenden & Display Versuche einblenden
        displayRounds.style.display="none"
        displayRoundsStatus.style.display="block"
        displayRoundsStatus.innerHTML=`${counter}/${round}`
        
        //Ergebniss
        //Player Rock=1 Computer Rock=1 => Unentschieden
        if(random == 1){
            ergebnisText.innerHTML = 
            `It was a draw. You both chose Rock`
            rockButton.style.backgroundColor="white"
            paperButton.style.backgroundColor="white"
            scissorsButton.style.backgroundColor="white"

            playerBoxColor.style.backgroundColor="tomato"
            compBoxColor.style.backgroundColor="tomato"
       
            //Player Rock=1 Computer Paper=2 => Computer win!
        }else if(random == 2){
            punkteComp++
            rockButton.style.backgroundColor="tomato"
            paperButton.style.backgroundColor="white"
            scissorsButton.style.backgroundColor="white"

            ergebnisText.innerHTML = 
            `Paper<span>(COMP)</span>beats Rock<span>(USER)</span>. You've lost!`
            compBoxColor.style.backgroundColor="limegreen"
            playerBoxColor.style.backgroundColor="tomato"
        
            //Player Rock=1 Computer Scissors=3 => Player win!
        } else if(random == 3){
            punktePlayer++
            rockButton.style.backgroundColor="limegreen"
            paperButton.style.backgroundColor="white"
            scissorsButton.style.backgroundColor="white"

            ergebnisText.innerHTML = 
            `Rock<span>(USER)</span>beats Scissors<span>(COMP)</span>. You've won!`
            compBoxColor.style.backgroundColor="tomato"
            playerBoxColor.style.backgroundColor="limegreen"
        }
        ergebnisSpiel.innerHTML = `${punktePlayer}:${punkteComp}`
        buttonsBlockForClick()        
    }


    function paper(){
        console.log("work")
        // console.log("work")
        getRounds()
        counter++
        // console.log(counter)
        let random = (Math.floor(Math.random() * 3)+1)
            console.log(random)
        
        //Display Runden ausblenden & Display Versuche einblenden
        displayRounds.style.display="none"
        displayRoundsStatus.style.display="block"
        displayRoundsStatus.innerHTML=`${counter}/${round}`

        //Ergebniss
        //Player Paper=2 Computer Paper=2 => Unentschieden
        if(random == 2){
            ergebnisText.innerHTML = 
            `It was a draw. You both chose Paper`
            rockButton.style.backgroundColor="white"
            paperButton.style.backgroundColor="white"
            scissorsButton.style.backgroundColor="white"

            playerBoxColor.style.backgroundColor="tomato"
            compBoxColor.style.backgroundColor="tomato"
        
            //Player Paper=2 Computer Scissors=3 => Computer win!
        }else if(random == 3){
            punkteComp++
            paperButton.style.backgroundColor="tomato"
            rockButton.style.backgroundColor="white"
            scissorsButton.style.backgroundColor="white"

            ergebnisText.innerHTML = 
            `Scissors<span>(COMP)</span>beats Paper<span>(USER)</span>. You've lost!`
            compBoxColor.style.backgroundColor="limegreen"
            playerBoxColor.style.backgroundColor="tomato"
       
            //Player Paper=2 Computer Rock=1 => Player win!
        } else if(random == 1){
            punktePlayer++
            paperButton.style.backgroundColor="limegreen"
            rockButton.style.backgroundColor="white"
            scissorsButton.style.backgroundColor="white"

            ergebnisText.innerHTML = 
            `Paper<span>(USER)</span>beats Rock<span>(COMP)</span>. You've won!`
            compBoxColor.style.backgroundColor="tomato"
            playerBoxColor.style.backgroundColor="limegreen"
        }
        ergebnisSpiel.innerHTML = `${punktePlayer}:${punkteComp}`

        buttonsBlockForClick()
        // console.log(`rounds ${round}`)
        // console.log(`counter ${counter}`)
    }



    function scissors(){
        console.log("work")
        getRounds()
        counter++
        // console.log(counter)
        let random = (Math.floor(Math.random() * 3)+1)
            console.log(random)
        
        //Display Runden ausblenden & Display Versuche einblenden
        displayRounds.style.display="none"
        displayRoundsStatus.style.display="block"
        displayRoundsStatus.innerHTML=`${counter}/${round}`

        //Ergebniss
        //Player Scissors=3 Computer Scissors=3 => Unentschieden
        if(random == 3){
            ergebnisText.innerHTML = 
            `It was a draw. You both chose Scissors`
            rockButton.style.backgroundColor="white"
            paperButton.style.backgroundColor="white"
            scissorsButton.style.backgroundColor="white"

            playerBoxColor.style.backgroundColor="tomato"
            compBoxColor.style.backgroundColor="tomato"
       
            //Player Scissors=3 Computer Rock=1 => Computer win!
        }else if(random == 1){
            punkteComp++
            scissorsButton.style.backgroundColor="tomato"
            rockButton.style.backgroundColor="white"
            paperButton.style.backgroundColor="white"

            ergebnisText.innerHTML = 
            `Rock<span>(COMP)</span>beats Scissors<span>(USER)</span>. You've lost!`
            compBoxColor.style.backgroundColor="limegreen"
            playerBoxColor.style.backgroundColor="tomato"
        
            //Player Scissors=3 Computer Paper=2 => Player win!
        } else if(random == 2){
            punktePlayer++
            scissorsButton.style.backgroundColor="limegreen"
            rockButton.style.backgroundColor="white"
            paperButton.style.backgroundColor="white"

            ergebnisText.innerHTML = 
            `Scissors<span>(USER)</span>beats Paper<span>(COMP)</span>. You've won!`
            compBoxColor.style.backgroundColor="tomato"
            playerBoxColor.style.backgroundColor="limegreen"
        }
        ergebnisSpiel.innerHTML = `${punktePlayer}:${punkteComp}`
        buttonsBlockForClick()
    }
    
    function restart(){
        console.log("work")
        location.reload()

    }
    

