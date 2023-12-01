const {add,display,update,remove} = require("../controller/bookContoller.js");
 let addedBooks = [
    {
    title: "love&loss",
    author: "meel",
    year: 2002
    },
 ]


 add(addedBooks) 
 display()
 update(1,"year",2014)
 remove(5)