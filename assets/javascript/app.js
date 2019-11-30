
    var timer1;
    var timeToAnswer = 21;

    var timer2;
    var timeToDisplay = 3; 

$(function () {

    var currentQuestion; 

    $("#start").click(function() {

        currentQuestion = questions.shift()
        clear();
        questionTimer();
        asker(currentQuestion);


        

    });

    

    
    var questions = [
        {
           questionText: "Which band covered a Bob Dylan song for the soundtrack of the 2009 movie, Watchmen?", 
           ansArray: ["My Chemical Romance", "Black Veil Brides", "Taking Back Sunday", "Fall Out Boy"],
           rightAnswer: "My Chemical Romance"    
      
        },

        {
          questionText: "Which album by The Red Hot Chili Peppers came out first chronologically?",
          ansArray: ["Mother's Milk", "One Hot Minute", "Californication", "Blood Sugar Sex Magik"],
          rightAnswer: "Mother's Milk"
       
        },

        {
            questionText: "Which artist covered the Radiohead classic Creep at Coachella in 2008 and later caused controversy after asking all copies to be removed from the internet?",
            ansArray: ["Prince", "Kelly Clarkson", "Macy Gray", "The Pretenders"], 
            rightAnswer: "Prince"

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

        }
    
    }

    function displayTimer() {
        console.log("hello");
        clearInterval(timer2);
        timeToDisplay = 3;
        timer2 = setInterval(disTimer,1000);
    }

    function disTimer() {
        console.log("hello2");
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

        var displayQuestion = $("<p>").text(question.questionText);
        $("#question").html(displayQuestion);
        var choices = question.ansArray;
        for (i = 0; i < choices.length; i++) {
          var choice =  $("<p>").addClass("clickable").attr("id", i).text(choices[i]);
          $("#answers").append(choice);

          
        }
        questionTimer();
        checkForRightAnswer();
        
    }


    function checkForRightAnswer() {
        var answer = $(".clickable").click( function(e) {
            var userSelection = e.target.innerHTML;

            if (userSelection === currentQuestion.rightAnswer) { 
                correctAnswer();
                displayTimer();
            } else {
                wrongAnswer();
                displayTimer();
            }
        });

    }

});

