document.getElementById("calc").addEventListener("click", ()=>{kellyCalc1(), kellyCalc2(), kellyCalc3(), kellyCalc4(), kellyCalc5(), kellyCalc6(), kellyCalc7(), kellyCalc8(), kellyCalc9(), kellyCalc10(), kellyCalc11()});
document.getElementById("parlaybutton").addEventListener("click", parlayCalc2)

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
    let parkelly12=(((parprob12*parodds12-100)*bankroll*aggro)/(100*parodds12-100));
    let parkelly13=(((parprob13*parodds13-100)*bankroll*aggro)/(100*parodds13-100));
    let parkelly23=(((parprob23*parodds23-100)*bankroll*aggro)/(100*parodds23-100));
    let parkelly14=(((parprob14*parodds14-100)*bankroll*aggro)/(100*parodds14-100));
    let parkelly24=(((parprob24*parodds24-100)*bankroll*aggro)/(100*parodds24-100));
    let parkelly34=(((parprob34*parodds34-100)*bankroll*aggro)/(100*parodds34-100));
    let parkelly15=(((parprob15*parodds15-100)*bankroll*aggro)/(100*parodds15-100));
    let parkelly25=(((parprob25*parodds25-100)*bankroll*aggro)/(100*parodds25-100));
    let parkelly35=(((parprob35*parodds35-100)*bankroll*aggro)/(100*parodds35-100));
    let parkelly45=(((parprob45*parodds45-100)*bankroll*aggro)/(100*parodds45-100));
    let parkelly16=(((parprob16*parodds16-100)*bankroll*aggro)/(100*parodds16-100));
    let parkelly26=(((parprob26*parodds26-100)*bankroll*aggro)/(100*parodds26-100));
    let parkelly36=(((parprob36*parodds36-100)*bankroll*aggro)/(100*parodds36-100));
    let parkelly46=(((parprob46*parodds46-100)*bankroll*aggro)/(100*parodds46-100));
    let parkelly56=(((parprob56*parodds56-100)*bankroll*aggro)/(100*parodds56-100));
    let parkelly17=(((parprob17*parodds17-100)*bankroll*aggro)/(100*parodds17-100));
    let parkelly27=(((parprob27*parodds27-100)*bankroll*aggro)/(100*parodds27-100));
    let parkelly37=(((parprob37*parodds37-100)*bankroll*aggro)/(100*parodds37-100));
    let parkelly47=(((parprob47*parodds47-100)*bankroll*aggro)/(100*parodds47-100));
    let parkelly57=(((parprob57*parodds57-100)*bankroll*aggro)/(100*parodds57-100));
    let parkelly67=(((parprob67*parodds67-100)*bankroll*aggro)/(100*parodds67-100));
    let parkelly18=(((parprob18*parodds18-100)*bankroll*aggro)/(100*parodds18-100));
    let parkelly28=(((parprob28*parodds28-100)*bankroll*aggro)/(100*parodds28-100));
    let parkelly38=(((parprob38*parodds38-100)*bankroll*aggro)/(100*parodds38-100));
    let parkelly48=(((parprob48*parodds48-100)*bankroll*aggro)/(100*parodds48-100));
    let parkelly58=(((parprob58*parodds58-100)*bankroll*aggro)/(100*parodds58-100));
    let parkelly68=(((parprob68*parodds68-100)*bankroll*aggro)/(100*parodds68-100));
    let parkelly78=(((parprob78*parodds78-100)*bankroll*aggro)/(100*parodds78-100));
    let parkelly19=(((parprob19*parodds19-100)*bankroll*aggro)/(100*parodds19-100));
    let parkelly29=(((parprob29*parodds29-100)*bankroll*aggro)/(100*parodds29-100));
    let parkelly39=(((parprob39*parodds39-100)*bankroll*aggro)/(100*parodds39-100));
    let parkelly49=(((parprob49*parodds49-100)*bankroll*aggro)/(100*parodds49-100));
    let parkelly59=(((parprob59*parodds59-100)*bankroll*aggro)/(100*parodds59-100));
    let parkelly69=(((parprob69*parodds69-100)*bankroll*aggro)/(100*parodds69-100));
    let parkelly79=(((parprob79*parodds79-100)*bankroll*aggro)/(100*parodds79-100));
    let parkelly89=(((parprob89*parodds89-100)*bankroll*aggro)/(100*parodds89-100));
    let parkelly110=(((parprob110*parodds110-100)*bankroll*aggro)/(100*parodds110-100));
    let parkelly210=(((parprob210*parodds210-100)*bankroll*aggro)/(100*parodds210-100));
    let parkelly310=(((parprob310*parodds310-100)*bankroll*aggro)/(100*parodds310-100));
    let parkelly410=(((parprob410*parodds410-100)*bankroll*aggro)/(100*parodds410-100));
    let parkelly510=(((parprob510*parodds510-100)*bankroll*aggro)/(100*parodds510-100));
    let parkelly610=(((parprob610*parodds610-100)*bankroll*aggro)/(100*parodds610-100));
    let parkelly710=(((parprob710*parodds710-100)*bankroll*aggro)/(100*parodds710-100));
    let parkelly810=(((parprob810*parodds810-100)*bankroll*aggro)/(100*parodds810-100));
    let parkelly910=(((parprob910*parodds910-100)*bankroll*aggro)/(100*parodds910-100));
    let parkelly111=(((parprob111*parodds111-100)*bankroll*aggro)/(100*parodds111-100));
    let parkelly211=(((parprob211*parodds211-100)*bankroll*aggro)/(100*parodds211-100));
    let parkelly311=(((parprob311*parodds311-100)*bankroll*aggro)/(100*parodds311-100));
    let parkelly411=(((parprob411*parodds411-100)*bankroll*aggro)/(100*parodds411-100));
    let parkelly511=(((parprob511*parodds511-100)*bankroll*aggro)/(100*parodds511-100));
    let parkelly611=(((parprob611*parodds611-100)*bankroll*aggro)/(100*parodds611-100));
    let parkelly711=(((parprob711*parodds711-100)*bankroll*aggro)/(100*parodds711-100));
    let parkelly811=(((parprob811*parodds811-100)*bankroll*aggro)/(100*parodds811-100));
    let parkelly911=(((parprob911*parodds911-100)*bankroll*aggro)/(100*parodds911-100));
    let parkelly1011=(((parprob1011*parodds1011-100)*bankroll*aggro)/(100*parodds1011-100));
    document.getElementById("parlays").innerHTML=(sel1 + "-" + sel2 + "=" + parkelly12 + "----" + sel1 + "-" + sel3 + "=" + parkelly13 + "---" + sel2 + "-" + sel3 + "=" + parkelly23);
}