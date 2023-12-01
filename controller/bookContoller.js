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
   
    console.log("we have these books in our library");
    console.log(books)
}
//function to update books
const update=(id,key,value)=>{
    var exists=booksDatabase.find(element=>element.id===id);
    if (!exists) {
        console.log("books not found\n");
    }
    else{
       
        exists[key]=value;
        
        console.log("books info updated\n");
        console.log(exists)

    }
}


     


//function to remove books
const remove=(id)=>{
  var exists=booksDatabase.find(element=>element.id===id);
  if (!exists) {
    console.log("books not found\n");

    
  } else {
    let remaining=[];
    remaining=booksDatabase.filter(element=>element.id!==id);
    console.log(remaining);
    
  }  
}



module.exports = {
    add,
    display,
    update,
    remove

   
}
















