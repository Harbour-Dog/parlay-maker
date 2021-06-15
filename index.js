let bankroll, aggro;
let probabilities = [];
let oddslist = [];
let selections = [];
let indarray, resultsarray;
let probarray, oddsarray, selarray;
let probabilities2, oddslist2, selections2;
let count = 1;

document.getElementById("parlaybutton").addEventListener("click", Test);
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

function Test() {
    for (i = 0, i < (selection.length-2); i++)
        if (i = (selection.length-1)) {break;}
        
}

function parlayCalc() {
    probabilities.push(probabilities.shift());
    oddslist.push(oddslist.shift());
    selections.push(selections.shift());
    
    probarray = probabilities.map(function(x, index){
        return (x * probabilities2[index])/100});

    oddsarray = oddslist.map(function(x, index){
        return Math.round(100*(x * oddslist2[index]))/100});

    resultsarray = probarray.map(function(x, index){
        return Math.floor(((x*oddsarray[index]-100)*bankroll*aggro)/(100*oddsarray[index]-100))
    });

    for (i = 0; i < selections.length; i++){
        for (i = 0; i < selections.length; i++){
            for (i = 0; i < resultsarray.length; i++) {
                document.getElementById("parlays").innerHTML += (selections2[i] + " - " + selections[i] + " => " + resultsarray[i] + "<br>");
            }    
        }
    }

    console.log(probarray);
    console.log(oddsarray);
    console.log(probabilities2);
    console.log(selections2);
}

function kellyCalc() {
    bankroll = document.getElementById("bankroll").value;
    aggro = document.getElementById("aggro").value;       
    let inputs = document.getElementsByTagName("input"); 
        
    for (i = 0 ; i < inputs.length ; i++) {
        if (inputs[i].getAttribute("class") == "sel")
            selections.push(inputs[i].value);
    }    

    for (i = 0 ; i < inputs.length ; i++) {
        if (inputs[i].getAttribute("class") == "prob")
            probabilities.push(inputs[i].value);
    }         
    
    for (i = 0 ; i < inputs.length ; i++) {
        if (inputs[i].getAttribute("class") == "odds")
            oddslist.push(inputs[i].value);
    }
    
    indarray = probabilities.map(function(x, index){
    return Math.floor(((x*oddslist[index]-100)*bankroll*aggro)/(100*oddslist[index]-100))
    });

    for (i = 0; i < selections.length; i++){
        for (i = 0; i < indarray.length; i++){
            document.getElementById("indbets").innerHTML += (selections[i] + " - " + indarray[i] + "<br>")
        }
    }
             
}

function parlaySelector() {// not implemented //
    let parlaysize=document.getElementById("parlaysize").value

    if (parlaysize == 2) {
        parlayCalc2();
    } else {
        parlayCalc3();
    }
}

function Null() {// not implemented //
    count++;
    let newrow = '<input id="selection' +count+ '" placeholder="Selection"/>' +
          '<input id="prob' +count+ '" placeholder="Win %"/>' +
          '<input id="odds' +count+ '" placeholder="Odds Offered"/><br>';
    document.getElementById("pickform").append(newrow);
}