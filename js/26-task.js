function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    
    // Change code below this line 

    message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
    console.log(message);

    // Change code above this line
    return message;
  }

  



  