// creating a class templete or blue print
class Header {
    constructor(){
        this.color = 'red';
    }

    changeColor = () => {
        document.getElementById('demo').innerHTML += this;
        // with arrow function the 'this' represent the property inside the Header object while in normal function, the 'this' represents the 'this' represents the button  element that called the fucntion
    }
}

// to use a class, you have to create an object of that class using the new keyword

const myHeader = new Header(); // now the object of the class is created, it can be used by the variable name myHeader
console.log(myHeader);
// alert('amadi');

// the window object calls the function or methode inside the class Header

window.addEventListener('load', myHeader.changeColor);

// a button object calls the function when clicked

document.getElementById('btn').addEventListener('click', myHeader.changeColor);

// let has a block scopte line in loops while var has a function scope
// const also has a block scope. const does not define a constant value but a constant reference to a value. therefore, conatant variables can not be reassigned to another variable.

// array: map

// map can be used to generate a list from an array

const fruits = ['orange','pear','grape','banana','apple','mango'];

fruits.map((x)=> {
    if(x==='grape'){
        document.write(`<p> ${x} is available </p>`);
    }
//    using if else or else in map can print out on wanted results
 
})

// steps to commit and push files to a repo
        /*
            >git status : gives the status of tracked and untracked files or commited files
            >git add filename : adds a single file in a folder
            >git add . : adds all files in the folder to local repo for committing
            >git log : shows the files to be committed
            >git commit -m "a disc message" : commits the files to local repo
            >git remote add origin https://github.com/chilemati/noreact.git : sets the repo in your github to push the files
            >git push origin master: pushes the files to the ropo 
        */

// destructuring a array means taking out of the array all the items we need to use.
