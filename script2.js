//let myLibrary = [];
class Book {
    constructor(title, author,pages,read) {
        this.title=title
        this.author=author
        this.pages=pages
        this.read=read
        this.info= function(){
            return(`${title} by ${author}, ${pages} pages, ${read}`)
        }
    }
}


//add book to library
/*function addBookInitially(book){
    //do stuff here
    myLibrary.push(book);
}
*/


//print books in library
/*function printBooks(myLibrary) {
    for ( let i=0;i<(myLibrary.length); i++) {
        console.log(myLibrary[i]);
        //create an html card here
        //create div with para class
        
        let div=document.createElement("div");
        div.classList.add('para');
        div.setAttribute=('id','para');
        //create paras
        const para=document.createElement('p');
        const paraTitle=document.createElement('p');
        const paraAuthor=document.createElement('p');
        const paraPages=document.createElement('p');
        //build text content

        const textContent=
            `Title:  ${myLibrary[i].title}
             Author: ${myLibrary[i].author}
             Pages:  ${myLibrary[i].pages}
             ${myLibrary[i].read}
             `
        const textTitle = `Title:  ${myLibrary[i].title}`
        const textAuthor = `Author: ${myLibrary[i].author}`
        const textPages = `Pages:  ${myLibrary[i].pages}`
             
        //create textnode
        //textNode =document.createTextNode(textContent);
        let textNode =document.createTextNode(textTitle);
        //append textnode to paras
        //para.appendChild(textNode);
        paraTitle.appendChild(textNode);
        textNode =document.createTextNode(textAuthor);
        paraAuthor.appendChild(textNode);
        textNode =document.createTextNode(textPages);
        paraPages.appendChild(textNode);
        //append paras to div
        div.appendChild(paraTitle);
        div.appendChild(paraAuthor);
        div.appendChild(paraPages);
        //append div to booksList div
        document.getElementById('booksList').appendChild(div);
       
    }

}*/
//add book button
function addBook(){
    let newBook = new Book();
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pages = document.getElementById('pages').value;
    newBook.read = 'Not read';
    if (newBook.title == (''|' ')) {return};
    if (newBook.author == (''|' ')) {return};
    if (newBook.pages == (''|' ')) {return};
    if (document.getElementById('read').checked=true) {
        newBook.read='Read already';
    };
    printNewBook(newBook);
}
function printNewBook(newBook){
    let div=document.createElement("div");
        div.classList.add('para');
        div.setAttribute=('id','para');
        //create paras
        const para=document.createElement('p');
        const paraTitle=document.createElement('p');
        const paraAuthor=document.createElement('p');
        const paraPages=document.createElement('p');
        //build text content

  
        const textTitle = `Title:  ${newBook.title}`
        const textAuthor = `Author: ${newBook.author}`
        const textPages = `Pages:  ${newBook.pages}`
             
        //create textnode
        //textNode =document.createTextNode(textContent);
        let textNode =document.createTextNode(textTitle);
        //append textnode to paras
        //para.appendChild(textNode);
        paraTitle.appendChild(textNode);
        textNode =document.createTextNode(textAuthor);
        paraAuthor.appendChild(textNode);
        textNode =document.createTextNode(textPages);
        paraPages.appendChild(textNode);
        //append paras to div
        div.appendChild(paraTitle);
        div.appendChild(paraAuthor);
        div.appendChild(paraPages);
        //append div to booksList div
        document.getElementById('booksList').appendChild(div);
}

//initial books
/*const theHobbit=new Book('The Hobbit','J.R.R. Tolkien', 295, 'Read already');
const theDwarf=new Book('The Dwarf','J.R.R. John ', 300, 'Not read');
const bookThree=new Book('Book Three','Author 3', 235, 'Read already');
const bookFour=new Book('Book Four','Author 4', 4, 'Not read');*/


//console.log(theHobbit.info());
//add initial books
//addBookInitially(theHobbit);
//console.log(myLibrary);
//addBookInitially(theDwarf);
//addBookInitially(bookThree);
//addBookInitially(bookFour);
//printBooks(myLibrary);
//click event listener
document.getElementById('addButton').addEventListener('click',addBook);