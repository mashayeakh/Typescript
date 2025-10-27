//!An enum is a way to define a set of named constants.
//! It makes your code more readable and type-safe instead of using raw strings or numbers everywhere.
//* let's see an example of enum
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var mipSeat = SeatChoice.AISLE;
var mipSeat2 = SeatChoice.MIDDLE;
console.log(mipSeat); //0
console.log(mipSeat2); //1
//* by default enum values start from 0 and increment by 1 for each member. You can also assign custom values to enum members.
//!Custom enum values
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE"] = 3] = "AISLE";
    SeatChoice2[SeatChoice2["MIDDLE"] = 4] = "MIDDLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 5] = "WINDOW"; //5
})(SeatChoice2 || (SeatChoice2 = {}));
for (var seat in SeatChoice2) {
    if (isNaN(Number(seat))) {
        console.log("".concat(seat, ": ").concat(SeatChoice2[seat]));
    }
}
//* we can set diff numbers as well. 
var seatChoice3;
(function (seatChoice3) {
    seatChoice3[seatChoice3["AISLE"] = 10] = "AISLE";
    seatChoice3[seatChoice3["MIDDLE"] = 20] = "MIDDLE";
    seatChoice3[seatChoice3["WINDOW"] = 30] = "WINDOW";
    seatChoice3[seatChoice3["FOURTH"] = 31] = "FOURTH"; // 31 
})(seatChoice3 || (seatChoice3 = {}));
console.log("\n");
for (var s in seatChoice3) {
    if (isNaN(Number(s))) {
        console.log("".concat(s, " - ") + "".concat(seatChoice3[s]));
    }
}
//*String enums
var seatChoice4;
(function (seatChoice4) {
    seatChoice4["AISLE"] = "AISLE SEAT";
    seatChoice4["MIDDLE"] = "MIDDLE SEAT";
    seatChoice4["WINDOW"] = "WINDOW SEAT";
    seatChoice4["FOURTH"] = "FOURTH SEAT";
})(seatChoice4 || (seatChoice4 = {}));
console.log("\n");
for (var s in seatChoice4) {
    if (isNaN(Number(s))) {
        console.log("".concat(s, " - ") + "".concat(seatChoice4[s]));
    }
}
