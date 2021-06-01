let bankroll=parseFloat(document.getElementById("bankroll").value);
let aggro=document.getElementById("aggro").value;

console.log(bankroll);

document.getElementById("parlaybutton").addEventListener("click", ()=>{

    console.log(bankroll + " and " + aggro);

});

