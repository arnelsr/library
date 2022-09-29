let myLibrary = [];
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
function addBookInitially(book){
    //do stuff here
    myLibrary.push(book);
}



//print books in library
function printBooks(myLibrary) {
    //remove div children
    let booksListDiv=document.getElementById('booksList');
    while (booksListDiv.firstChild) {
        booksListDiv.removeChild(booksListDiv.firstChild);
    }
    //print book cards
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
        const paraRead=document.createElement('p');
       
        //build text content

        const textContent=
            `Title:  ${myLibrary[i].title}
             Author: ${myLibrary[i].author}
             Pages:  ${myLibrary[i].pages}
             ${myLibrary[i].read}
             `
        const textTitle = `Title:  ${myLibrary[i].title}`;
        const textAuthor = `Author: ${myLibrary[i].author}`;
        const textPages = `Pages:  ${myLibrary[i].pages}`;
        const textRead = `${myLibrary[i].read}`;
             
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
        textNode =document.createTextNode(textRead);
        paraRead.appendChild(textNode);
        //append paras to div
        div.appendChild(paraTitle);
        div.appendChild(paraAuthor);
        div.appendChild(paraPages);
        div.appendChild(paraRead);
        //create read button
        const readButton = document.createElement('button');
        let readButtonText = 'Tag as Read';
        if (textRead == 'Read already') {
           readButtonText = 'Tag as Not Read';
        }
        readButton.textContent=(readButtonText);
        //id readbutton
        readButton.setAttribute('class','readButton');
        //set data attribute
        readButton.setAttribute('data-index',i);
         //append button
         div.appendChild(readButton);
        

         //create remove button
         const button = document.createElement('button');
         button.textContent=('Remove');
         //set id button
         button.setAttribute('id',i);
         button.setAttribute('class','delete');
         
         //append button
         div.appendChild(button);
        
        //append div to booksList div
        document.getElementById('booksList').appendChild(div);
       
    }

}
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
    if (document.getElementById('read').checked==true) {
        newBook.read='Read already';
    };
    myLibrary.push(newBook)
    //printNewBook(newBook);
    printBooks(myLibrary);
}


//initial books
const theHobbit=new Book('The Hobbit','J.R.R. Tolkien', 295, 'Read already');
const theDwarf=new Book('The Dwarf','J.R.R. John ', 300, 'Not read');
const bookThree=new Book('Book Three','Author 3', 235, 'Read already');
const bookFour=new Book('Book Four','Author 4', 4, 'Not read');


//console.log(theHobbit.info());
//add initial books
addBookInitially(theHobbit);
//console.log(myLibrary);
addBookInitially(theDwarf);
addBookInitially(bookThree);
addBookInitially(bookFour);
printBooks(myLibrary);
//click event listener
document.getElementById('addButton').addEventListener('click',addBook);
//finished here
document.addEventListener('click',function(e){
    if(e.target.className== 'delete'){
        //remove book
        myLibrary.splice(e.target.id,1);
        printBooks(myLibrary);
    }
    if(e.target.className== 'readButton'){
        //get index
        let index=e.target.dataset.index;
        //set read button text
        if (myLibrary[index].read=='Read already') {
            myLibrary[index].read='Not read';
        } else {
            myLibrary[index].read='Read already';
        }
        printBooks(myLibrary);
     }
 });