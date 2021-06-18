let bankroll, aggro;
let probabilities2, oddslist2, selections2;
let indarray, resultsarray, selarray;
let probabilities = [];
let oddslist = [];
let selections = [];
let parlaylist = [];
let probtemp = [];
let oddstemp = [];
let seltemp = [];
let count = 1;
let loop = 0;

document.getElementById("parlaybutton").addEventListener("click", parlayCalc1);
document.getElementById("calc").addEventListener("click", kellyCalc);
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
    let pickform = document.getElementById("pickform");
    pickform.append(input);
}

function probRow() {// create and label new Win% cell //
    let input = document.createElement("input");
    input.setAttribute("id", "prob"+count);
    input.setAttribute("placeholder", "Win %");
    input.setAttribute("class", "prob");
    let pickform = document.getElementById("pickform");
    pickform.append(input);
}

function oddsRow() {// create and label new Odds Offered cell //
    let input = document.createElement("input");
    input.setAttribute("id", "odds"+count);
    input.setAttribute("placeholder", "Odds Offered");
    input.setAttribute("class", "odds");
    let pickform = document.getElementById("pickform");
    pickform.append(input);
}

function kellyCalc() {// creates arrays from the input cells, and outputs the kelly individual kelly values//
    bankroll = document.getElementById("bankroll").value;
    aggro = document.getElementById("aggro").value;      
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
    
    indarray = probabilities.map(function(x, index){// creates array of individual kelly values //
    return Math.floor(((x*oddslist[index]-100)*bankroll*aggro)/(100*oddslist[index]-100))
    });

    for (i = 0; i < selections.length; i++){// output for the individual kelly values //
        for (i = 0; i < indarray.length; i++){
            document.getElementById("indbets").innerHTML += (selections[i] + " - " + indarray[i] + "<br>")
        }
    };   
    
    for (i = 0; i < (selections.length-1); i++){// creates a duplicate of selections array, to use in parlayCalc1 //
        selections2 = selections.slice();
    };
    for (i = 0; i < (probabilities.length-1); i++){// creates a duplicate of probabilities array, to use in parlayCalc1 //
        probabilities2 = probabilities.slice();
    };
    for (i = 0; i < (oddslist.length-1); i++){// creates a duplicate of oddslist array, to use in parlayCalc1 //
        oddslist2 = oddslist.slice()
    };
}

function parlayCalc1() {// creates the parlay selections and results arrays, and directs to parlayCalc2 //
    probabilities.push(probabilities.shift());
    oddslist.push(oddslist.shift());// these three push/shifts alter the arrays in order to map them with their duplicates //
    selections.push(selections.shift());
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
        seltemp.push(selections2[i] + " - " + selections[i] + " => ");
    }// pushes the desired output of parlay selections into seltemp //
    
    if (loop == Math.floor(count/2)) {// determines if the function has looped enough to make all possible parlays //
        parlayCalc2();        
    } else {parlayCalc1()};
    
}

function parlayCalc2() {// final output of parlay results //    
    let parnum = (seltemp.length - (count/2));
    let parpos = (count * loop - parnum);
    resultsarray = probtemp.map(function(x, index){// creates array of kelly values for the parlays//
        return Math.floor(((x*oddstemp[index]-100)*bankroll*aggro)/(100*oddstemp[index]-100))
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