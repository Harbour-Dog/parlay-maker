let bankroll, aggro;
let probabilities = [];
let oddslist = [];
let selections = [];
let parlaylist = [];
let indarray, resultsarray, selarray;
let probtemp = [];
let oddstemp = [];
let seltemp = [];
let probabilities2, oddslist2, selections2;
let count = 1;
let loop = 0;

document.getElementById("parlaybutton").addEventListener("click", parlayCalc1);
document.getElementById("calc").addEventListener("click", kellyCalc);
document.getElementById("addpick").addEventListener("click", addRow);

function addRow() {
    count++;
    selRow();
    probRow();
    oddsRow();
}

function selRow() {
    let input = document.createElement("input");
    input.setAttribute("id", "selection"+count);
    input.setAttribute("placeholder", "Selection"+count);
    input.setAttribute("class", "sel");
    let pickform = document.getElementById("pickform");
    pickform.append(input);
}

function probRow() {
    let input = document.createElement("input");
    input.setAttribute("id", "prob"+count);
    input.setAttribute("placeholder", "Win %");
    input.setAttribute("class", "prob");
    let pickform = document.getElementById("pickform");
    pickform.append(input);
}

function oddsRow() {
    let input = document.createElement("input");
    input.setAttribute("id", "odds"+count);
    input.setAttribute("placeholder", "Odds Offered");
    input.setAttribute("class", "odds");
    let pickform = document.getElementById("pickform");
    pickform.append(input);
}

function parlayCalc1() {
    probabilities.push(probabilities.shift());
    oddslist.push(oddslist.shift());
    selections.push(selections.shift());
    loop++;
   
    probarray = probabilities.map(function(x, index){
        return (x * probabilities2[index])/100});

    for (i = 0; i < probarray.length; i++){
        probtemp.push(probarray[i]);
    }

    oddsarray = oddslist.map(function(x, index){
        return Math.round(100*(x * oddslist2[index]))/100});

    for (i = 0; i < oddsarray.length; i++){
        oddstemp.push(oddsarray[i]);
    }

    for (i = 0; i < selections2.length; i++){
        seltemp.push(selections2[i] + " - " + selections[i] + " => ");
    }

    resultsarray = probtemp.map(function(x, index){
        return Math.floor(((x*oddstemp[index]-100)*bankroll*aggro)/(100*oddstemp[index]-100))
    });
    
    if (loop == Math.floor(count/2)) {
        for (i = 0; i < seltemp.length; i++){
            document.getElementById("parlays").innerHTML += (seltemp[i] + resultsarray[i] + "<br>")};        
    } else {parlayCalc1()};
    
}

function kellyCalc() {
    bankroll = document.getElementById("bankroll").value;
    aggro = document.getElementById("aggro").value;       
    let inputs = document.getElementsByTagName("input");    
        
    for (i = 0 ; i < inputs.length; i++) {
        if (inputs[i].getAttribute("class") == "sel"){
            selections.push(inputs[i].value)};
    }    

    for (i = 0 ; i < inputs.length ; i++) {
        if (inputs[i].getAttribute("class") == "prob"){
            probabilities.push(inputs[i].value)};
    }         
    
    for (i = 0 ; i < inputs.length ; i++) {
        if (inputs[i].getAttribute("class") == "odds"){
            oddslist.push(inputs[i].value)};
    };
    
    indarray = probabilities.map(function(x, index){
    return Math.floor(((x*oddslist[index]-100)*bankroll*aggro)/(100*oddslist[index]-100))
    });

    for (i = 0; i < selections.length; i++){
        for (i = 0; i < indarray.length; i++){
            document.getElementById("indbets").innerHTML += (selections[i] + " - " + indarray[i] + "<br>")
        }
    };   
    
    for (i = 0; i < (selections.length-1); i++){
        selections2 = selections.slice();
    };
    for (i = 0; i < (probabilities.length-1); i++){
        probabilities2 = probabilities.slice();
    };
    for (i = 0; i < (oddslist.length-1); i++){
        oddslist2 = oddslist.slice()
    };
}

function parlayCalc2() {
    probabilities.push(probabilities.shift());
    oddslist.push(oddslist.shift());
    selections.push(selections.shift());
    loop++;
   
    probarray = probabilities.map(function(x, index){
        return (x * probabilities2[index])/100});

    for (i = 0; i < probarray.length; i++){
        probtemp.push(probarray[i]);
    }

    oddsarray = oddslist.map(function(x, index){
        return Math.round(100*(x * oddslist2[index]))/100});

    for (i = 0; i < oddsarray.length; i++){
        oddstemp.push(oddsarray[i]);
    }

    for (i = 0; i < selections2.length; i++){
        seltemp.push(selections2[i] + " - " + selections[i] + " => ");
    }

    resultsarray = probtemp.map(function(x, index){
        return Math.floor(((x*oddstemp[index]-100)*bankroll*aggro)/(100*oddstemp[index]-100))
    });
    
    if (loop == Math.floor(count/2)) {
        for (i = 0; i < seltemp.length; i++){
            document.getElementById("parlays").innerHTML += (seltemp + resultsarray[i] + "<br>")};        
    } else {parlayCalc1};
}
