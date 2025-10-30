//! Interface - defining the structure of an object
//! i t tellsts what properties an object should have and their types
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
var auth = function (u, p, name) {
    if (u === "admin" && p === "123") {
        return "WELCOME ".concat(name);
    }
    return "Access Denied";
};
console.log(auth("admin", "123", "Masayeakh")); //true
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
//one onj
var post1 = {
    title: "Understanding TypeScript Interfaces",
    content: "Interfaces in TypeScript are powerful tools for defining the structure of objects...",
    author: "Masayeakh",
    summarize: function () {
        return "This blog post explains the concept of interfaces in TypeScript.";
    },
    publishedIn: "IEEE Journal",
    personalNote: "This is my personal blog post about TypeScript interfaces.......",
    loggedDetails: function () {
        var _a;
        return "Post titled: \"".concat(post1.title, "\"\n \n        authored by: ").concat(post1.author, "\n \n        content: ").concat(post1.content, "\n \n        tags: ").concat(((_a = post1.tags) === null || _a === void 0 ? void 0 : _a.join(", ")) || "No tags", "\n \n        summary\"").concat(post1.summarize(), "\"\n \n        published in: ").concat(post1.publishedIn, "\n\n        personal note: ").concat(post1.personalNote, "\n        ");
    }
};
console.log(post1.loggedDetails());
