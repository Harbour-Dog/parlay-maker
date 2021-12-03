let bankroll, aggro, maxbet, parlaysize;
let probabilities2, oddslist2, selections2;
let probabilities3, oddslist3, selections3;
let indarray, resultsarray, selarray, probarray, oddsarray;
let probabilities = [];
let oddslist = [];
let selections = [];
let parlaylist = [];
let probtemp = [];
let oddstemp = [];
let seltemp = [];
let count = 1;
let loop = 0;

document.getElementById("calc").addEventListener("click", validator);
document.getElementById("addpick").addEventListener("click", addRow);

function addRow() {// Keeps the count and starts the three cell function //
    count++;
    selRow();
    probRow();
    oddsRow();
}

function selRow() {// create and label new Selection cell //
    let input = document.createElement("input");
    input.setAttribute("id", "selection"+count);
    input.setAttribute("placeholder", "Selection"+count);
    input.setAttribute("class", "sel");
    let picklist = document.getElementById("picklist");
    picklist.append(input);
}

function probRow() {// create and label new Win% cell //
    let input = document.createElement("input");
    input.setAttribute("id", "prob"+count);
    input.setAttribute("placeholder", "Win %");
    input.setAttribute("class", "prob");
    let picklist = document.getElementById("picklist");
    picklist.append(input);
}

function oddsRow() {// create and label new Odds Offered cell //
    let input = document.createElement("input");
    input.setAttribute("id", "odds"+count);
    input.setAttribute("placeholder", "Odds Offered");
    input.setAttribute("class", "odds");
    let picklist = document.getElementById("picklist");
    picklist.append(input);
}

function validator() {// checks for valid inputs in bankrolldiv, then directs to kellyCalc //
    bankroll = document.getElementById("bankroll").value;
    aggro = document.getElementById("aggro").value;       
    let maxcalc = document.getElementById("maxbet").value;
    maxbet = maxcalc*bankroll/100;
    parlaysize = document.getElementById("parlaysize").value;

    if (bankroll <= 0){
        return alert("Bankroll must be greater than 0.")
    } else if (aggro > 1){
        return alert("Betting greater than the Kelly Criterion is a long term losing proposition!\nMost professional bettors choose in the 0.25-0.5 range.");
    } else if (aggro <= 0){
        return alert("Kelly Criterion multipler cannot be 0 or less.")
    } else if (parlaysize > 3){
        return alert("We're currently set up only for parlays of 2 or 3 picks each");
    } else if (maxcalc < 0.5){
        return alert("Our current maximum bet can be set no lower than 0.1% of your bankroll");
    } else if (maxcalc > 3){
        return alert("Our current maximum bet can be set no higher than 3% of your bankroll");
    } else (kellyCalc());
}

function kellyCalc() {// creates arrays from input cells, and outputs the individual kelly values //
    let inputs = document.getElementsByTagName("input");// allows a search of input boxes to form arrays // 
        
    for (i = 0 ; i < inputs.length; i++) {
        if (inputs[i].getAttribute("class") == "sel"){//"sel" is the class set for all Selection input cells //
            selections.push(inputs[i].value)};
    }    

    for (i = 0 ; i < inputs.length ; i++) {
        if (inputs[i].getAttribute("class") == "prob"){//"prob" is the class set for all Win% input cells //
            probabilities.push(inputs[i].value)};
    }         
    
    for (i = 0 ; i < inputs.length ; i++) {
        if (inputs[i].getAttribute("class") == "odds"){//"odds" is the class set for all Odds Offered input cells //
            oddslist.push(inputs[i].value)};
    };
    
    indarray = probabilities.map(function(x, index){// creates array of calculated kelly values for each selection //
        if (Math.floor(((x*oddslist[index]-100)*bankroll*aggro)/(100*oddslist[index]-100)) < maxbet){
            return Math.floor(((x*oddslist[index]-100)*bankroll*aggro)/(100*oddslist[index]-100))
        } else {return maxbet};    
    });

    for (i = 0; i < selections.length; i++){// output for the individual kelly values //
        for (i = 0; i < indarray.length; i++){
            document.getElementById("indbets").innerHTML += (selections[i] + " => " + indarray[i] + "<br>")
        }
    };   
    
    for (i = 0; i < (selections.length-1); i++){// creates duplicates of the selections array to be used in parlay calculations //
        selections2 = selections.slice();// used for 2+ picks parlays //
        selections3 = selections.slice();// used for 3+ pick parlays //
    };

    for (i = 0; i < (probabilities.length-1); i++){
        probabilities2 = probabilities.slice();
        probabilities3 = probabilities.slice();
    };

    for (i = 0; i < (oddslist.length-1); i++){
        oddslist2 = oddslist.slice()
        oddslist3 = oddslist.slice()
    };

    window.scrollBy(0,900);

    if (parlaysize == 2){
        parlayCalc1();
    } else {parlay3Calc1()};
}

function parlayCalc1() {// creates the parlay selections and results arrays, and directs to parlayCalc2 //
    probabilities2.push(probabilities2.shift());
    oddslist2.push(oddslist2.shift());// these three push/shifts alter the arrays in order to map them with their duplicates //
    selections2.push(selections2.shift());
    loop++;// determines how many times this function will loop//
   
    probarray = probabilities.map(function(x, index){
        return (x * probabilities2[index])/100});

    for (i = 0; i < probarray.length; i++){
        probtemp.push(probarray[i]);// pushes the values obtained during this loop into probtemp //
    }

    oddsarray = oddslist.map(function(x, index){
        return Math.round(100*(x * oddslist2[index]))/100});

    for (i = 0; i < oddsarray.length; i++){
        oddstemp.push(oddsarray[i]);// pushes the values obtained during this loop into oddstemp //
    }

    for (i = 0; i < selections2.length; i++){
        seltemp.push(selections[i] + " - " + selections2[i] + " => ");
    }// pushes the desired output of parlay selections into seltemp //
    
    if (loop == Math.floor(count/2)) {// determines if the function has looped enough to make all possible parlays //
        parlayCalc2();        
    } else {parlayCalc1()};
    
}

function parlayCalc2() {// final output of 2-pick parlay results //    
    let parnum = (seltemp.length - (count/2));
    let parpos = (count/2);

    resultsarray = probtemp.map(function(x, index){// creates array of kelly values for the parlays//
        if (Math.floor(((x*oddstemp[index]-100)*bankroll*aggro)/(100*oddstemp[index]-100)) < maxbet){
            return Math.floor(((x*oddstemp[index]-100)*bankroll*aggro)/(100*oddstemp[index]-100));
        } else {return maxbet}; 
    });

    if (count % 2 === 0){// when count is even, there are repeated parlays at the end of the arrays (equal to count/2); this removes them //
        seltemp.splice(parnum,parpos);
        resultsarray.splice(parnum,parpos);
        for (i = 0; i < seltemp.length; i++){
            document.getElementById("parlays").innerHTML += (seltemp[i] + resultsarray[i] + "<br>")};
    } else {
        for (i = 0; i < seltemp.length; i++){
            document.getElementById("parlays").innerHTML += (seltemp[i] + resultsarray[i] + "<br>")};
    }
}

function parlay3Calc1() {// parlay button will direct here for 3-pick parlays //
    probabilities3.push(probabilities3.shift());
    probabilities3.push(probabilities3.shift());
    oddslist3.push(oddslist3.shift());// these push-shifts all set up one of our three arrays as being two iterations from the original //
    oddslist3.push(oddslist3.shift());
    selections3.push(selections3.shift());
    selections3.push(selections3.shift());

    parlay3Calc2();
}

function parlay3Calc2() {// this function creates the arrays for 3-pick parlays //
    r = (selections.length - 3);// needed to determine when this function has looped enough //
    loop++;
    
    if (loop % 2 !== 0){// this if-else statement determines which array to push-shift, depending on if the loop is odd or even //
        probabilities2.push(probabilities2.shift());
        oddslist2.push(oddslist2.shift());
        selections2.push(selections2.shift());
    } else {
        probabilities3.push(probabilities3.shift());
        oddslist3.push(oddslist3.shift());
        selections3.push(selections3.shift());
    }

    probarray = probabilities.map(function(x, index){// calculates probabilites for current array iterations, and pushes them into probtemp //
        return (x * probabilities2[index] * probabilities3[index])/10000});

    for (i = 0; i < probarray.length; i++){
        probtemp.push(probarray[i]);
    }

    oddsarray = oddslist.map(function(x, index){// calculates odds offered for current array iterations, and pushes them into oddstemp //
        return Math.round(100*(x * oddslist2[index] * oddslist3[index]))/100});

    for (i = 0; i < oddsarray.length; i++){
        oddstemp.push(oddsarray[i]);
    }

    for (i = 0; i < selections.length; i++){// pushes desired corresponding selections outputs for parlays into seltemp//
        seltemp.push(selections[i] + " - " + selections2[i] + " - " + selections3[i] + " => ");
    }

    if (loop >= ((Math.pow(r,2))/6)+(r/2)+(1/3)){// determines if enough parlays have been made to cover all possible combinations //
        parlay3Calc3();
    } else {
        parlay3Calc2();
    }
}

function parlay3Calc3() {// final output of 3-pick parlay results //
    let parnum = (seltemp.length - (2*count/3));
    let parpos = (2*count/3);

    resultsarray = probtemp.map(function(x, index){// creates array of kelly values for the parlays//
        if (Math.floor(((x*oddstemp[index]-100)*bankroll*aggro)/(100*oddstemp[index]-100)) < maxbet){
            return Math.floor(((x*oddstemp[index]-100)*bankroll*aggro)/(100*oddstemp[index]-100));
        } else {return maxbet}; 
    });

    if (count % 3 === 0){// when count is a multiple of three, this removes extraneous parlays (2/3 of the count worth) //
        seltemp.splice(parnum,parpos);
        resultsarray.splice(parnum,parpos);
        for (i = 0; i < seltemp.length; i++){
            document.getElementById("parlays").innerHTML += (seltemp[i] + resultsarray[i] + "<br>")};
    } else {
        for (i = 0; i < seltemp.length; i++){
            document.getElementById("parlays").innerHTML += (seltemp[i] + resultsarray[i] + "<br>")};
    }
}

function Test(){// not tragetted. Attempt at a function which incorporates individual kelly values into total output of parlays //
    let indexes = [];
    let variable = variable;



    for (i = 0; i < selections.length; i++){

    }

    for (i = 0; i < seltemp.length; i++){
        if (seltemp[i] === variable)//seltemp[i] has to equal a for loop that runs through selections?//
            indexes.push(i);
    }
    
}