var sum = 0;
var calculatePercentageComplete = 0;
onmessage = function (event) {
    var maxLimit =event.data;
    for (var i=0; i<=maxLimit; i++) {    
    sum+=i;    
    calculatedPercentageComplete = Math.round((i/maxLimit)*100);    
    if (calculatedPercentageComplete > calculatePercentageComplete) {        
    postMessage(calculatedPercentageComplete + '% completed');    
    calculatePercentageComplete = calculatedPercentageComplete;
    }
    }     
    postMessage("Sum: "+sum);

}

