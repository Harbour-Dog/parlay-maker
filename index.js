let bankroll=document.getElementById("bankroll").value;
let aggro=document.getElementById("aggro").value;
let parlaysize=document.getElementById("parlaysize").value;

console.log(bankroll + "and" + aggro);
console.log(prob1 + "and" + odds1);

document.getElementById("calc").addEventListener("click", ()=>{kellyCalc1(), kellyCalc2(), kellyCalc3(), kellyCalc4(), kellyCalc5(), kellyCalc6(), kellyCalc7(), kellyCalc8(), kellyCalc9(), kellyCalc10(), kellyCalc11()});

function kellyCalc1() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob1=document.getElementById("prob1").value;
    let odds1=document.getElementById("odds1").value;
    let sel1=document.getElementById("selection1").value;
    let kelly1=(((prob1*odds1-100)*bankroll*aggro)/(100*odds1-100));
    document.getElementById("indbet1").value=kelly1;
    document.getElementById("sel1").value=sel1;                                                       
}
             
function kellyCalc2() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob2=document.getElementById("prob2").value;
    let odds2=document.getElementById("odds2").value;
    let sel2=document.getElementById("selection2").value;
    let kelly2=(((prob2*odds2-100)*bankroll*aggro)/(100*odds2-100));
    document.getElementById("indbet2").value=kelly2;
    document.getElementById("sel2").value=sel2;
}                                                    
                
function kellyCalc3() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob3=document.getElementById("prob3").value;
    let odds3=document.getElementById("odds3").value;
    let sel3=document.getElementById("selection3").value;
    let kelly3=(((prob3*odds3-100)*bankroll*aggro)/(100*odds3-100));
    document.getElementById("indbet3").value=kelly3;
    document.getElementById("sel3").value=sel3;                                                       
}
                
function kellyCalc4() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob4=document.getElementById("prob4").value;
    let odds4=document.getElementById("odds4").value;
    let sel4=document.getElementById("selection4").value;
    let kelly4=(((prob4*odds4-100)*bankroll*aggro)/(100*odds4-100));
    document.getElementById("indbet4").value=kelly4;
    document.getElementById("sel4").value=sel4;
}                                                    
               
function kellyCalc5() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob5=document.getElementById("prob5").value;
    let odds5=document.getElementById("odds5").value;
    let sel5=document.getElementById("selection5").value;
    let kelly5=(((prob5*odds5-100)*bankroll*aggro)/(100*odds5-100));
    document.getElementById("indbet5").value=kelly5;
    document.getElementById("sel5").value=sel5;                                                       
}
                
function kellyCalc6() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob6=document.getElementById("prob6").value;
    let odds6=document.getElementById("odds6").value;
    let sel6=document.getElementById("selection6").value;
    let kelly6=(((prob6*odds6-100)*bankroll*aggro)/(100*odds6-100));
    document.getElementById("indbet6").value=kelly6;
    document.getElementById("sel6").value=sel6;
}                                                    
                
function kellyCalc7() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob7=document.getElementById("prob7").value;
    let odds7=document.getElementById("odds7").value;
    let sel7=document.getElementById("selection7").value;
    let kelly7=(((prob7*odds7-100)*bankroll*aggro)/(100*odds7-100));
    document.getElementById("indbet7").value=kelly7;
    document.getElementById("sel7").value=sel7;                                                       
                    }
               
function kellyCalc8() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob8=document.getElementById("prob8").value;
    let odds8=document.getElementById("odds8").value;
    let sel8=document.getElementById("selection8").value;
    let kelly8=(((prob8*odds8-100)*bankroll*aggro)/(100*odds8-100));
    document.getElementById("indbet8").value=kelly8;
    document.getElementById("sel8").value=sel8;
}                                                    
                
function kellyCalc9() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob9=document.getElementById("prob9").value;
    let odds9=document.getElementById("odds9").value;
    let sel9=document.getElementById("selection9").value;
    let kelly9=(((prob9*odds9-100)*bankroll*aggro)/(100*odds9-100));
    document.getElementById("indbet9").value=kelly9;
    document.getElementById("sel9").value=sel9;
}                                                    
                
function kellyCalc10() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob10=document.getElementById("prob10").value;
    let odds10=document.getElementById("odds10").value;
    let sel10=document.getElementById("selection10").value;
    let kelly10=(((prob10*odds10-100)*bankroll*aggro)/(100*odds10-100));
    document.getElementById("indbet10").value=kelly10;
    document.getElementById("sel10").value=sel10;                                                       
}
                
function kellyCalc11() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob11=document.getElementById("prob11").value;
    let odds11=document.getElementById("odds11").value;
    let sel11=document.getElementById("selection11").value;
    let kelly11=(((prob11*odds11-100)*bankroll*aggro)/(100*odds11-100));
    document.getElementById("indbet11").value=kelly11;
    document.getElementById("sel11").value=sel11;
}                                                    


