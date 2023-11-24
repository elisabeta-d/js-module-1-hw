function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { 
      case "starter" : 
        price = 0; 
        break;
  
      case "professional" : 
        price = 20; 
        break;
  
      case "organization" : 
        price = 50; 
        break;
    }
  
    // Change code above this line
    return price;
  }