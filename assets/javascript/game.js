$(document).ready(function() {

    var crystal1 = Math.floor((Math.random() * 12) + 1);
    var crystal2 = Math.floor((Math.random() * 12) + 1);
    var crystal3 = Math.floor((Math.random() * 12) + 1);
    var crystal4 = Math.floor((Math.random() * 12) + 1);
    var beginningRandom = $("#beginningRandom");
    var score = $("#Score");
    var currentScore = 0;
    var win = $("#Win");
    var currentWin = 0;
    var lose = $("#Lose");
    var currentLose = 0;
    var math1 = Math.floor((Math.random() * 101) + 19);

    beginningRandom.text(math1);

    score.text(0);

    win.text(0);

    lose.text(0);

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    go()

    function reset() {
        $(".crystals", "#score").empty();

        math1 = Math.floor((Math.random() * 101) + 19);
        beginningRandom.text(math1);
        
        currentScore = 0;
        score.text(currentScore);

        crystal1 = Math.floor((Math.random() * 12) + 1); 
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);

        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);
        
        go()
    }

        function go() { 
    
            $("#crystal1").on("click", function() {
                
                currentScore = currentScore + crystal1;

                score.text(currentScore);
                
                
                if (math1 == currentScore) {
                    currentWin++;
                    win.text(currentWin);
                    reset();
                } else if (math1 < currentScore) {
                    currentLose++;
                    lose.text(currentLose);
                    reset();
                };

            });

            $("#crystal2").on("click", function() {
                
                currentScore = currentScore + crystal2;

                score.text(currentScore);
                
                
                if (math1 == currentScore) {
                    currentWin++;
                    win.text(currentWin);
                    reset();
                } else if (math1 < currentScore) {
                    currentLose++;
                    lose.text(currentLose);
                    reset();
                };

            });

            $("#crystal3").on("click", function() {
                
                currentScore = currentScore + crystal3;

                score.text(currentScore);
                
                
                if (math1 == currentScore) {
                    currentWin++;
                    win.text(currentWin);
                    reset();
                } else if (math1 < currentScore) {
                    currentLose++;
                    lose.text(currentLose);
                    reset();
                };

            });

            $("#crystal4").on("click", function() {
                
                currentScore = currentScore + crystal4;

                score.text(currentScore);
                
                
                if (math1 == currentScore) {
                    currentWin++;
                    win.text(currentWin);
                    reset();
                } else if (math1 < currentScore) {
                    currentLose++;
                    lose.text(currentLose);
                    reset();
                };

            });

        }




});