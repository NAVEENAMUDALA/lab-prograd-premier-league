//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
 
function createManager(managerName, managerAge, currentTeam, trophiesWon){
       var Manager=
                  [managerName,
                    managerAge,
                    currentTeam,
                    trophiesWon]   ;
           return Manager;





}


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(array){
  if (array.length==0)
  return null;
  else
    var obj={
       defender:array[0],
       midfield:array[1], 
       forward:array.length==3 ? array[2]:undefined
    }
    return obj;
   
 
}

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var year;
  let  playersArray=[];
  for (let i=0; i<players.length;i++)
   if(players[i].debut===year)
    playersArray.push(players[i])
  return playersArray;



}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let  playersArray=[];
  for (let i=0; i<players.length;i++)
   if(players[i].position===position)
    playersArray.push(players[i])
  return playersArray;

}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  var  playersArray=[]
  for (let i=0; i<players.length;i++){
    for (let j = 0; j < players[i].awards.length; j++){
      if(players[i].awards[j].name===awardName){
           playersArray.push(players[i])
           break;
      }
    } 
  }
  return playersArray;
}


//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noofTimes){
  var player_awards = [];
  var awardtimes =[];
  var count=0;
  for(var i=0;i < players.length;i++)
  {
    for(var j=0;j<players[i].awards.length;j++)
    {
     if(players[i].awards[j].name==awardName)
     count++;
    }
  awardtimes[i]=count;
  count=0;
  }
  for(var i=0;i < players.length;i++)
  {
    if(awardtimes[i]==noofTimes)
    {
    player_awards.push(players[i]);
    }
  }
  return player_awards;
  }
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  {
    var playerAwards = [];
    for(var i=0;i < players.length;i++)
    {
      if(players[i].country==country)
      {
         for(var j=0;j<players[i].awards.length;j++)
          {
            if(players[i].awards[j].name==awardName)
            playerAwards.push(players[i])
          }
      }
    }
   return playerAwards;
  }
 
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var playerArray=[]
  for(var i=0;i < players.length;i++)
  {
    if(players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age )
    {
      playerArray.push(players[i])
    }
    
  }
  return playerArray  
}




//Progression 9 - Sort players in descending order of their age
function SortByAge(){

}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(){

}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
