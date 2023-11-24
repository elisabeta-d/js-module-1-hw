function checkStorage(available, ordered) {

        // Change code below this line
        
     if (ordered < available) {
        message = "Order is processed, our manager will contact you."
     } else {
        message = "Not enough goods in stock!"
     }

        // Change code above this line
    
        return message;
    }
    
    checkStorage(100, 50);
    checkStorage(100, 130);
    checkStorage(200, 20);
    checkStorage(200, 150);
    checkStorage(150, 180);
