let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let currentlyPlaying ;

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath="https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath="https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath="https://content.codecademy.com/projects/chore-door/images/closed_door.svg";



let openDoorA;
let openDoorB;
let openDoorC;
let numClosedDoors;
let startButton = document.getElementById("start");

startRound = () =>{
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = () =>{
  startRound();
}


randomChoreDoorGenerator = () =>{
  let choreDoor;
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoorA = botDoorPath;
    openDoorB = beachDoorPath;
    openDoorC = spaceDoorPath;
} else if (choreDoor === 1) { 
    openDoorA = beachDoorPath;
    openDoorB = botDoorPath;
    openDoorC = spaceDoorPath;
} else 
{
    openDoorA = beachDoorPath;
    openDoorB = spaceDoorPath;
    openDoorC = botDoorPath;
}
}

isBot = (door) =>{
  if (door === botDoorPath)
    return(true);
  else
   return(false);
}

 const isClicked = (door) => {
  if (door.src === closedDoorPath)
    return(false);
  else
   return(true);
}


gameOver = (status) =>{
  if (status === 'win')
    startButton.innerHTML = "You win! Play again?";
  else 
    startButton.innerHTML = "You lost :'(! Play again?";
    currentlyPlaying = false;
}


playDoor = (door) =>{
  numClosedDoors--;
  if (numClosedDoors === 0){
    if (isBot(door) === true)
      gameOver('win');
    else
      gameOver('fail');
  }
  else if (isBot(door) === true)
    gameOver('fail');
}

startRound();


doorImage1.onclick = () =>{
  if (isClicked(doorImage1) === false)
    playDoor(openDoorA);
  if (currentlyPlaying === true || isBot(openDoorA) === true )
    doorImage1.src = openDoorA;

};
doorImage2.onclick = () =>{
  if (isClicked(doorImage2) === false)
    playDoor(openDoorB);
  if (currentlyPlaying === true || isBot(openDoorB) === true )
    doorImage2.src = openDoorB;

};
doorImage3.onclick = () =>{
   if (isClicked(doorImage3) === false)
    playDoor(openDoorC);
  if (currentlyPlaying === true || isBot(openDoorC) === true )
    doorImage3.src = openDoorC;
};