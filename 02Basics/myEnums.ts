//!An enum is a way to define a set of named constants.

//! It makes your code more readable and type-safe instead of using raw strings or numbers everywhere.


//* let's see an example of enum
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

let mipSeat:SeatChoice = SeatChoice.AISLE;
let mipSeat2:SeatChoice = SeatChoice.MIDDLE;
console.log(mipSeat); //0
console.log(mipSeat2); //1

//* by default enum values start from 0 and increment by 1 for each member. You can also assign custom values to enum members.


//!Custom enum values
enum SeatChoice2 {
    AISLE = 3,
    MIDDLE, // 4
    WINDOW //5
}

for (let seat in SeatChoice2) {
    if (isNaN(Number(seat))) {
        console.log(`${seat}: ${SeatChoice2[seat]}`);
    }
}

//* we can set diff numbers as well. 
enum seatChoice3 {
    AISLE = 10,
    MIDDLE = 20,
    WINDOW = 30, 
    FOURTH// 31 
}
console.log("\n")
for(let s in seatChoice3) {
    if(isNaN(Number(s))){
        console.log(`${s} - ` + `${seatChoice3[s]}`);
    }
}

//*String enums
enum seatChoice4{
    AISLE = "AISLE SEAT",
    MIDDLE = "MIDDLE SEAT",
    WINDOW = "WINDOW SEAT",
    FOURTH = "FOURTH SEAT"
}
console.log("\n") 
for(let s in seatChoice4){
    if(isNaN(Number(s))){
console.log(`${s} - ` + `${seatChoice4[s as keyof typeof seatChoice4]}`);

    }
}