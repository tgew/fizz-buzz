$(document).ready(function() {

    for (var i=1; i<101; i++) {
        if (!(i%15)) {
            $('.output').append("fizz buzz <BR>");
        }
        else if (!(i%5)){
            $('.output').append("buzz <BR>");
        }
        else if (!(i%3)){
            $('.output').append("fizz <BR>");
        }
        else {
            $('.output').append(i + "<BR>");
        }
    }
    
});