function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line
  
    return isNotInRange;
  }

  isNumberNotInRange(10, 30, 17);
  isNumberNotInRange(10, 30, 5);
  isNumberNotInRange(20, 50, 24);
  isNumberNotInRange(20, 50, 76);