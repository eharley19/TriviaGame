$(function () {

    $("#start").click(function() {

    
        clear();
        questionTimer();
        asker(questionOne);


        

    });

    
    var questionOne = {
        
           questionText: "Which band covered a Bob Dylan song for the soundtrack of the 2009 movie, Watchmen?", 
           ansArray: ["My Chemical Romance", "Black Veil Brides", "Taking Back Sunday", "Fall Out Boy"]    
      
    };

    var questionTwo = {
          questionText: "Which album by The Red Hot Chili Peppers came out first chronologically?",
          ansArray: ["Mother's Milk", "One Hot Minute", "Californication", "Blood Sugar Sex Magik"]
       
    };

    var questionThree = {

        questionText: "Which artist covered the Radiohead classic Creep at Coachella in 2008 and later caused controversy after asking all copies to be removed from the internet?",
        ansArray: ["Prince", "Kelly Clarkson", "Macy Gray", "The Pretenders"] 


    };

    var timer1;
    var timeToAnswer = 21;
    var timeToDisplay = 15; 

    function questionTimer() {
        clearInterval(timer1);
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

    function correctAnswer() {
        clearInterval();
        clear();
        $("#gameArea").text("Correct!");
    }

    function wrongAnswer() {
        clearInterval();
        clear();
        $("#gameArea").text("Sorry! That's wrong.");
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

        // if (question == questionOne) {
        //     $(".clickable").click(function() {
        //         if (
        //     }

            
        // } 
         


    }
});
