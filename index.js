document.getElementById("calc").addEventListener("click", ()=>{kellyCalc1(), kellyCalc2(), kellyCalc3(), kellyCalc4(), kellyCalc5(), kellyCalc6(), kellyCalc7(), kellyCalc8(), kellyCalc9(), kellyCalc10(), kellyCalc11()});
document.getElementById("parlaybutton").addEventListener("click", parlayCalc2)

function kellyCalc1() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob1=document.getElementById("prob1").value;
    let odds1=document.getElementById("odds1").value;
    let sel1=document.getElementById("selection1").value;
    let kelly1=Math.round((((prob1*odds1-100)*bankroll*aggro)/(100*odds1-100)));

    if (kelly1 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet1").value=kelly1;
    document.getElementById("sel1").value=sel1;
    }
}
             
function kellyCalc2() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob2=document.getElementById("prob2").value;
    let odds2=document.getElementById("odds2").value;
    let sel2=document.getElementById("selection2").value;
    let kelly2=Math.round((((prob2*odds2-100)*bankroll*aggro)/(100*odds2-100)));

    if (kelly2 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet2").value=kelly2;
    document.getElementById("sel2").value=sel2;
    }           
}                                         
                
function kellyCalc3() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob3=document.getElementById("prob3").value;
    let odds3=document.getElementById("odds3").value;
    let sel3=document.getElementById("selection3").value;
    let kelly3=Math.round((((prob3*odds3-100)*bankroll*aggro)/(100*odds3-100)));

    if (kelly3 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet3").value=kelly3;
    document.getElementById("sel3").value=sel3;                                                 
    }   
}
                
function kellyCalc4() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob4=document.getElementById("prob4").value;
    let odds4=document.getElementById("odds4").value;
    let sel4=document.getElementById("selection4").value;
    let kelly4=Math.round((((prob4*odds4-100)*bankroll*aggro)/(100*odds4-100)));

    if (kelly4 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet4").value=kelly4;
    document.getElementById("sel4").value=sel4;
    }           
}                                         
               
function kellyCalc5() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob5=document.getElementById("prob5").value;
    let odds5=document.getElementById("odds5").value;
    let sel5=document.getElementById("selection5").value;
    let kelly5=Math.round((((prob5*odds5-100)*bankroll*aggro)/(100*odds5-100)));

    if (kelly5 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet5").value=kelly5;
    document.getElementById("sel5").value=sel5;
    }
}
                
function kellyCalc6() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob6=document.getElementById("prob6").value;
    let odds6=document.getElementById("odds6").value;
    let sel6=document.getElementById("selection6").value;
    let kelly6=Math.round((((prob6*odds6-100)*bankroll*aggro)/(100*odds6-100)));

    if (kelly6 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet6").value=kelly6;
    document.getElementById("sel6").value=sel6;
}           
}                                         
                
function kellyCalc7() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob7=document.getElementById("prob7").value;
    let odds7=document.getElementById("odds7").value;
    let sel7=document.getElementById("selection7").value;
    let kelly7=Math.round((((prob7*odds7-100)*bankroll*aggro)/(100*odds7-100)));

    if (kelly7 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet7").value=kelly7;
    document.getElementById("sel7").value=sel7;
    }
}
               
function kellyCalc8() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob8=document.getElementById("prob8").value;
    let odds8=document.getElementById("odds8").value;
    let sel8=document.getElementById("selection8").value;
    let kelly8=Math.round((((prob8*odds8-100)*bankroll*aggro)/(100*odds8-100)));

    if (kelly8 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet8").value=kelly8;
    document.getElementById("sel8").value=sel8;
}           
}                                         
                
function kellyCalc9() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob9=document.getElementById("prob9").value;
    let odds9=document.getElementById("odds9").value;
    let sel9=document.getElementById("selection9").value;
    let kelly9=Math.round((((prob9*odds9-100)*bankroll*aggro)/(100*odds9-100)));

    if (kelly9 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet9").value=kelly9;
    document.getElementById("sel9").value=sel9;
}           
}                                         
                
function kellyCalc10() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob10=document.getElementById("prob10").value;
    let odds10=document.getElementById("odds10").value;
    let sel10=document.getElementById("selection10").value;
    let kelly10=Math.round((((prob10*odds10-100)*bankroll*aggro)/(100*odds10-100)));

    if (kelly10 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet10").value=kelly10;
    document.getElementById("sel10").value=sel10;
}
}
                
function kellyCalc11() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let prob11=document.getElementById("prob11").value;
    let odds11=document.getElementById("odds11").value;
    let sel11=document.getElementById("selection11").value;
    let kelly11=Math.round((((prob11*odds11-100)*bankroll*aggro)/(100*odds11-100)));

    if (kelly11 == bankroll*aggro) {
        return
    } else {
    document.getElementById("indbet11").value=kelly11;
    document.getElementById("sel11").value=sel11;
}
}

function parlayCalc2() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let sel1=document.getElementById("sel1").value;
    let sel2=document.getElementById("sel2").value;
    let sel3=document.getElementById("sel3").value;
    let sel4=document.getElementById("sel4").value;
    let sel5=document.getElementById("sel5").value;
    let sel6=document.getElementById("sel6").value;
    let sel7=document.getElementById("sel7").value;
    let sel8=document.getElementById("sel8").value;
    let sel9=document.getElementById("sel9").value;
    let sel10=document.getElementById("sel10").value;
    let sel11=document.getElementById("sel11").value;
    let prob1=document.getElementById("prob1").value;
    let prob2=document.getElementById("prob2").value;
    let prob3=document.getElementById("prob3").value;
    let prob4=document.getElementById("prob4").value;
    let prob5=document.getElementById("prob5").value;
    let prob6=document.getElementById("prob6").value;
    let prob7=document.getElementById("prob7").value;
    let prob8=document.getElementById("prob8").value;
    let prob9=document.getElementById("prob9").value;
    let prob10=document.getElementById("prob10").value;
    let prob11=document.getElementById("prob11").value;
    let odds1=document.getElementById("odds1").value;
    let odds2=document.getElementById("odds2").value;
    let odds3=document.getElementById("odds3").value;
    let odds4=document.getElementById("odds4").value;
    let odds5=document.getElementById("odds5").value;
    let odds6=document.getElementById("odds6").value;
    let odds7=document.getElementById("odds7").value;
    let odds8=document.getElementById("odds8").value;
    let odds9=document.getElementById("odds9").value;
    let odds10=document.getElementById("odds10").value;
    let odds11=document.getElementById("odds11").value;
    let parodds12=(odds1*odds2);
    let parprob12=((prob1*prob2)/100);
    let parodds13=(odds1*odds3);
    let parprob13=((prob1*prob3)/100);
    let parodds23=(odds2*odds3);
    let parprob23=((prob2*prob3)/100);
    let parodds14=(odds1*odds4);
    let parprob14=((prob1*prob4)/100);
    let parodds24=(odds4*odds2);
    let parprob24=((prob4*prob2)/100);
    let parodds34=(odds4*odds3);
    let parprob34=((prob4*prob3)/100);
    let parodds15=(odds1*odds5);
    let parprob15=((prob1*prob5)/100);
    let parodds25=(odds2*odds5);
    let parprob25=((prob2*prob5)/100);
    let parodds35=(odds3*odds5);
    let parprob35=((prob3*prob5)/100);
    let parodds45=(odds4*odds5);
    let parprob45=((prob4*prob5)/100);
    let parodds16=(odds1*odds6);
    let parprob16=((prob1*prob6)/100);
    let parodds26=(odds2*odds6);
    let parprob26=((prob2*prob6)/100);
    let parodds36=(odds3*odds6);
    let parprob36=((prob3*prob6)/100);
    let parodds46=(odds4*odds6);
    let parprob46=((prob4*prob6)/100);
    let parodds56=(odds6*odds5);
    let parprob56=((prob6*prob5)/100);
    let parodds17=(odds1*odds7);
    let parprob17=((prob1*prob7)/100);
    let parodds27=(odds7*odds2);
    let parprob27=((prob7*prob2)/100);
    let parodds37=(odds7*odds3);
    let parprob37=((prob7*prob3)/100);
    let parodds47=(odds4*odds7);
    let parprob47=((prob4*prob7)/100);
    let parodds57=(odds5*odds7);
    let parprob57=((prob5*prob7)/100);
    let parodds67=(odds6*odds7);
    let parprob67=((prob6*prob7)/100);
    let parodds18=(odds1*odds8);
    let parprob18=((prob1*prob8)/100);
    let parodds28=(odds2*odds8);
    let parprob28=((prob2*prob8)/100);
    let parodds38=(odds3*odds8);
    let parprob38=((prob3*prob8)/100);
    let parodds48=(odds4*odds8);
    let parprob48=((prob4*prob8)/100);
    let parodds58=(odds5*odds8);
    let parprob58=((prob5*prob8)/100);
    let parodds68=(odds6*odds8);
    let parprob68=((prob6*prob8)/100);
    let parodds78=(odds7*odds8);
    let parprob78=((prob7*prob8)/100);
    let parodds19=(odds1*odds9);
    let parprob19=((prob1*prob9)/100);
    let parodds29=(odds2*odds9);
    let parprob29=((prob2*prob9)/100);
    let parodds39=(odds3*odds9);
    let parprob39=((prob3*prob9)/100);
    let parodds49=(odds4*odds9);
    let parprob49=((prob4*prob9)/100);
    let parodds59=(odds5*odds9);
    let parprob59=((prob5*prob9)/100);
    let parodds69=(odds6*odds9);
    let parprob69=((prob6*prob9)/100);
    let parodds79=(odds7*odds9);
    let parprob79=((prob7*prob9)/100);
    let parodds89=(odds8*odds9);
    let parprob89=((prob8*prob9)/100);
    let parodds110=(odds1*odds10);
    let parprob110=((prob1*prob10)/100);
    let parodds210=(odds2*odds10);
    let parprob210=((prob2*prob10)/100);
    let parodds310=(odds3*odds10);
    let parprob310=((prob3*prob10)/100);
    let parodds410=(odds4*odds10);
    let parprob410=((prob4*prob10)/100);
    let parodds510=(odds5*odds10);
    let parprob510=((prob5*prob10)/100);
    let parodds610=(odds6*odds10);
    let parprob610=((prob6*prob10)/100);
    let parodds710=(odds7*odds10);
    let parprob710=((prob7*prob10)/100);
    let parodds810=(odds8*odds10);
    let parprob810=((prob8*prob10)/100);
    let parodds910=(odds9*odds10);
    let parprob910=((prob9*prob10)/100);
    let parodds111=(odds1*odds11);
    let parprob111=((prob1*prob11)/100);
    let parodds211=(odds2*odds11);
    let parprob211=((prob2*prob11)/100);
    let parodds311=(odds3*odds11);
    let parprob311=((prob3*prob11)/100);
    let parodds411=(odds4*odds11);
    let parprob411=((prob4*prob11)/100);
    let parodds511=(odds5*odds11);
    let parprob511=((prob5*prob11)/100);
    let parodds611=(odds6*odds11);
    let parprob611=((prob6*prob11)/100);
    let parodds711=(odds7*odds11);
    let parprob711=((prob7*prob11)/100);
    let parodds811=(odds8*odds11);
    let parprob811=((prob8*prob11)/100);
    let parodds911=(odds9*odds11);
    let parprob911=((prob9*prob11)/100);
    let parodds1011=(odds10*odds11);
    let parprob1011=((prob10*prob11)/100);
    let parkelly12=Math.floor(((parprob12*parodds12-100)*bankroll*aggro)/(100*parodds12-100));
    let parkelly13=Math.floor(((parprob13*parodds13-100)*bankroll*aggro)/(100*parodds13-100));
    let parkelly23=Math.floor(((parprob23*parodds23-100)*bankroll*aggro)/(100*parodds23-100));
    let parkelly14=Math.floor(((parprob14*parodds14-100)*bankroll*aggro)/(100*parodds14-100));
    let parkelly24=Math.floor(((parprob24*parodds24-100)*bankroll*aggro)/(100*parodds24-100));
    let parkelly34=Math.floor(((parprob34*parodds34-100)*bankroll*aggro)/(100*parodds34-100));
    let parkelly15=Math.floor(((parprob15*parodds15-100)*bankroll*aggro)/(100*parodds15-100));
    let parkelly25=Math.floor(((parprob25*parodds25-100)*bankroll*aggro)/(100*parodds25-100));
    let parkelly35=Math.floor(((parprob35*parodds35-100)*bankroll*aggro)/(100*parodds35-100));
    let parkelly45=Math.floor(((parprob45*parodds45-100)*bankroll*aggro)/(100*parodds45-100));
    let parkelly16=Math.floor(((parprob16*parodds16-100)*bankroll*aggro)/(100*parodds16-100));
    let parkelly26=Math.floor(((parprob26*parodds26-100)*bankroll*aggro)/(100*parodds26-100));
    let parkelly36=Math.floor(((parprob36*parodds36-100)*bankroll*aggro)/(100*parodds36-100));
    let parkelly46=Math.floor(((parprob46*parodds46-100)*bankroll*aggro)/(100*parodds46-100));
    let parkelly56=Math.floor(((parprob56*parodds56-100)*bankroll*aggro)/(100*parodds56-100));
    let parkelly17=Math.floor(((parprob17*parodds17-100)*bankroll*aggro)/(100*parodds17-100));
    let parkelly27=Math.floor(((parprob27*parodds27-100)*bankroll*aggro)/(100*parodds27-100));
    let parkelly37=Math.floor(((parprob37*parodds37-100)*bankroll*aggro)/(100*parodds37-100));
    let parkelly47=Math.floor(((parprob47*parodds47-100)*bankroll*aggro)/(100*parodds47-100));
    let parkelly57=Math.floor(((parprob57*parodds57-100)*bankroll*aggro)/(100*parodds57-100));
    let parkelly67=Math.floor(((parprob67*parodds67-100)*bankroll*aggro)/(100*parodds67-100));
    let parkelly18=Math.floor(((parprob18*parodds18-100)*bankroll*aggro)/(100*parodds18-100));
    let parkelly28=Math.floor(((parprob28*parodds28-100)*bankroll*aggro)/(100*parodds28-100));
    let parkelly38=Math.floor(((parprob38*parodds38-100)*bankroll*aggro)/(100*parodds38-100));
    let parkelly48=Math.floor(((parprob48*parodds48-100)*bankroll*aggro)/(100*parodds48-100));
    let parkelly58=Math.floor(((parprob58*parodds58-100)*bankroll*aggro)/(100*parodds58-100));
    let parkelly68=Math.floor(((parprob68*parodds68-100)*bankroll*aggro)/(100*parodds68-100));
    let parkelly78=Math.floor(((parprob78*parodds78-100)*bankroll*aggro)/(100*parodds78-100));
    let parkelly19=Math.floor(((parprob19*parodds19-100)*bankroll*aggro)/(100*parodds19-100));
    let parkelly29=Math.floor(((parprob29*parodds29-100)*bankroll*aggro)/(100*parodds29-100));
    let parkelly39=Math.floor(((parprob39*parodds39-100)*bankroll*aggro)/(100*parodds39-100));
    let parkelly49=Math.floor(((parprob49*parodds49-100)*bankroll*aggro)/(100*parodds49-100));
    let parkelly59=Math.floor(((parprob59*parodds59-100)*bankroll*aggro)/(100*parodds59-100));
    let parkelly69=Math.floor(((parprob69*parodds69-100)*bankroll*aggro)/(100*parodds69-100));
    let parkelly79=Math.floor(((parprob79*parodds79-100)*bankroll*aggro)/(100*parodds79-100));
    let parkelly89=Math.floor(((parprob89*parodds89-100)*bankroll*aggro)/(100*parodds89-100));
    let parkelly110=Math.floor(((parprob110*parodds110-100)*bankroll*aggro)/(100*parodds110-100));
    let parkelly210=Math.floor(((parprob210*parodds210-100)*bankroll*aggro)/(100*parodds210-100));
    let parkelly310=Math.floor(((parprob310*parodds310-100)*bankroll*aggro)/(100*parodds310-100));
    let parkelly410=Math.floor(((parprob410*parodds410-100)*bankroll*aggro)/(100*parodds410-100));
    let parkelly510=Math.floor(((parprob510*parodds510-100)*bankroll*aggro)/(100*parodds510-100));
    let parkelly610=Math.floor(((parprob610*parodds610-100)*bankroll*aggro)/(100*parodds610-100));
    let parkelly710=Math.floor(((parprob710*parodds710-100)*bankroll*aggro)/(100*parodds710-100));
    let parkelly810=Math.floor(((parprob810*parodds810-100)*bankroll*aggro)/(100*parodds810-100));
    let parkelly910=Math.floor(((parprob910*parodds910-100)*bankroll*aggro)/(100*parodds910-100));
    let parkelly111=Math.floor(((parprob111*parodds111-100)*bankroll*aggro)/(100*parodds111-100));
    let parkelly211=Math.floor(((parprob211*parodds211-100)*bankroll*aggro)/(100*parodds211-100));
    let parkelly311=Math.floor(((parprob311*parodds311-100)*bankroll*aggro)/(100*parodds311-100));
    let parkelly411=Math.floor(((parprob411*parodds411-100)*bankroll*aggro)/(100*parodds411-100));
    let parkelly511=Math.floor(((parprob511*parodds511-100)*bankroll*aggro)/(100*parodds511-100));
    let parkelly611=Math.floor(((parprob611*parodds611-100)*bankroll*aggro)/(100*parodds611-100));
    let parkelly711=Math.floor(((parprob711*parodds711-100)*bankroll*aggro)/(100*parodds711-100));
    let parkelly811=Math.floor(((parprob811*parodds811-100)*bankroll*aggro)/(100*parodds811-100));
    let parkelly911=Math.floor(((parprob911*parodds911-100)*bankroll*aggro)/(100*parodds911-100));
    let parkelly1011=Math.floor(((parprob1011*parodds1011-100)*bankroll*aggro)/(100*parodds1011-100));

    if (prob3 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12)
    } else if (prob4 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23)
    } else if (prob5 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34)
    } else if (prob6 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45)
    } else if (prob7 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56)
    } else if (prob8 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67)
    } else if (prob9 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78)
    } else if (prob10 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78 + "<br>" + sel1 + " - " + sel9 + " = " + parkelly19 + "<br>" + sel2 + " - " + sel9 + " = " + parkelly29 + "<br>" +
        sel3 + " - " + sel9 + " = " + parkelly39 + "<br>" + sel4 + " - " + sel9 + " = " + parkelly49 + "<br>" + sel5 + " - " + sel9 + " = " + parkelly59 + "<br>" +
        sel6 + " - " + sel9 + " = " + parkelly69 + "<br>" + sel7 + " - " + sel9 + " = " + parkelly79 + "<br>" + sel8 + " - " + sel9 + " = " + parkelly89)
    } else if (prob11 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78 + "<br>" + sel1 + " - " + sel9 + " = " + parkelly19 + "<br>" + sel2 + " - " + sel9 + " = " + parkelly29 + "<br>" +
        sel3 + " - " + sel9 + " = " + parkelly39 + "<br>" + sel4 + " - " + sel9 + " = " + parkelly49 + "<br>" + sel5 + " - " + sel9 + " = " + parkelly59 + "<br>" +
        sel6 + " - " + sel9 + " = " + parkelly69 + "<br>" + sel7 + " - " + sel9 + " = " + parkelly79 + "<br>" + sel8 + " - " + sel9 + " = " + parkelly89 + "<br>" +
        sel1 + " - " + sel10 + " = " + parkelly110 + "<br>" + sel2 + " - " + sel10 + " = " + parkelly210 + "<br>" + sel3 + " - " + sel10 + " = " + parkelly310 + "<br>" +
        sel4 + " - " + sel10 + " = " + parkelly410 + "<br>" + sel5 + " - " + sel10 + " = " + parkelly510 + "<br>" + sel6 + " - " + sel10 + " = " + parkelly610 + "<br>" +
        sel7 + " - " + sel10 + " = " + parkelly710 + "<br>" + sel8 + " - " + sel10 + " = " + parkelly810 + "<br>" + sel9 + " - " + sel10 + " = " + parkelly910)
    } else {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78 + "<br>" + sel1 + " - " + sel9 + " = " + parkelly19 + "<br>" + sel2 + " - " + sel9 + " = " + parkelly29 + "<br>" +
        sel3 + " - " + sel9 + " = " + parkelly39 + "<br>" + sel4 + " - " + sel9 + " = " + parkelly49 + "<br>" + sel5 + " - " + sel9 + " = " + parkelly59 + "<br>" +
        sel6 + " - " + sel9 + " = " + parkelly69 + "<br>" + sel7 + " - " + sel9 + " = " + parkelly79 + "<br>" + sel8 + " - " + sel9 + " = " + parkelly89 + "<br>" +
        sel1 + " - " + sel10 + " = " + parkelly110 + "<br>" + sel2 + " - " + sel10 + " = " + parkelly210 + "<br>" + sel3 + " - " + sel10 + " = " + parkelly310 + "<br>" +
        sel4 + " - " + sel10 + " = " + parkelly410 + "<br>" + sel5 + " - " + sel10 + " = " + parkelly510 + "<br>" + sel6 + " - " + sel10 + " = " + parkelly610 + "<br>" +
        sel7 + " - " + sel10 + " = " + parkelly710 + "<br>" + sel8 + " - " + sel10 + " = " + parkelly810 + "<br>" + sel9 + " - " + sel10 + " = " + parkelly910 + "<br>" +
        sel1 + " - " + sel11 + " = " + parkelly111 + "<br>" + sel2 + " - " + sel11 + " = " + parkelly211 + "<br>" + sel3 + " - " + sel11 + " = " + parkelly311 + "<br>" +
        sel4 + " - " + sel11 + " = " + parkelly411 + "<br>" + sel5 + " - " + sel11 + " = " + parkelly511 + "<br>" + sel6 + " - " + sel11 + " = " + parkelly611 + "<br>" +
        sel7 + " - " + sel11 + " = " + parkelly711 + "<br>" + sel8 + " - " + sel11 + " = " + parkelly811 + "<br>" + sel9 + " - " + sel11 + " = " + parkelly911 + "<br>" +
        sel10 + " - " + sel11 + " = " + parkelly1011)
    }
}

function parlayCalc3() {
    let bankroll=document.getElementById("bankroll").value;
    let aggro=document.getElementById("aggro").value;
    let sel1=document.getElementById("sel1").value;
    let sel2=document.getElementById("sel2").value;
    let sel3=document.getElementById("sel3").value;
    let sel4=document.getElementById("sel4").value;
    let sel5=document.getElementById("sel5").value;
    let sel6=document.getElementById("sel6").value;
    let sel7=document.getElementById("sel7").value;
    let sel8=document.getElementById("sel8").value;
    let sel9=document.getElementById("sel9").value;
    let sel10=document.getElementById("sel10").value;
    let sel11=document.getElementById("sel11").value;
    let prob1=document.getElementById("prob1").value;
    let prob2=document.getElementById("prob2").value;
    let prob3=document.getElementById("prob3").value;
    let prob4=document.getElementById("prob4").value;
    let prob5=document.getElementById("prob5").value;
    let prob6=document.getElementById("prob6").value;
    let prob7=document.getElementById("prob7").value;
    let prob8=document.getElementById("prob8").value;
    let prob9=document.getElementById("prob9").value;
    let prob10=document.getElementById("prob10").value;
    let prob11=document.getElementById("prob11").value;
    let odds1=document.getElementById("odds1").value;
    let odds2=document.getElementById("odds2").value;
    let odds3=document.getElementById("odds3").value;
    let odds4=document.getElementById("odds4").value;
    let odds5=document.getElementById("odds5").value;
    let odds6=document.getElementById("odds6").value;
    let odds7=document.getElementById("odds7").value;
    let odds8=document.getElementById("odds8").value;
    let odds9=document.getElementById("odds9").value;
    let odds10=document.getElementById("odds10").value;
    let odds11=document.getElementById("odds11").value;
    let parodds123=(odds1*odds2*odds3);
    let parprob123=((prob1*prob2*prob3)/10000);
    let parodds124=(odds1*odds2*odds4);
    let parprob124=((prob1*prob2*prob4)/10000);
    let parodds234=(odds4*odds2*odds3);
    let parprob234=((prob4*prob2*prob3)/10000);
    let parodds125=(odds1*odds2*odds5);
    let parprob125=((prob1*prob2*prob5)/10000);
    let parodds135=(odds1*odds5*odds3);
    let parprob135=((prob1*prob5*prob3)/10000);
    let parodds145=(odds1*odds5*odds4);
    let parprob145=((prob1*prob5*prob4)/10000);
    let parodds235=(odds5*odds2*odds3);
    let parprob235=((prob5*prob2*prob3)/10000);
    let parodds245=(odds4*odds2*odds5);
    let parprob245=((prob4*prob2*prob5)/10000);
    let parodds345=(odds5*odds4*odds3);
    let parprob345=((prob5*prob4*prob3)/10000);
    let parodds126=(odds1*odds2*odds6);
    let parprob126=((prob1*prob2*prob6)/10000);
    let parodds136=(odds1*odds6*odds3);
    let parprob136=((prob1*prob6*prob3)/10000);
    let parodds146=(odds1*odds4*odds6);
    let parprob146=((prob1*prob4*prob6)/10000);
    let parodds156=(odds1*odds5*odds6);
    let parprob156=((prob1*prob5*prob6)/10000);
    let parodds236=(odds2*odds3*odds6);
    let parprob236=((prob2*prob3*prob6)/10000);
    let parodds246=(odds4*odds2*odds6);
    let parprob246=((prob4*prob2*prob6)/10000);
    let parodds256=(odds6*odds2*odds5);
    let parprob256=((prob6*prob2*prob5)/10000);
    let parodds346=(odds4*odds6*odds3);
    let parprob346=((prob4*prob6*prob3)/10000);
    let parodds356=(odds3*odds5*odds6);
    let parprob356=((prob3*prob5*prob6)/10000);
    let parodds456=(odds4*odds5*odds6);
    let parprob456=((prob4*prob5*prob6)/10000);
    let parodds127=(odds1*odds2*odds7);
    let parprob127=((prob1*prob2*prob7)/10000);
    let parodds137=(odds1*odds7*odds3);
    let parprob137=((prob1*prob7*prob3)/10000);
    let parodds147=(odds1*odds7*odds4);
    let parprob147=((prob1*prob7*prob4)/10000);
    let parodds157=(odds5*odds1*odds7);
    let parprob157=((prob5*prob1*prob7)/10000);
    let parodds167=(odds1*odds6*odds7);
    let parprob167=((prob1*prob6*prob7)/10000);
    let parodds237=(odds2*odds7*odds3);
    let parprob237=((prob2*prob7*prob3)/10000);
    let parodds247=(odds4*odds2*odds7);
    let parprob247=((prob4*prob2*prob7)/10000);
    let parodds257=(odds2*odds5*odds7);
    let parprob257=((prob2*prob5*prob7)/10000);
    let parodds267=(odds2*odds6*odds7);
    let parprob267=((prob2*prob6*prob7)/10000);
    let parodds347=(odds3*odds4*odds7);
    let parprob347=((prob3*prob4*prob7)/10000);
    let parodds357=(odds5*odds3*odds7);
    let parprob357=((prob5*prob3*prob7)/10000);
    let parodds367=(odds3*odds7*odds6);
    let parprob367=((prob3*prob7*prob6)/10000);
    let parodds457=(odds4*odds7*odds5);
    let parprob457=((prob4*prob7*prob5)/10000);
    let parodds467=(odds4*odds6*odds7);
    let parprob467=((prob4*prob6*prob7)/10000);
    let parodds567=(odds5*odds6*odds7);
    let parprob567=((prob5*prob6*prob7)/10000);
    let parodds128=(odds1*odds2*odds8);
    let parprob128=((prob1*prob2*prob8)/10000);
    let parodds138=(odds1*odds3*odds8);
    let parprob138=((prob1*prob3*prob8)/10000);
    let parodds148=(odds1*odds4*odds8);
    let parprob148=((prob1*prob4*prob8)/10000);
    let parodds158=(odds1*odds5*odds8);
    let parprob158=((prob1*prob5*prob8)/10000);
    let parodds168=(odds1*odds6*odds8);
    let parprob168=((prob1*prob6*prob8)/10000);
    let parodds178=(odds1*odds7*odds8);
    let parprob178=((prob1*prob7*prob8)/10000);
    let parodds238=(odds2*odds8*odds3);
    let parprob238=((prob2*prob8*prob3)/10000);
    let parodds248=(odds4*odds2*odds8);
    let parprob248=((prob4*prob2*prob8)/10000);
    let parodds258=(odds2*odds5*odds8);
    let parprob258=((prob2*prob5*prob8)/10000);
    let parodds268=(odds2*odds8*odds6);
    let parprob268=((prob2*prob8*prob6)/10000);
    let parodds278=(odds2*odds7*odds8);
    let parprob278=((prob2*prob7*prob8)/10000);
    let parodds348=(odds4*odds3*odds8);
    let parprob348=((prob4*prob3*prob8)/10000);
    let parodds358=(odds3*odds5*odds8);
    let parprob358=((prob3*prob5*prob8)/10000);
    let parodds368=(odds6*odds3*odds8);
    let parprob368=((prob6*prob3*prob8)/10000);
    let parodds378=(odds7*odds8*odds3);
    let parprob378=((prob7*prob8*prob3)/10000);
    let parodds458=(odds4*odds5*odds8);
    let parprob458=((prob4*prob5*prob8)/10000);
    let parodds468=(odds4*odds8*odds6);
    let parprob468=((prob4*prob8*prob6)/10000);
    let parodds478=(odds4*odds8*odds7);
    let parprob478=((prob4*prob8*prob7)/10000);
    let parodds568=(odds5*odds6*odds8);
    let parprob568=((prob5*prob6*prob8)/10000);
    let parodds578=(odds5*odds7*odds8);
    let parprob578=((prob5*prob7*prob8)/10000);
    let parodds678=(odds6*odds8*odds7);
    let parprob678=((prob6*prob8*prob7)/10000);
    let parodds129=(odds1*odds2*odds9);
    let parprob129=((prob1*prob2*prob9)/10000);
    let parodds139=(odds1*odds9*odds3);
    let parprob139=((prob1*prob9*prob3)/10000);
    let parodds149=(odds4*odds1*odds9);
    let parprob149=((prob4*prob1*prob9)/10000);
    let parodds159=(odds1*odds5*odds9);
    let parprob159=((prob1*prob5*prob9)/10000);
    let parodds169=(odds1*odds6*odds9);
    let parprob169=((prob1*prob6*prob9)/10000);
    let parodds179=(odds1*odds9*odds7);
    let parprob179=((prob1*prob9*prob7)/10000);
    let parodds189=(odds1*odds8*odds9);
    let parprob189=((prob1*prob8*prob9)/10000);
    let parodds239=(odds3*odds2*odds9);
    let parprob239=((prob3*prob2*prob9)/10000);
    let parodds249=(odds4*odds2*odds9);
    let parprob249=((prob4*prob2*prob9)/10000);
    let parodds259=(odds5*odds2*odds9);
    let parprob259=((prob5*prob2*prob9)/10000);
    let parodds269=(odds6*odds2*odds9);
    let parprob269=((prob6*prob2*prob9)/10000);
    let parodds279=(odds7*odds2*odds9);
    let parprob279=((prob7*prob2*prob9)/10000);
    let parodds289=(odds8*odds2*odds9);
    let parprob289=((prob8*prob2*prob9)/10000);
    let parodds349=(odds4*odds9*odds3);
    let parprob349=((prob4*prob9*prob3)/10000);
    let parodds359=(odds3*odds5*odds9);
    let parprob359=((prob3*prob5*prob9)/10000);
    let parodds369=(odds6*odds9*odds3);
    let parprob369=((prob6*prob9*prob3)/10000);
    let parodds379=(odds3*odds7*odds9);
    let parprob379=((prob3*prob7*prob9)/10000);
    let parodds389=(odds8*odds9*odds3);
    let parprob389=((prob8*prob9*prob3)/10000);
    let parodds459=(odds4*odds5*odds9);
    let parprob459=((prob4*prob5*prob9)/10000);
    let parodds469=(odds4*odds6*odds9);
    let parprob469=((prob4*prob6*prob9)/10000);
    let parodds479=(odds7*odds4*odds9);
    let parprob479=((prob7*prob4*prob9)/10000);
    let parodds489=(odds4*odds8*odds9);
    let parprob489=((prob4*prob8*prob9)/10000);
    let parodds569=(odds5*odds9*odds6);
    let parprob569=((prob5*prob9*prob6)/10000);
    let parodds579=(odds5*odds7*odds9);
    let parprob579=((prob5*prob7*prob9)/10000);
    let parodds589=(odds8*odds9*odds5);
    let parprob589=((prob8*prob9*prob5)/10000);
    let parodds679=(odds7*odds6*odds9);
    let parprob679=((prob7*prob6*prob9)/10000);
    let parodds689=(odds8*odds9*odds6);
    let parprob689=((prob8*prob9*prob6)/10000);
    let parodds789=(odds7*odds8*odds9);
    let parprob789=((prob7*prob8*prob9)/10000);
    let parodds1210=(odds1*odds2*odds10);
    let parprob1210=((prob1*prob2*prob10)/10000);
    let parodds1310=(odds1*odds10*odds3);
    let parprob1310=((prob1*prob10*prob3)/10000);
    let parodds1410=(odds1*odds10*odds4);
    let parprob1410=((prob1*prob10*prob4)/10000);
    let parodds1510=(odds5*odds1*odds10);
    let parprob1510=((prob5*prob1*prob10)/10000);
    let parodds1610=(odds1*odds6*odds10);
    let parprob1610=((prob1*prob6*prob10)/10000);
    let parodds1710=(odds1*odds7*odds10);
    let parprob1710=((prob1*prob7*prob10)/10000);
    let parodds1810=(odds1*odds8*odds10);
    let parprob1810=((prob1*prob8*prob10)/10000);
    let parodds1910=(odds1*odds9*odds10);
    let parprob1910=((prob1*prob9*prob10)/10000);
    let parodds2310=(odds2*odds3*odds10);
    let parprob2310=((prob2*prob3*prob10)/10000);
    let parodds2410=(odds2*odds4*odds10);
    let parprob2410=((prob2*prob4*prob10)/10000);
    let parodds2510=(odds5*odds2*odds10);
    let parprob2510=((prob5*prob2*prob10)/10000);
    let parodds2610=(odds2*odds10*odds6);
    let parprob2610=((prob2*prob10*prob6)/10000);
    let parodds2710=(odds2*odds7*odds10);
    let parprob2710=((prob2*prob7*prob10)/10000);
    let parodds2810=(odds2*odds8*odds10);
    let parprob2810=((prob2*prob8*prob10)/10000);
    let parodds2910=(odds2*odds9*odds10);
    let parprob2910=((prob2*prob9*prob10)/10000);
    let parodds3410=(odds3*odds4*odds10);
    let parprob3410=((prob3*prob4*prob10)/10000);
    let parodds3510=(odds5*odds3*odds10);
    let parprob3510=((prob5*prob3*prob10)/10000);
    let parodds3610=(odds3*odds6*odds10);
    let parprob3610=((prob3*prob6*prob10)/10000);
    let parodds3710=(odds3*odds7*odds10);
    let parprob3710=((prob3*prob7*prob10)/10000);
    let parodds3810=(odds3*odds10*odds8);
    let parprob3810=((prob3*prob10*prob8)/10000);
    let parodds3910=(odds3*odds9*odds10);
    let parprob3910=((prob3*prob9*prob10)/10000);
    let parodds4510=(odds4*odds5*odds10);
    let parprob4510=((prob4*prob5*prob10)/10000);
    let parodds4610=(odds4*odds6*odds10);
    let parprob4610=((prob4*prob6*prob10)/10000);
    let parodds4710=(odds4*odds7*odds10);
    let parprob4710=((prob4*prob7*prob10)/10000);
    let parodds4810=(odds4*odds8*odds10);
    let parprob4810=((prob4*prob8*prob10)/10000);
    let parodds4910=(odds4*odds9*odds10);
    let parprob4910=((prob4*prob9*prob10)/10000);
    let parodds5610=(odds5*odds6*odds10);
    let parprob5610=((prob5*prob6*prob10)/10000);
    let parodds5710=(odds7*odds5*odds10);
    let parprob5710=((prob7*prob5*prob10)/10000);
    let parodds5810=(odds5*odds10*odds8);
    let parprob5810=((prob5*prob10*prob8)/10000);
    let parodds5910=(odds5*odds9*odds10);
    let parprob5910=((prob5*prob9*prob10)/10000);
    let parodds6710=(odds6*odds7*odds10);
    let parprob6710=((prob6*prob7*prob10)/10000);
    let parodds6810=(odds10*odds8*odds6);
    let parprob6810=((prob10*prob8*prob6)/10000);
    let parodds6910=(odds6*odds9*odds10);
    let parprob6910=((prob6*prob9*prob10)/10000);
    let parodds7810=(odds7*odds10*odds8);
    let parprob7810=((prob7*prob10*prob8)/10000);
    let parodds7910=(odds9*odds7*odds10);
    let parprob7910=((prob9*prob7*prob10)/10000);
    let parodds8910=(odds9*odds8*odds10);
    let parprob8910=((prob9*prob8*prob10)/10000);
    let parodds1211=(odds1*odds2*odds11);
    let parprob1211=((prob1*prob2*prob11)/10000);
    let parodds1311=(odds1*odds11*odds3);
    let parprob1311=((prob1*prob11*prob3)/10000);
    let parodds1411=(odds4*odds1*odds11);
    let parprob1411=((prob4*prob1*prob11)/10000);
    let parodds1511=(odds1*odds5*odds11);
    let parprob1511=((prob1*prob5*prob11)/10000);
    let parodds1611=(odds1*odds6*odds11);
    let parprob1611=((prob1*prob6*prob11)/10000);
    let parodds1711=(odds1*odds11*odds7);
    let parprob1711=((prob1*prob11*prob7)/10000);
    let parodds1811=(odds1*odds8*odds11);
    let parprob1811=((prob1*prob8*prob11)/10000);
    let parodds1911=(odds1*odds11*odds9);
    let parprob1911=((prob1*prob11*prob9)/10000);
    let parodds11011=(odds1*odds10*odds11);
    let parprob11011=((prob1*prob10*prob11)/10000);
    let parodds2311=(odds2*odds3*odds11);
    let parprob2311=((prob2*prob3*prob11)/10000);
    let parodds2411=(odds2*odds4*odds11);
    let parprob2411=((prob2*prob4*prob11)/10000);
    let parodds2511=(odds2*odds5*odds11);
    let parprob2511=((prob2*prob5*prob11)/10000);
    let parodds2611=(odds2*odds6*odds11);
    let parprob2611=((prob2*prob6*prob11)/10000);
    let parodds2711=(odds7*odds2*odds11);
    let parprob2711=((prob7*prob2*prob11)/10000);
    let parodds2811=(odds2*odds11*odds8);
    let parprob2811=((prob2*prob11*prob8)/10000);
    let parodds2911=(odds2*odds9*odds11);
    let parprob2911=((prob2*prob9*prob11)/10000);
    let parodds21011=(odds2*odds11*odds10);
    let parprob21011=((prob2*prob11*prob10)/10000);
    let parodds3411=(odds3*odds4*odds11);
    let parprob3411=((prob3*prob4*prob11)/10000);
    let parodds3511=(odds3*odds5*odds11);
    let parprob3511=((prob3*prob5*prob11)/10000);
    let parodds3611=(odds6*odds3*odds11);
    let parprob3611=((prob6*prob3*prob11)/10000);
    let parodds3711=(odds3*odds7*odds11);
    let parprob3711=((prob3*prob7*prob11)/10000);
    let parodds3811=(odds3*odds8*odds11);
    let parprob3811=((prob3*prob8*prob11)/10000);
    let parodds3911=(odds3*odds11*odds9);
    let parprob3911=((prob3*prob11*prob9)/10000);
    let parodds31011=(odds3*odds11*odds10);
    let parprob31011=((prob3*prob11*prob10)/10000);
    let parodds4511=(odds4*odds5*odds11);
    let parprob4511=((prob4*prob5*prob11)/10000);
    let parodds4611=(odds4*odds6*odds11);
    let parprob4611=((prob4*prob6*prob11)/10000);
    let parodds4711=(odds4*odds7*odds11);
    let parprob4711=((prob4*prob7*prob11)/10000);
    let parodds4811=(odds4*odds8*odds11);
    let parprob4811=((prob4*prob8*prob11)/10000);
    let parodds4911=(odds4*odds9*odds11);
    let parprob4911=((prob4*prob9*prob11)/10000);
    let parodds41011=(odds4*odds10*odds11);
    let parprob41011=((prob4*prob10*prob11)/10000);
    let parodds5611=(odds5*odds6*odds11);
    let parprob5611=((prob5*prob6*prob11)/10000);
    let parodds5711=(odds7*odds5*odds11);
    let parprob5711=((prob7*prob5*prob11)/10000);
    let parodds5811=(odds5*odds11*odds8);
    let parprob5811=((prob5*prob11*prob8)/10000);
    let parodds5911=(odds5*odds9*odds11);
    let parprob5911=((prob5*prob9*prob11)/10000);
    let parodds51011=(odds5*odds10*odds11);
    let parprob51011=((prob5*prob10*prob11)/10000);
    let parodds6711=(odds6*odds7*odds11);
    let parprob6711=((prob6*prob7*prob11)/10000);
    let parodds6811=(odds11*odds8*odds6);
    let parprob6811=((prob11*prob8*prob6)/10000);
    let parodds6911=(odds6*odds9*odds11);
    let parprob6911=((prob6*prob9*prob11)/10000);
    let parodds61011=(odds6*odds10*odds11);
    let parprob61011=((prob6*prob10*prob11)/10000);
    let parodds7811=(odds7*odds11*odds8);
    let parprob7811=((prob7*prob11*prob8)/10000);
    let parodds7911=(odds9*odds7*odds11);
    let parprob7911=((prob9*prob7*prob11)/10000);
    let parodds71011=(odds10*odds7*odds11);
    let parprob71011=((prob10*prob7*prob11)/10000);
    let parodds8911=(odds9*odds8*odds11);
    let parprob8911=((prob9*prob8*prob11)/10000);
    let parodds81011=(odds8*odds10*odds11);
    let parprob81011=((prob8*prob10*prob11)/10000);
    let parodds91011=(odds9*odds11*odds10);
    let parprob91011=((prob9*prob11*prob10)/10000);
    let parkelly123=Math.floor(((parprob123*parodds123-100)*bankroll*aggro)/(100*parodds123-100));
    let parkelly124=Math.floor(((parprob124*parodds124-100)*bankroll*aggro)/(100*parodds124-100));
    let parkelly134=Math.floor(((parprob134*parodds134-100)*bankroll*aggro)/(100*parodds134-100));
    let parkelly234=Math.floor(((parprob234*parodds234-100)*bankroll*aggro)/(100*parodds234-100));
    let parkelly125=Math.floor(((parprob125*parodds125-100)*bankroll*aggro)/(100*parodds125-100));
    let parkelly135=Math.floor(((parprob135*parodds135-100)*bankroll*aggro)/(100*parodds135-100));
    let parkelly145=Math.floor(((parprob145*parodds145-100)*bankroll*aggro)/(100*parodds145-100));
    let parkelly235=Math.floor(((parprob235*parodds235-100)*bankroll*aggro)/(100*parodds235-100));
    let parkelly245=Math.floor(((parprob245*parodds245-100)*bankroll*aggro)/(100*parodds245-100));
    let parkelly345=Math.floor(((parprob345*parodds345-100)*bankroll*aggro)/(100*parodds345-100));
    let parkelly126=Math.floor(((parprob126*parodds126-100)*bankroll*aggro)/(100*parodds126-100));
    let parkelly136=Math.floor(((parprob136*parodds136-100)*bankroll*aggro)/(100*parodds136-100));
    let parkelly146=Math.floor(((parprob146*parodds146-100)*bankroll*aggro)/(100*parodds146-100));
    let parkelly156=Math.floor(((parprob156*parodds156-100)*bankroll*aggro)/(100*parodds156-100));
    let parkelly236=Math.floor(((parprob236*parodds236-100)*bankroll*aggro)/(100*parodds236-100));
    let parkelly246=Math.floor(((parprob246*parodds246-100)*bankroll*aggro)/(100*parodds246-100));
    let parkelly256=Math.floor(((parprob256*parodds256-100)*bankroll*aggro)/(100*parodds256-100));
    let parkelly346=Math.floor(((parprob346*parodds346-100)*bankroll*aggro)/(100*parodds346-100));
    let parkelly356=Math.floor(((parprob356*parodds356-100)*bankroll*aggro)/(100*parodds356-100));
    let parkelly456=Math.floor(((parprob456*parodds456-100)*bankroll*aggro)/(100*parodds456-100));
    let parkelly127=Math.floor(((parprob127*parodds127-100)*bankroll*aggro)/(100*parodds127-100));
    let parkelly137=Math.floor(((parprob137*parodds137-100)*bankroll*aggro)/(100*parodds137-100));
    let parkelly147=Math.floor(((parprob147*parodds147-100)*bankroll*aggro)/(100*parodds147-100));
    let parkelly157=Math.floor(((parprob157*parodds157-100)*bankroll*aggro)/(100*parodds157-100));
    let parkelly167=Math.floor(((parprob167*parodds167-100)*bankroll*aggro)/(100*parodds167-100));
    let parkelly237=Math.floor(((parprob237*parodds237-100)*bankroll*aggro)/(100*parodds237-100));
    let parkelly247=Math.floor(((parprob247*parodds247-100)*bankroll*aggro)/(100*parodds247-100));
    let parkelly257=Math.floor(((parprob257*parodds257-100)*bankroll*aggro)/(100*parodds257-100));
    let parkelly267=Math.floor(((parprob267*parodds267-100)*bankroll*aggro)/(100*parodds267-100));
    let parkelly347=Math.floor(((parprob347*parodds347-100)*bankroll*aggro)/(100*parodds347-100));
    let parkelly357=Math.floor(((parprob357*parodds357-100)*bankroll*aggro)/(100*parodds357-100));
    let parkelly367=Math.floor(((parprob367*parodds367-100)*bankroll*aggro)/(100*parodds367-100));
    let parkelly457=Math.floor(((parprob457*parodds457-100)*bankroll*aggro)/(100*parodds457-100));
    let parkelly467=Math.floor(((parprob467*parodds467-100)*bankroll*aggro)/(100*parodds467-100));
    let parkelly567=Math.floor(((parprob567*parodds567-100)*bankroll*aggro)/(100*parodds567-100));
    let parkelly128=Math.floor(((parprob128*parodds128-100)*bankroll*aggro)/(100*parodds128-100));
    let parkelly138=Math.floor(((parprob138*parodds138-100)*bankroll*aggro)/(100*parodds138-100));
    let parkelly148=Math.floor(((parprob148*parodds148-100)*bankroll*aggro)/(100*parodds148-100));
    let parkelly158=Math.floor(((parprob158*parodds158-100)*bankroll*aggro)/(100*parodds158-100));
    let parkelly168=Math.floor(((parprob168*parodds168-100)*bankroll*aggro)/(100*parodds168-100));
    let parkelly178=Math.floor(((parprob178*parodds178-100)*bankroll*aggro)/(100*parodds178-100));
    let parkelly238=Math.floor(((parprob238*parodds238-100)*bankroll*aggro)/(100*parodds238-100));
    let parkelly248=Math.floor(((parprob248*parodds248-100)*bankroll*aggro)/(100*parodds248-100));
    let parkelly258=Math.floor(((parprob258*parodds258-100)*bankroll*aggro)/(100*parodds258-100));
    let parkelly268=Math.floor(((parprob268*parodds268-100)*bankroll*aggro)/(100*parodds268-100));
    let parkelly278=Math.floor(((parprob278*parodds278-100)*bankroll*aggro)/(100*parodds278-100));
    let parkelly348=Math.floor(((parprob348*parodds348-100)*bankroll*aggro)/(100*parodds348-100));
    let parkelly358=Math.floor(((parprob358*parodds358-100)*bankroll*aggro)/(100*parodds358-100));
    let parkelly368=Math.floor(((parprob368*parodds368-100)*bankroll*aggro)/(100*parodds368-100));
    let parkelly378=Math.floor(((parprob378*parodds378-100)*bankroll*aggro)/(100*parodds378-100));
    let parkelly458=Math.floor(((parprob458*parodds458-100)*bankroll*aggro)/(100*parodds458-100));
    let parkelly468=Math.floor(((parprob468*parodds468-100)*bankroll*aggro)/(100*parodds468-100));
    let parkelly478=Math.floor(((parprob478*parodds478-100)*bankroll*aggro)/(100*parodds478-100));
    let parkelly568=Math.floor(((parprob568*parodds568-100)*bankroll*aggro)/(100*parodds568-100));
    let parkelly578=Math.floor(((parprob578*parodds578-100)*bankroll*aggro)/(100*parodds578-100));
    let parkelly678=Math.floor(((parprob678*parodds678-100)*bankroll*aggro)/(100*parodds678-100));
    let parkelly129=Math.floor(((parprob129*parodds129-100)*bankroll*aggro)/(100*parodds129-100));
    let parkelly139=Math.floor(((parprob139*parodds139-100)*bankroll*aggro)/(100*parodds139-100));
    let parkelly149=Math.floor(((parprob149*parodds149-100)*bankroll*aggro)/(100*parodds149-100));
    let parkelly159=Math.floor(((parprob159*parodds159-100)*bankroll*aggro)/(100*parodds159-100));
    let parkelly169=Math.floor(((parprob169*parodds169-100)*bankroll*aggro)/(100*parodds169-100));
    let parkelly179=Math.floor(((parprob179*parodds179-100)*bankroll*aggro)/(100*parodds179-100));
    let parkelly189=Math.floor(((parprob189*parodds189-100)*bankroll*aggro)/(100*parodds189-100));
    let parkelly239=Math.floor(((parprob239*parodds239-100)*bankroll*aggro)/(100*parodds239-100));
    let parkelly249=Math.floor(((parprob249*parodds249-100)*bankroll*aggro)/(100*parodds249-100));
    let parkelly259=Math.floor(((parprob259*parodds259-100)*bankroll*aggro)/(100*parodds259-100));
    let parkelly269=Math.floor(((parprob269*parodds269-100)*bankroll*aggro)/(100*parodds269-100));
    let parkelly279=Math.floor(((parprob279*parodds279-100)*bankroll*aggro)/(100*parodds279-100));
    let parkelly289=Math.floor(((parprob289*parodds289-100)*bankroll*aggro)/(100*parodds289-100));
    let parkelly349=Math.floor(((parprob349*parodds349-100)*bankroll*aggro)/(100*parodds349-100));
    let parkelly359=Math.floor(((parprob359*parodds359-100)*bankroll*aggro)/(100*parodds359-100));
    let parkelly369=Math.floor(((parprob369*parodds369-100)*bankroll*aggro)/(100*parodds369-100));
    let parkelly379=Math.floor(((parprob379*parodds379-100)*bankroll*aggro)/(100*parodds379-100));
    let parkelly389=Math.floor(((parprob389*parodds389-100)*bankroll*aggro)/(100*parodds389-100));
    let parkelly459=Math.floor(((parprob456*parodds459-100)*bankroll*aggro)/(100*parodds459-100));
    let parkelly469=Math.floor(((parprob469*parodds469-100)*bankroll*aggro)/(100*parodds469-100));
    let parkelly479=Math.floor(((parprob479*parodds479-100)*bankroll*aggro)/(100*parodds479-100));
    let parkelly489=Math.floor(((parprob489*parodds489-100)*bankroll*aggro)/(100*parodds489-100));
    let parkelly569=Math.floor(((parprob569*parodds569-100)*bankroll*aggro)/(100*parodds569-100));
    let parkelly579=Math.floor(((parprob579*parodds579-100)*bankroll*aggro)/(100*parodds579-100));
    let parkelly589=Math.floor(((parprob589*parodds589-100)*bankroll*aggro)/(100*parodds589-100));
    let parkelly679=Math.floor(((parprob679*parodds679-100)*bankroll*aggro)/(100*parodds679-100));
    let parkelly689=Math.floor(((parprob689*parodds689-100)*bankroll*aggro)/(100*parodds689-100));
    let parkelly789=Math.floor(((parprob789*parodds789-100)*bankroll*aggro)/(100*parodds789-100));
    let parkelly1210=Math.floor(((parprob1210*parodds1210-100)*bankroll*aggro)/(100*parodds1210-100));
    let parkelly1310=Math.floor(((parprob1310*parodds1310-100)*bankroll*aggro)/(100*parodds1310-100));
    let parkelly1410=Math.floor(((parprob1410*parodds1410-100)*bankroll*aggro)/(100*parodds1410-100));
    let parkelly1510=Math.floor(((parprob1510*parodds1510-100)*bankroll*aggro)/(100*parodds1510-100));
    let parkelly1610=Math.floor(((parprob1610*parodds1610-100)*bankroll*aggro)/(100*parodds1610-100));
    let parkelly1710=Math.floor(((parprob1710*parodds1710-100)*bankroll*aggro)/(100*parodds1710-100));
    let parkelly1810=Math.floor(((parprob1810*parodds1810-100)*bankroll*aggro)/(100*parodds1810-100));
    let parkelly1910=Math.floor(((parprob1910*parodds1910-100)*bankroll*aggro)/(100*parodds1910-100));
    let parkelly2310=Math.floor(((parprob2310*parodds2310-100)*bankroll*aggro)/(100*parodds2310-100));
    let parkelly2410=Math.floor(((parprob2410*parodds2410-100)*bankroll*aggro)/(100*parodds2410-100));
    let parkelly2510=Math.floor(((parprob2510*parodds2510-100)*bankroll*aggro)/(100*parodds2510-100));
    let parkelly2610=Math.floor(((parprob2610*parodds2610-100)*bankroll*aggro)/(100*parodds2610-100));
    let parkelly2710=Math.floor(((parprob2710*parodds2710-100)*bankroll*aggro)/(100*parodds2710-100));
    let parkelly2810=Math.floor(((parprob2810*parodds2810-100)*bankroll*aggro)/(100*parodds2810-100));
    let parkelly2910=Math.floor(((parprob2910*parodds2910-100)*bankroll*aggro)/(100*parodds2910-100));
    let parkelly3410=Math.floor(((parprob3410*parodds3410-100)*bankroll*aggro)/(100*parodds3410-100));
    let parkelly3510=Math.floor(((parprob3510*parodds3510-100)*bankroll*aggro)/(100*parodds3510-100));
    let parkelly3610=Math.floor(((parprob3610*parodds3610-100)*bankroll*aggro)/(100*parodds3610-100));
    let parkelly3710=Math.floor(((parprob3710*parodds3710-100)*bankroll*aggro)/(100*parodds3710-100));
    let parkelly3810=Math.floor(((parprob3810*parodds3810-100)*bankroll*aggro)/(100*parodds3810-100));
    let parkelly3910=Math.floor(((parprob3910*parodds3910-100)*bankroll*aggro)/(100*parodds3910-100));
    let parkelly4510=Math.floor(((parprob4510*parodds4510-100)*bankroll*aggro)/(100*parodds4510-100));
    let parkelly4610=Math.floor(((parprob4610*parodds4610-100)*bankroll*aggro)/(100*parodds4610-100));
    let parkelly4710=Math.floor(((parprob4710*parodds4710-100)*bankroll*aggro)/(100*parodds4710-100));
    let parkelly4810=Math.floor(((parprob4810*parodds4810-100)*bankroll*aggro)/(100*parodds4810-100));
    let parkelly4910=Math.floor(((parprob4910*parodds4910-100)*bankroll*aggro)/(100*parodds4910-100));
    let parkelly5610=Math.floor(((parprob5610*parodds5610-100)*bankroll*aggro)/(100*parodds5610-100));
    let parkelly5710=Math.floor(((parprob5710*parodds5710-100)*bankroll*aggro)/(100*parodds5710-100));
    let parkelly5810=Math.floor(((parprob5810*parodds5810-100)*bankroll*aggro)/(100*parodds5810-100));
    let parkelly5910=Math.floor(((parprob5910*parodds5910-100)*bankroll*aggro)/(100*parodds5910-100));
    let parkelly6710=Math.floor(((parprob6710*parodds6710-100)*bankroll*aggro)/(100*parodds6710-100));
    let parkelly6810=Math.floor(((parprob6810*parodds6810-100)*bankroll*aggro)/(100*parodds6810-100));
    let parkelly6910=Math.floor(((parprob6910*parodds6910-100)*bankroll*aggro)/(100*parodds6910-100));
    let parkelly7810=Math.floor(((parprob7810*parodds7810-100)*bankroll*aggro)/(100*parodds7810-100));
    let parkelly7910=Math.floor(((parprob7910*parodds7910-100)*bankroll*aggro)/(100*parodds7910-100));
    let parkelly8910=Math.floor(((parprob8910*parodds8910-100)*bankroll*aggro)/(100*parodds8910-100));
    let parkelly1211=Math.floor(((parprob1211*parodds1211-100)*bankroll*aggro)/(100*parodds1211-100));
    let parkelly1311=Math.floor(((parprob1311*parodds1311-100)*bankroll*aggro)/(100*parodds1311-100));
    let parkelly1411=Math.floor(((parprob1411*parodds1411-100)*bankroll*aggro)/(100*parodds1411-100));
    let parkelly1511=Math.floor(((parprob1511*parodds1511-100)*bankroll*aggro)/(100*parodds1511-100));
    let parkelly1611=Math.floor(((parprob1611*parodds1611-100)*bankroll*aggro)/(100*parodds1611-100));
    let parkelly1711=Math.floor(((parprob1711*parodds1711-100)*bankroll*aggro)/(100*parodds1711-100));
    let parkelly1811=Math.floor(((parprob1811*parodds1811-100)*bankroll*aggro)/(100*parodds1811-100));
    let parkelly1911=Math.floor(((parprob1911*parodds1911-100)*bankroll*aggro)/(100*parodds1911-100));
    let parkelly11011=Math.floor(((parprob11011*parodds11011-100)*bankroll*aggro)/(100*parodds11011-100));
    let parkelly2311=Math.floor(((parprob2311*parodds2311-100)*bankroll*aggro)/(100*parodds2311-100));
    let parkelly2411=Math.floor(((parprob2411*parodds2411-100)*bankroll*aggro)/(100*parodds2411-100));
    let parkelly2511=Math.floor(((parprob2511*parodds2511-100)*bankroll*aggro)/(100*parodds2511-100));
    let parkelly2611=Math.floor(((parprob2611*parodds2611-100)*bankroll*aggro)/(100*parodds2611-100));
    let parkelly2711=Math.floor(((parprob2711*parodds2711-100)*bankroll*aggro)/(100*parodds2711-100));
    let parkelly2811=Math.floor(((parprob2811*parodds2811-100)*bankroll*aggro)/(100*parodds2811-100));
    let parkelly2911=Math.floor(((parprob2911*parodds2911-100)*bankroll*aggro)/(100*parodds2911-100));
    let parkelly21011=Math.floor(((parprob21011*parodds21011-100)*bankroll*aggro)/(100*parodds21011-100));
    let parkelly3411=Math.floor(((parprob3411*parodds3411-100)*bankroll*aggro)/(100*parodds3411-100));
    let parkelly3511=Math.floor(((parprob3511*parodds3511-100)*bankroll*aggro)/(100*parodds3511-100));
    let parkelly3611=Math.floor(((parprob3611*parodds3611-100)*bankroll*aggro)/(100*parodds3611-100));
    let parkelly3711=Math.floor(((parprob3711*parodds3711-100)*bankroll*aggro)/(100*parodds3711-100));
    let parkelly3811=Math.floor(((parprob3811*parodds3811-100)*bankroll*aggro)/(100*parodds3811-100));
    let parkelly3911=Math.floor(((parprob3911*parodds3911-100)*bankroll*aggro)/(100*parodds3911-100));
    let parkelly31011=Math.floor(((parprob31011*parodds31011-100)*bankroll*aggro)/(100*parodds31011-100));
    let parkelly4511=Math.floor(((parprob4511*parodds4511-100)*bankroll*aggro)/(100*parodds4511-100));
    let parkelly4611=Math.floor(((parprob4611*parodds4611-100)*bankroll*aggro)/(100*parodds4611-100));
    let parkelly4711=Math.floor(((parprob4711*parodds4711-100)*bankroll*aggro)/(100*parodds4711-100));
    let parkelly4811=Math.floor(((parprob4811*parodds4811-100)*bankroll*aggro)/(100*parodds4811-100));
    let parkelly4911=Math.floor(((parprob4911*parodds4911-100)*bankroll*aggro)/(100*parodds4911-100));
    let parkelly41011=Math.floor(((parprob41011*parodds41011-100)*bankroll*aggro)/(100*parodds41011-100));
    let parkelly5611=Math.floor(((parprob5611*parodds5611-100)*bankroll*aggro)/(100*parodds5611-100));
    let parkelly5711=Math.floor(((parprob5711*parodds5711-100)*bankroll*aggro)/(100*parodds5711-100));
    let parkelly5811=Math.floor(((parprob5811*parodds5811-100)*bankroll*aggro)/(100*parodds5811-100));
    let parkelly5911=Math.floor(((parprob5911*parodds5911-100)*bankroll*aggro)/(100*parodds5911-100));
    let parkelly51011=Math.floor(((parprob51011*parodds51011-100)*bankroll*aggro)/(100*parodds51011-100));
    let parkelly6711=Math.floor(((parprob6711*parodds6711-100)*bankroll*aggro)/(100*parodds6711-100));
    let parkelly6811=Math.floor(((parprob6811*parodds6811-100)*bankroll*aggro)/(100*parodds6811-100));
    let parkelly6911=Math.floor(((parprob6911*parodds6911-100)*bankroll*aggro)/(100*parodds6911-100));
    let parkelly61011=Math.floor(((parprob61011*parodds61011-100)*bankroll*aggro)/(100*parodds61011-100));
    let parkelly7811=Math.floor(((parprob7811*parodds7811-100)*bankroll*aggro)/(100*parodds7811-100));
    let parkelly7911=Math.floor(((parprob7911*parodds7911-100)*bankroll*aggro)/(100*parodds7911-100));
    let parkelly71011=Math.floor(((parprob71011*parodds71011-100)*bankroll*aggro)/(100*parodds71011-100));
    let parkelly8911=Math.floor(((parprob8911*parodds8911-100)*bankroll*aggro)/(100*parodds8911-100));
    let parkelly81011=Math.floor(((parprob81011*parodds81011-100)*bankroll*aggro)/(100*parodds81011-100));
    let parkelly91011=Math.floor(((parprob91011*parodds91011-100)*bankroll*aggro)/(100*parodds91011-100));

    if (prob4 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " - " + sel3 + " = " + parkelly123)
    } else if (prob5 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " - " + sel3 + " = " + parkelly123 + "<br>" + sel1 + " - " + sel2 + " - " + sel4 + " = " + parkelly124 + "<br>" +
            sel2 + " - " + sel3 + " - " + sel4 + " = " + parkelly234)
    } else if (prob6 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " - " + sel3 + " = " + parkelly123 + "<br>" + sel1 + " - " + sel2 + " - " + sel4 + " = " + parkelly124 + "<br>" +
            sel2 + " - " + sel3 + " - " + sel4 + " = " + parkelly234 + "<br>" + sel1 + " - " + sel2 + " - " + sel5 + " = " + parkelly125 + "<br>" + sel1 + " - " + sel3 + " - " + sel5 + " = " + parkelly135 + "<br>" +
            sel1 + " - " + sel4 + " - " + sel5 + " = " + parkelly145 + "<br>" + sel2 + " - " + sel3 + " - " + sel5 + " = " + parkelly235 + "<br>" + sel2 + " - " + sel4 + " - " + sel5 + " = " + parkelly245 + "<br>" +
            sel3 + " - " + sel4 + " - " + sel5 + " = " + parkelly345)
    } else if (prob7 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " - " + sel3 + " = " + parkelly123 + "<br>" + sel1 + " - " + sel2 + " - " + sel4 + " = " + parkelly124 + "<br>" +
            sel2 + " - " + sel3 + " - " + sel4 + " = " + parkelly234 + "<br>" + sel1 + " - " + sel2 + " - " + sel5 + " = " + parkelly125 + "<br>" + sel1 + " - " + sel3 + " - " + sel5 + " = " + parkelly135 + "<br>" +
            sel1 + " - " + sel4 + " - " + sel5 + " = " + parkelly145 + "<br>" + sel2 + " - " + sel3 + " - " + sel5 + " = " + parkelly235 + "<br>" + sel2 + " - " + sel4 + " - " + sel5 + " = " + parkelly245 + "<br>" +
            sel3 + " - " + sel4 + " - " + sel5 + " = " + parkelly345 + "<br>" + sel1 + " - " + sel2 + " - " + sel6 + " = " + parkelly126 + "<br>" + sel1 + " - " + sel3 + " - " + sel6 + " = " + parkelly136 + "<br>" +
            sel1 + " - " + sel4 + " - " + sel6 + " = " + parkelly146 + "<br>" + sel1 + " - " + sel5 + " - " + sel6 + " = " + parkelly156 + "<br>" + sel2 + " - " + sel3 + " - " + sel6 + " = " + parkelly236 + "<br>" +
            sel2 + " - " + sel4 + " - " + sel6 + " = " + parkelly246 + "<br>" + sel2 + " - " + sel5 + " - " + sel6 + " = " + parkelly256 + "<br>" + sel3 + " - " + sel4 + " - " + sel6 + " = " + parkelly346 + "<br>" +
            sel3 + " - " + sel5 + " - " + sel6 + " = " + parkelly356 + "<br>" + sel4 + " - " + sel5 + " - " + sel6 + " = " + parkelly456)
    } else if (prob8 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " - " + sel3 + " = " + parkelly123 + "<br>" + sel1 + " - " + sel2 + " - " + sel4 + " = " + parkelly124 + "<br>" +
        sel2 + " - " + sel3 + " - " + sel4 + " = " + parkelly234 + "<br>" + sel1 + " - " + sel2 + " - " + sel5 + " = " + parkelly125 + "<br>" + sel1 + " - " + sel3 + " - " + sel5 + " = " + parkelly135 + "<br>" +
        sel1 + " - " + sel4 + " - " + sel5 + " = " + parkelly145 + "<br>" + sel2 + " - " + sel3 + " - " + sel5 + " = " + parkelly235 + "<br>" + sel2 + " - " + sel4 + " - " + sel5 + " = " + parkelly245 + "<br>" +
        sel3 + " - " + sel4 + " - " + sel5 + " = " + parkelly345 + "<br>" + sel1 + " - " + sel2 + " - " + sel6 + " = " + parkelly126 + "<br>" + sel1 + " - " + sel3 + " - " + sel6 + " = " + parkelly136 + "<br>" +
        sel1 + " - " + sel4 + " - " + sel6 + " = " + parkelly146 + "<br>" + sel1 + " - " + sel5 + " - " + sel6 + " = " + parkelly156 + "<br>" + sel2 + " - " + sel3 + " - " + sel6 + " = " + parkelly236 + "<br>" +
        sel2 + " - " + sel4 + " - " + sel6 + " = " + parkelly246 + "<br>" + sel2 + " - " + sel5 + " - " + sel6 + " = " + parkelly256 + "<br>" + sel3 + " - " + sel4 + " - " + sel6 + " = " + parkelly346 + "<br>" +
        sel3 + " - " + sel5 + " - " + sel6 + " = " + parkelly356 + "<br>" + sel4 + " - " + sel5 + " - " + sel6 + " = " + parkelly456 + "<br>" + sel1 + " - " + sel2 + " - " + sel7 + " = " + parkelly127 + "<br>" + 
        sel1 + " - " + sel3 + " - " + sel7 + " = " + parkelly137 + "<br>" + sel1 + " - " + sel4 + " - " + sel7 + " = " + parkelly147 + "<br>" + sel1 + " - " + sel5 + " - " + sel7 + " = " + parkelly157 + "<br>" +
        sel1 + " - " + sel6 + " - " + sel7 + " = " + parkelly167 + "<br>" + sel2 + " - " + sel3 + " - " + sel7 + " = " + parkelly237 + "<br>" + sel2 + " - " + sel4 + " - " + sel7 + " = " + parkelly247 + "<br>" +
        sel2 + " - " + sel5 + " - " + sel7 + " = " + parkelly257 + "<br>" + sel2 + " - " + sel6 + " - " + sel7 + " = " + parkelly267 + "<br>" + sel3 + " - " + sel4 + " - " + sel7 + " = " + parkelly347 + "<br>" +
        sel3 + " - " + sel5 + " - " + sel7 + " = " + parkelly357 + "<br>" + sel3 + " - " + sel6 + " - " + sel7 + " = " + parkelly367 + "<br>" + sel4 + " - " + sel5 + " - " + sel7 + " = " + parkelly457 + "<br>" +
        sel4 + " - " + sel6 + " - " + sel7 + " = " + parkelly467 + "<br>" + sel5 + " - " + sel6 + " - " + sel7 + " = " + parkelly567)// done to here //
    } else if (prob8 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67)
    } else if (prob9 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78)
    } else if (prob10 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78 + "<br>" + sel1 + " - " + sel9 + " = " + parkelly19 + "<br>" + sel2 + " - " + sel9 + " = " + parkelly29 + "<br>" +
        sel3 + " - " + sel9 + " = " + parkelly39 + "<br>" + sel4 + " - " + sel9 + " = " + parkelly49 + "<br>" + sel5 + " - " + sel9 + " = " + parkelly59 + "<br>" +
        sel6 + " - " + sel9 + " = " + parkelly69 + "<br>" + sel7 + " - " + sel9 + " = " + parkelly79 + "<br>" + sel8 + " - " + sel9 + " = " + parkelly89)
    } else if (prob11 == 0) {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78 + "<br>" + sel1 + " - " + sel9 + " = " + parkelly19 + "<br>" + sel2 + " - " + sel9 + " = " + parkelly29 + "<br>" +
        sel3 + " - " + sel9 + " = " + parkelly39 + "<br>" + sel4 + " - " + sel9 + " = " + parkelly49 + "<br>" + sel5 + " - " + sel9 + " = " + parkelly59 + "<br>" +
        sel6 + " - " + sel9 + " = " + parkelly69 + "<br>" + sel7 + " - " + sel9 + " = " + parkelly79 + "<br>" + sel8 + " - " + sel9 + " = " + parkelly89 + "<br>" +
        sel1 + " - " + sel10 + " = " + parkelly110 + "<br>" + sel2 + " - " + sel10 + " = " + parkelly210 + "<br>" + sel3 + " - " + sel10 + " = " + parkelly310 + "<br>" +
        sel4 + " - " + sel10 + " = " + parkelly410 + "<br>" + sel5 + " - " + sel10 + " = " + parkelly510 + "<br>" + sel6 + " - " + sel10 + " = " + parkelly610 + "<br>" +
        sel7 + " - " + sel10 + " = " + parkelly710 + "<br>" + sel8 + " - " + sel10 + " = " + parkelly810 + "<br>" + sel9 + " - " + sel10 + " = " + parkelly910)
    } else {
        document.getElementById("parlays").innerHTML=(sel1 + " - " + sel2 + " = " + parkelly12 + "<br>" + sel1 + " - " + sel3 + " = " + parkelly13 + "<br>" + sel2 + " - " + sel3 + " = " + parkelly23 + "<br>" +
        sel1 + " - " + sel4 + " = " + parkelly14 + "<br>" + sel2 + " - " + sel4 + " = " + parkelly24 + "<br>" + sel3 + " - " + sel4 + " = " + parkelly34 + "<br>" +
        sel1 + " - " + sel5 + " = " + parkelly15 + "<br>" + sel2 + " - " + sel5 + " = " + parkelly25 + "<br>" + sel3 + " - " + sel5 + " = " + parkelly35 + "<br>" +
        sel4 + " - " + sel5 + " = " + parkelly45 + "<br>" + sel1 + " - " + sel6 + " = " + parkelly16 + "<br>" + sel2 + " - " + sel6 + " = " + parkelly26 + "<br>" +
        sel3 + " - " + sel6 + " = " + parkelly36 + "<br>" + sel4 + " - " + sel6 + " = " + parkelly46 + "<br>" + sel5 + " - " + sel6 + " = " + parkelly56 + "<br>" +
        sel1 + " - " + sel7 + " = " + parkelly17 + "<br>" + sel2 + " - " + sel7 + " = " + parkelly27 + "<br>" + sel3 + " - " + sel7 + " = " + parkelly37 + "<br>" + 
        sel4 + " - " + sel7 + " = " + parkelly47 + "<br>" + sel5 + " - " + sel7 + " = " + parkelly57 + "<br>" + sel6 + " - " + sel7 + " = " + parkelly67 + "<br>" +
        sel1 + " - " + sel8 + " = " + parkelly18 + "<br>" + sel2 + " - " + sel8 + " = " + parkelly28 + "<br>" + sel3 + " - " + sel8 + " = " + parkelly38 + "<br>" +
        sel4 + " - " + sel8 + " = " + parkelly48 + "<br>" + sel5 + " - " + sel8 + " = " + parkelly58 + "<br>" + sel6 + " - " + sel8 + " = " + parkelly68 + "<br>" +
        sel7 + " - " + sel8 + " = " + parkelly78 + "<br>" + sel1 + " - " + sel9 + " = " + parkelly19 + "<br>" + sel2 + " - " + sel9 + " = " + parkelly29 + "<br>" +
        sel3 + " - " + sel9 + " = " + parkelly39 + "<br>" + sel4 + " - " + sel9 + " = " + parkelly49 + "<br>" + sel5 + " - " + sel9 + " = " + parkelly59 + "<br>" +
        sel6 + " - " + sel9 + " = " + parkelly69 + "<br>" + sel7 + " - " + sel9 + " = " + parkelly79 + "<br>" + sel8 + " - " + sel9 + " = " + parkelly89 + "<br>" +
        sel1 + " - " + sel10 + " = " + parkelly110 + "<br>" + sel2 + " - " + sel10 + " = " + parkelly210 + "<br>" + sel3 + " - " + sel10 + " = " + parkelly310 + "<br>" +
        sel4 + " - " + sel10 + " = " + parkelly410 + "<br>" + sel5 + " - " + sel10 + " = " + parkelly510 + "<br>" + sel6 + " - " + sel10 + " = " + parkelly610 + "<br>" +
        sel7 + " - " + sel10 + " = " + parkelly710 + "<br>" + sel8 + " - " + sel10 + " = " + parkelly810 + "<br>" + sel9 + " - " + sel10 + " = " + parkelly910 + "<br>" +
        sel1 + " - " + sel11 + " = " + parkelly111 + "<br>" + sel2 + " - " + sel11 + " = " + parkelly211 + "<br>" + sel3 + " - " + sel11 + " = " + parkelly311 + "<br>" +
        sel4 + " - " + sel11 + " = " + parkelly411 + "<br>" + sel5 + " - " + sel11 + " = " + parkelly511 + "<br>" + sel6 + " - " + sel11 + " = " + parkelly611 + "<br>" +
        sel7 + " - " + sel11 + " = " + parkelly711 + "<br>" + sel8 + " - " + sel11 + " = " + parkelly811 + "<br>" + sel9 + " - " + sel11 + " = " + parkelly911 + "<br>" +
        sel10 + " - " + sel11 + " = " + parkelly1011)
    }
}