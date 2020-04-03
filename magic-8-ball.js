userName = 'Murray';
(userName === 'Murray') ? console.log('Hello, Murray!') : console.log('Hello!');

const userQuestion = 'Should I put this in my butt?';
//A question is asked to our magic 8 ball!

console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'Yeppers.';
    break;
  case 1:
    eightBall = 'Oh yeah, for sure.';
    break;
  case 2:
    eightBall = 'Uhhh ngl it\'s pretty unlikely'
    break;
  case 3:
    eightBall = 'Nopers.';
    break;
  case 4:
    eightBall = 'Yeah maybe dont count on it.';
    break;
  case 5:
    eightBall = 'NOOOOOOOOOOOOOOOOOOOOOOOO';
    break;
  case 6:
    eightBall = 'Oh yeah fasho';
    break;
  case 7:
    eightBall = 'Count on it bb';
    break;
    eightBall = 'My sources say no';
    break;
  case 8:
    eightBall = 'Don\'t think so, sweaty.';
    break;
}
console.log(`${eightBall}`);
if (randomNumber > 3) {
  console.log('The eightball displays a number higher than 3!');
} else {
  console.log('The eightball displays a number lower than 3!');
}
