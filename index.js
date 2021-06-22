let bankroll, aggro, maxbet;
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

document.getElementById("parlaybutton").addEventListener("click", parlaySize);
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

function kellyCalc() {// creates arrays from input cells, and outputs the individual kelly values //
    bankroll = document.getElementById("bankroll").value;
    aggro = document.getElementById("aggro").value;       
    let maxcalc = document.getElementById("maxbet").value;
    maxbet = maxcalc*bankroll/100;

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
    
    indarray = probabilities.map(function(x, index){
        if (Math.floor(((x*oddslist[index]-100)*bankroll*aggro)/(100*oddslist[index]-100)) < maxbet){
            return Math.floor(((x*oddslist[index]-100)*bankroll*aggro)/(100*oddslist[index]-100))
        } else {return maxbet};
    
    });

    for (i = 0; i < selections.length; i++){// output for the individual kelly values //
        for (i = 0; i < indarray.length; i++){
            document.getElementById("indbets").innerHTML += (selections[i] + " => " + indarray[i] + "<br>")
        }
    };   
    
    for (i = 0; i < (selections.length-1); i++){// creates a duplicate of selections array, to use in parlayCalc1 //
        selections2 = selections.slice();// used for 2+ picks parlays //
        selections3 = selections.slice();// used for 3+ pick parlays //
    };
    for (i = 0; i < (probabilities.length-1); i++){// creates a duplicate of probabilities array, to use in parlayCalc1 //
        probabilities2 = probabilities.slice();
        probabilities3 = probabilities.slice();
    };
    for (i = 0; i < (oddslist.length-1); i++){// creates a duplicate of oddslist array, to use in parlayCalc1 //
        oddslist2 = oddslist.slice()
        oddslist3 = oddslist.slice()
    };
}

function parlaySize() {// directs to the appropriate function for the requested size of parlay //
    let parlaysize = document.getElementById("parlaysize").value;

    if (parlaysize == 2){
        parlayCalc1();
    } else {parlay3Calc1()};
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

function parlay3Calc1(){// parlay button will direct here for 3-pick parlays //
    probabilities.push(probabilities.shift());
    probabilities.push(probabilities.shift());
    oddslist.push(oddslist.shift());
    oddslist.push(oddslist.shift());
    selections.push(selections.shift());
    selections.push(selections.shift());

    parlay3Calc2A();
}

function parlay3Calc2A() {// first of two functions which target one another to do the 3 pick parlays //
    probabilities2.push(probabilities2.shift());
    oddslist2.push(oddslist2.shift());// these 2A and 2B functions go back and forth between each other, changing the original and second arrays of the triplicates that we've made, in order to perform the desired operations on them //
    selections2.push(selections2.shift());
    r = (selections.length - 3);// needed to determine when the functions have looped enough//
    loop++;

    probarray = probabilities3.map(function(x, index){
        return (x * probabilities2[index] * probabilities[index])/10000});

    for (i = 0; i < probarray.length; i++){
        probtemp.push(probarray[i]);
    }

    oddsarray = oddslist3.map(function(x, index){
        return Math.round(100*(x * oddslist2[index] * oddslist[index]))/100});

    for (i = 0; i < oddsarray.length; i++){
        oddstemp.push(oddsarray[i]);
    }

    for (i = 0; i < selections3.length; i++){
        seltemp.push(selections3[i] + " - " + selections2[i] + " - " + selections[i] + " => ");
    }

    if (loop >= ((Math.pow(r,2))/6)+(r/2)+(1/3)){
        parlay3Calc3();
    } else {
        parlay3Calc2B();
    }
}

function parlay3Calc2B() {// second of two functions which target one another to do 3-parlay picks //
    probabilities.push(probabilities.shift());
    oddslist.push(oddslist.shift());// 2B changes the original arrays //
    selections.push(selections.shift());
    r = (selections.length - 3);
    loop++;

    probarray = probabilities3.map(function(x, index){
        return (x * probabilities2[index] * probabilities[index])/10000});

    for (i = 0; i < probarray.length; i++){
        probtemp.push(probarray[i]);
    }

    oddsarray = oddslist3.map(function(x, index){
        return Math.round(100*(x * oddslist2[index] * oddslist[index]))/100});

    for (i = 0; i < oddsarray.length; i++){
        oddstemp.push(oddsarray[i]);
    }

    for (i = 0; i < selections3.length; i++){
        seltemp.push(selections3[i] + " - " + selections2[i] + " - " + selections[i] + " => ");
    }

    if (loop >= ((Math.pow(r,2))/6)+(r/2)+(1/3)){
        parlay3Calc3();
    } else {
        parlay3Calc2A();
    }
}

function parlay3Calc3(){// final output of 3-pick parlay results //
    let parnum = (seltemp.length - (2*count/3));
    let parpos = (2* count/3);

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