# parlay-maker
_____________________________________________________________
DESCRIPTION
 
 This simple app is a parlay maker designed to calculate of parlay
    bets, and their associated recommended bet sizes per the Kelly Criterion.
    
 It doesn't currently adjust parlay bet sizes to avoid
    overbetting individual selections, and should only be used as a tool to help
    quickly sort all the kelly values for various parlays.
______________________________________________________________
WHAT'S THE KELLY CRITERION?
    
 The Kelly Criterion is a formula rooted in probability theory
    that allows the bettor to control their ROI and amount of
    risk taken. (https://en.wikipedia.org/wiki/Kelly_criterion)
______________________________________________________________
BUILT WITH

HTML<br>
CSS<br>
JS<br>
______________________________________________________________
WHAT WAS MY MOTIVATION IN BUILDING THIS APP?

 I love me some sports betting!<br><br>
 I've profitably managed several bankrolls that myself and friends have set up over the last 15 years, and
    this is exactly the type of tool that I had always wanted to have at my fingertips.
______________________________________________________________
 WHAT IS THE BANKROLL AND BETTING STRATEGY SECTION FOR?
    This section sets up the variables that are required to
    determine what your optimal bet sizes are.
    
    Bankroll: Your current bankroll. Should be comprised
       entirely of disposable income.
       
    Kelly Multiplier: A number between 0 and 1 that determines 
       how aggressive a betting strategy to use. The higher the
       number, the more aggressive the approach. Staying between 
       0.2 and 0.5 is recommended.
       
     Picks per Parlay: The number of bets that you wish to pair
        together on your parlays. The program will also return
        the optimal bet sizes for individual picks, if no parlays
        are required.
        
     Maximum Bet: What percentage of your bankroll you are willing 
        to risk on the most advantageous picks.
_______________________________________________________________        
  HOW DO I ENTER MY ADVANTAGE PICKS?
     Type a name for your pick in the Selection box, then the percent
     chance of that outcome occuring, and the odds offered in decimal
     (European) form. When you've added all your selections, click
     Calculate.
 ______________________________________________________________    
  WHAT DO THE RESULTS MEAN?
     The Individual Kelly Values are the maximum amount that should be
     placed on any selection, on it's own. The Parlay Kelly Value is
     that amount for the combined odds of two picks.
