userName = 'Murray';
(userName === 'Murray') ? console.log('Hello, Murray!') : console.log('Hello!');

const userQuestion = 'Is this the last year of Trump\'s presidency?';
//A question is asked to our magic 8 ball!

console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
}
console.log(`${eightBall}`);
if (randomNumber > 3) {
  console.log('The eightball displays a number higher than 3!');
} else {
  console.log('The eightball displays a number lower than 3!');
}
