const {booksDatabase}  = require("../db/books.js")



//function to add/register books in library

const add= (addedBooks) =>{
 addedBooks.id = booksDatabase.length + 1;
  booksDatabase.push(addedBooks);
  console.log("new books were added to the library");
  console.log(booksDatabase)
}

//function to display books in library

const display = () =>{
    booksDatabase = booksDatabase.find(element => element.id === id);
    console.log(/n"we have these books in our library"/n);
    console.log(booksDatabase)
}
//function to update books
const update=(id,key,value)=>{
    var exists=booksDatabase.find(ele=>ele.id===id);
    if (!exists) {
        console.log("books not found\n");
    }
    else{
       
        exists[key]=value;
        
        console.log("books info updated\n");
        console.log(exists);

    }
}


     


//function to remove books
const remove=(id)=>{
  var exists=books.find(ele=>ele.id===id);
  if (!exists) {
    console.log("books not found\n");

    
  } else {
    var remaining=[];
    remaining=books.filter(ele=>ele.id!==id);
    console.log(remaining);
    
  }  
}



module.exports = {
    add,
    display,
    update,
    remove,

   
}
















