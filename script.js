
function getAlert() {
    


let colors = ["red" , "blue", "black"] ;

alert (colors [1])

}



let actors = [

{name:'leonardoDiCaprio',
 age:'49',
 film: 'inception'} ,


 {name:'johnnyDepp',
    age: '60',
    film: 'JeanneDuBarry'
} ,

{    
    name: 'robertDeNiro',
    age: '80',
    film: 'Goodfellas'
    
} ,

{
    name: 'bradPitt',
    age: '60',
    film: 'fightClub'
} ,




{
    name:'alPacino',
    age: '84',
    film: 'godFather'
}  ,


{

    name:'TomHardy',
    age: '46',
    film: 'bronson'
} ,

{
    name: 'emmaStone',
    age: '31',
    film: 'LaLaLand'
} ,

  {
    name:'benAfleck',
    age: '51',
    film: 'City'
  } ,

  {
    name: 'mattDamon',
    age: '53',
    film: 'martian'
  } ,

  {
    name:'joaquinPhoenix',
    age: '49',
    film: 'Joker'
  } ,

] ;

for (let i=0; i<actors.length; i++) {
    if(actors[i].age < 35) {
        console.log(actors[i].name);
    } else if (actors[i].age > 40) {
        console.log(actors[i].name , actors[i].age);
    }
}


