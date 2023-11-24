function checkStorage(available, ordered) {
    let message;

    // Change code below this line

    message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    console.log(message);

    // Change code above this line

    return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
