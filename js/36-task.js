function checkForSpam(message) {
    let result;
    // Change code below this line

    const lowerCaseMessage = message.toLowerCase();
    const isSpam = lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
  
    // Change code above this line
    return isSpam;
  }