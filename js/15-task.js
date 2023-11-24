function checkAge(age) {
    let message;
  
    if (age >= 18) { 
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }