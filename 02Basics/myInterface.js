//! Interface - defining the structure of an object
//! it tells ts what properties an object should have and their types
//*Crteating an object that adheres to the User interface
var user1 = {
    name: "MIP",
    age: 30,
    isActive: true,
};
console.log(user1);
var phone = {
    id: 1,
    name: "iphone 14",
};
console.log(phone);
var myCar = {
    vin: "123ABC",
    brand: "Toyota",
    model: "Corolla",
};
console.log(myCar);
var auth = function (u, p) {
    if (u === "admin" && p === "123") {
        return "WELCOME";
    }
    return "Access Denied";
};
console.log(auth("admin", "123")); //true
//obj
var result = {
    val1: 23,
    val2: 32,
    operation: function () {
        return this.val1 + this.val2;
    }
};
console.log(result.operation());
var mip = {
    email: "m@gmail.com",
    userId: 12,
    dbId: 4567,
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name) {
        return "Coupon ".concat(name, " applied");
    }
};
console.log(mip.startTrail());
console.log(mip.getCoupon("BLACKFRIDAY"));
