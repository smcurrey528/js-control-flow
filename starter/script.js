
let playAgain = true
while ( playAgain == true ) {

// prompt for playerName and commuteMode
let playerName = prompt('Ayye I\'m walking here! What\'s your name?');
let commuteMode = prompt(playerName + ', welcome to NYC! How are you getting to GA today? \nChoose: \nb (bike) \nw (walk) \ns (subway) \nu (uber)');


// BIKE
if ( commuteMode === 'b' ) {
  let helmet = prompt('Are you wearing a helmet? \nChoose: \ny (yes) \nn (no)');
  if ( helmet === 'y' ) {
    let madDriver = prompt('A driver flips you off. Do you say something or ignore them? \nChoose: \ns (say something) \ni (ignore)');
      if ( madDriver === 's' ) {
        alert('You get in a fight! Police are called! Tardy!!');
      } else {
        alert('You get to class 10 min early! Gold Star!!!');
      }
  } else {
    let runLight = prompt('You\'re running late. You don\'t see any cars coming. Do you run the red light? \nChoose: \ny (yes) \nn (no)');
      if ( runLight === 'y' ) {
        alert('Braindead.');
      } else {
        alert('You get to class 10 minutes late. Tardy!');
      }
  }
}


// WALK
if ( commuteMode === 'w' ) {
  let coffee = prompt('Do you stop at Think and get some coffee on the way? \nChoose: \ny (yes) \nn (no)');
  if ( coffee === 'y' ) {
    let favFood = prompt('You\'re also hungry. What\'s your favorite breakfast food? \nEnter:');
    switch(favFood) {
      case 'bagel' :
        alert(favFood + ' and coffee kept you alert in class! Gold Star!!');
      break;
      case 'yogurt' :
        alert(favFood + ' and coffee kept you alert in class! Gold Star!!');
      break;
      case 'pancakes' :
        alert(favFood + ' and coffee kept you alert in class! Gold Star!!');
      break;
      case 'donut' :
        alert(favFood + ' and coffee kept you alert in class! Gold Star!!');
      break;
      default :
        alert('They don\'t serve that here! You have to go somewhere else! TARDY!!!');
    }
  } else {
    let umbrella = prompt('It starts to rain. Did you bring an umbrella? \nChoose: \ny (yes) \nn (no)');
      if ( umbrella === 'y' ) {
        alert('You survive the rain and make it to class on time! Gold Star!!');
      } else {
        alert('You\'re soaked! Your favorite pants are ruined! Sad face. TARDY!!!');
      }
  }
}


// SUBWAY
if ( commuteMode === 's' ) {
  let subway = prompt('There\'s a service advisory on the L train. Do you wait for the L or take the J instead? \nChoose \nl (L train) \nj (J train)');
  if ( subway === 'l' ) {
    let stuckTrain = prompt('The L train gets stuck at Bedford Ave. Do you stay on the train and hope it starts moving soon or get out and walk? \nChoose \ns (stay) \nw (walk)');
      if ( stuckTrain === 's' ) {
        alert('Patience is a virtue. The L starts moving again and you get to class on time. Gold Star!!');
      } else {
        alert('Oh no! The L pulls away as you\'re walking up the stairs! TARDY!!');
      }
  } else {
    let saySomething = prompt('You\'re waiting for the J train. You see something. Do you say something? \nChoose: \ny (yes) \nn (no)');
      if ( saySomething === 'y' ) {
        alert('It was a bomb! You saved thousands of lives! Excused absence!!');
      } else {
        alert('It was a bomb! Dead.');
      }
  }
}


// UBER
if ( commuteMode === 'u' ) {
  let uber = prompt('Surge pricing - oh no! How much are you willing to pay?');
  let uberInt = parseInt(uber);
  if ( uber >= 15 ) {
    let uberX = prompt('UberX, classy! The driver won\'t stop talking, but you\'re still tired. Do you engage in smalltalk or stay silent? \nChoose: \nt (talk) \ns (stay silent)');
      if ( uberX === 't' ) {
        let newJob = prompt('Turns out your driver is the Mark Zuckerberg, he offers you your dream job! Do you accept? \nChoose: \ny (yes) \nn (no)');
        if (newJob === 'y' ) {
          alert('You skip graduation and go straight out into the working world. Zuck flies you to Menlo Park on his private jet! Classy!!!');
        } else {
          alert('You clearly value your privacy. Zuck\'s brain short-circuits. His head explodes and you crash! TARDY!!!');
        }
      } else {
        alert('Your driver thinks you\'re rude and cancels the trip, forcing you to walk 15 blocks in the rain. TARDY!!!');
      }
  } else {
    let uberPool = prompt('Uber pool! An economic choice. The person beside you smells funny. Do you say something? \nChoose: \ny (yes) \nn (no)');
      if ( uberPool === 'y' ) {
        alert('The offending passenger apologizes profusely and opens the window. Much better! You get to class on time. Gold Star!!');
      } else {
        alert('The smell becomes so overwhelming that you vomit on your nice new outfit and have to go back home to change. TARDY!!!');
      }
  }
}


let playAgain = confirm('Do you want to play again?');
  if (!playAgain) {
    break;
  }
}





  // B(ike)
    // Are you wearing a helmet? (Y/N)
      // Y(es)
        // A driver flips you off. Do you say something or ignore them? (Say/Ignore)
          // S(ay)
            // You get in a fight! Police are called! Tardy!
          // I(gnore)
            // You get to class 10 min early! Gold Star!!!
      // N(o)
        // You're running late. You don't see any cars coming. Do you run the red light? (Y/N)
          // Y(es)
            // Braindead.
          // N(o)
            // You get to class 10 minutes late. Tardy!
  // W(alk)
    // Do you stop at Think and get some coffee on the way? (Yes/No)
      // Y(es)
        // You're also hungry. What's your favorite breakfast food? ({string})
          // case: (yogurt, bagel, muffin, Pancakes, Donut)
            // favFood + and coffee kept you alert in class! Gold Star!!
          // else:
            // They don't serve that here!
      // N(o)
        // It starts to rain. Did you bring an umbrella? (Yes/No)
          // Y(es) You survive the rain and make it to class on time! Gold Star!!
          // N(o) You're soaked! Your favorite pants are ruined! Sad face. TARDY!!!
  // S(ubway)
    // There's a service advisory on the L train. Do you wait for the L or take the J instead? (L/J)
      // L
        // The L train gets stuck at Bedford Ave. Do you stay on the train and hope it starts moving soon or get out and walk? (Stay/Walk)
          // (S)tay
            // Patience is a virtue. The L starts moving again and you get to class on time. Gold Star!!
          // (W)alk
            // Oh no! The L pulls away as you're walking up the stairs! TARDY!!
      // J
        // You're waiting for the J train. You see something. Do you say something? (Yes/No)
          // Y(es)
            // It was a bomb! You saved thousands of lives! Escused absence!!
          // N(o)
            // It was a bomb! Dead.
  // U(ber)
    // Surge pricing - oh no! How much are you willing to pay? ({int})
      // >=15
        // Uber X - classy! Drive won't stop talking, but you're still tired. Do you engage in smalltalk or stay silent? (Talk/Silent)
          // T(alk)
            // Turns out your driver is the Mark Zuckerberg, he offers you your dream job! Do you accept? (Yes/No)
              // Y(es)
                // You skip graduation and go straight out into the working world. Zuck flies you to Menlo Park on his private jet! Classy!!!
              // N(o)
                // You clearly value your privacy. Zuck's brain short-circuits. His head explodes and you crash! TARDY!!!
          // S(ilent)
            // Your driver thinks you're rude and cancels the trip, forcing you to walk 15 blocks in the rain. TARDY!!!
      // <15
        // Uber pool! An economic choice. The person beside you smells funny. Do you say something? (Yes/No)
          // Y(es)
            // The offending passenger apologizes profusely and opens the window. Much better! You get to class on time. Gold Star!!
          // N(o)
            // The smell becomes so overwhelming that you vomit on your nice new outfit and have to go back home to change. TARDY!!!
