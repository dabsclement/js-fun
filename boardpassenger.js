let seatLeft = 10;
let passengerStillToBoard =8;
let passengerBoarded = 0;
  while (seatLeft > 0 && passengerStillToBoard > 0){
      passengerBoarded++;
      seatLeft--;
      passengerStillToBoard--;
  }
  console.log(passengerBoarded + 'successfully on board!');