
    var timer1;
    var timeToAnswer = 21;

    var timer2;
    var timeToDisplay = 3;
    
    var right = 0;
    var wrong = 0;
    

$(function () {

    var currentQuestion = 

    $("#start").click(function() {

        currentQuestion = questions.shift()
        clear();
        questionTimer();
        asker(currentQuestion);


        

    });

    

    
    var questions = [
        {
           questionText: "Which band covered a Bob Dylan song for the soundtrack of the 2009 movie, Watchmen?", 
           ansArray: ["Black Veil Brides", "My Chemical Romance", "Taking Back Sunday", "Fall Out Boy"],
           rightAnswer: "My Chemical Romance"    
      
        },

        {
          questionText: "Which album by The Red Hot Chili Peppers came out chronologically first?",
          ansArray: ["One Hot Minute", "Californication", "Blood Sugar Sex Magik", "Mother's Milk"],
          rightAnswer: "Mother's Milk"
       
        },

        {
            questionText: "Which artist covered the Radiohead classic Creep at Coachella in 2008 and later sparked controversy after asking all copies to be removed from the internet?",
            ansArray: ["Prince", "Kelly Clarkson", "Macy Gray", "The Pretenders"], 
            rightAnswer: "Prince"

        },

        {
            questionText: "Which band did NOT originate in Kentucky?",
            ansArray: ["Emarosa", "Morning Teleportation", "The Black Keys", "Cage the Elephant"],
            rightAnswer: "The Black Keys"
        },

        {
            questionText: "Twenty One Pilots covered this Elvis Presley classic in 2012.",
            ansArray: ["Burning Love", "Guitar Man", "Can't Help Falling In Love", "A Little Less Conversation"],
            rightAnswer: "Can't Help Falling In Love"
        }
  
   ]


    function questionTimer() {
        clearInterval(timer1);
        timeToAnswer = 21;
        timer1 = setInterval(ansTimer, 1000);
        
        
    }   
        
    function ansTimer() {
        timeToAnswer--;
        displayTime = $("<p>").text(`Time Remaining: ${timeToAnswer}`); 
        $("#timer").html(displayTime);
        if (timeToAnswer === 0) {
            stop();
            displayTimer();

        }
    
    }

    function displayTimer() {
        
        clearInterval(timer2);
        timeToDisplay = 3;
        timer2 = setInterval(disTimer,1000);
    }

    function disTimer() {
        
        timeToDisplay--;
        if (timeToDisplay === 0) {
            currentQuestion = questions.shift()
            clearInterval(timer2);
            $("#wrongRight").empty(); 
            asker(currentQuestion);
            
                       
            
        }
    }

    function correctAnswer() {
        clearInterval(timer1);
        clear();
        $("#wrongRight").text("Correct!");

    }

    function wrongAnswer() {
        clearInterval(timer1);
        clear();
        $("#wrongRight").text("Sorry! That's wrong.");
    }

    

    function clear() {
        $(".clickable").empty();
        $("#timer").empty();
        $("#question").empty();
        
    }

    function stop() {
        clearInterval(timer1);
        clear();
        $("#timer").text("Times Up!");
        
    
    }

    function asker(question) {
        if (question === undefined) {
            endGame();
        } else {
            var displayQuestion = $("<p>").text(question.questionText);
            $("#question").html(displayQuestion);
            var choices = question.ansArray;
            for (i = 0; i < choices.length; i++) {
            var choice =  $("<p>").addClass("clickable").text(choices[i]);
            $("#answers").append(choice);

            }

          
        }
        questionTimer();
        checkForRightAnswer();
        
        
        
    }


    function checkForRightAnswer() {
        var answer = $(".clickable").click( function(e) {
            var userSelection = e.target.innerHTML;

            if (userSelection === currentQuestion.rightAnswer) { 
                right++;
                correctAnswer();
                displayTimer();
            } else {
                wrong++;
                wrongAnswer();
                displayTimer();
            }
        });

    }

    function endGame() {
        if (!alert(`Game Over! Right: ${right} Wrong: ${wrong}`)) {
            
            window.location.reload();
        };
    }

    
});

