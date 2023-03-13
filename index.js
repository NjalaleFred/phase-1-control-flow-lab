function scuberGreetingForFeet(someValue){
  let result 
  if(someValue <= 400){
    result = 'This one is on me!'
  }
  else if (someValue > 2000){
    result = 'I will gladly take your thirty bucks.'
  }
     if (someValue > 2500){
      result = 'No can do.'
     }   
  
  return result
}

function ternaryCheckCity(city){
   return  city === 'NYC' ? "Ok, sounds good." : "No go."
}


function switchOnCharmFromTip(quantity){
  switch(quantity){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
