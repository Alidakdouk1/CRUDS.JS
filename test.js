/*let names=['fvdhhe','jhbfe','hbebfu','gryguygf','hjeyufeu','Hsein'];
let Ages=['18 years ','13 years','100 years','60 years','40 years','23 years'];

let countainer=document.createElement('div');
document.body.appendChild(countainer);
countainer.style.textAlign='center';

function element(names,Ages){

    // Elements
    let card=document.createElement('div');


    let tittle=document.createElement('h2');
    let Age=document.createElement('p');
    let images=document.createElement('img');
    

    // Content
    let head=document.createTextNode(names);
    let AgeContent=document.createTextNode(Ages);
    images.src="Screenshot 2025-02-19 141314.png";

    tittle.appendChild(head);
    Age.appendChild(AgeContent);
    

    //style

    card.style.width='200px';
    card.style.background='#444';
    card.style.color='#fff';
    card.style.padding='10px';
    card.style.margin='2px';
    card.style.display='inline-block';




    images.style.width='100%';

    card.appendChild(tittle);
    card.appendChild(Age);
    card.appendChild(images);

    countainer.appendChild(card);
}

for(let i=0;i<100;i++){
    element(names[i],Ages[i]);
}*/










/*let dolar = document.getElementById('dolar');
let lira=document.getElementById('lira');

dolar.onkeyup = function(){
    lira.value = dolar.value*90;

}

lira.onkeyup = function(){
    dolar.value = lira.value/90

}*/






/*

let after=document.getElementById('after');
let before=document.getElementById('before');
let inside=document.getElementById('inside');
let content=document.getElementById('content');
let countainer=document.getElementById('container');


countainer.style.backgroundColor='red';
countainer.style.height='50px';


after.onclick= function(){
 countainer.after(content)
}

before.onclick= function(){
    countainer.before(content)
   }


inside.onclick= function(){
    countainer.append(content)
   }*/






/*
let hello=document.getElementById('hello');

//when click add class = name for <p>hello</p>
hello.onclick= function(){

    hello.classList.add("name");
}

//remove the class by oncontextmenu=right click in mouse
hello.oncontextmenu= function(){

    hello.classList.remove("name");
}

// when click add then click remove
hello.onclick= function(){

    hello.classList.toggle("name");
}*/







/* navbar
let btnopen=document.getElementById('open');
let btnclose=document.getElementById('close');

let countainer=document.querySelector('.countainer');


btnclose.onclick= function(){
    countainer.classList.add('hide');
    this.classList.add('hide');
    btnopen.classList.remove('hide');

}

btnopen.onclick=function(){
countainer.classList.remove('hide');
btnclose.classList.remove('hide');
btnopen.classList.add('hide');


}*/




/*   Auto event
let text=document.getElementById('txt');
let mybtn=document.getElementById('btn');

window.onload=function(){
    text.focus();
    mybtn.click();
    text.value='HI!!'
    text.placeholder='Hello'
}
text.oncontextmenu=function(){
    text.blur();
}

mybtn.onclick=function(){
    mybtn.style.backgroundColor='red';
}*/


/*
let btnn=document.getElementById('btn');


onscroll=function(){
    if(this.scrollY>=400){

        btnn.style.display='block';

    }else{
        btnn.style.display='none';
    }
}

btnn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"})
}*/



/* local storage and session
let text= document.getElementById('text');



text.onkeyup=function(){
    localStorage.setItem('txt',text.value)
}


if(localStorage.length>0){
    text.value= localStorage.getItem('txt')
}*/


/* local and session storage
if(localStorage.length>0){

document.body.style.background=localStorage.color //<--getItem.color;
}

function setcolor(color){
   // document.body.style.background=color;
    

       localStorage.setItem('color',color)
       document.body.style.background=color;
    
}*/


let Tittle=document.getElementById('tittle');
let Price=document.getElementById('price');
let Texes=document.getElementById('texes');
let Ads=document.getElementById('ads');
let Discount=document.getElementById('discount');
let Total=document.getElementById('total');
let Count=document.getElementById('count');
let Category=document.getElementById('category');
let Submit=document.getElementById('submit');

//console.log(Tittle,Price,Texes,Ads,Discount,Total,Count,Category,Submit);
let mood='create';
let temp;

// Fuction calculate Total :

function getTotal(){
 if( Price.value!='' && Price.value>0){
    //The pluse (+) in result for transform from string to number
    let result= (+Price.value + +Texes.value + +Ads.value)- +Discount.value ;
    Total.innerHTML=result;
    Total.style.background='#0e8f23';
 }else{
    Total.innerHTML = '';
    Total.style.background='#a00d02';
 }
}

// Function Creat Product :

// the array for save objects the in object there are items

let dataPro;
if( localStorage.getItem('product') != null){

   dataPro=JSON.parse(localStorage.product);
}else{

    dataPro =[];

}

Submit.onclick=function(){

let newPro={

    Tittle:Tittle.value.toLowerCase(),
    Price:Price.value,
    Texes:Texes.value,
    Ads:Ads.value,
    Discount:Discount.value,
    Total:Total.innerHTML,
    Count:Count.value,
    Category:Category.value.toLowerCase(),

}

// Function count number of Items :
if(Tittle.value!='' && Price.value !='' && Category.value!='' && newPro.Count <101){
if(mood === 'create'){
    if(newPro.Count>1){
     for(let i=0;i<newPro.Count;i++)
        dataPro.push(newPro);
    }else{
      dataPro.push(newPro);
    }
}else{
    dataPro[temp ] =newPro;
    mood ='create';
    Submit.innerHTML='Create';
    Count.style.display='block';
}
clearData();
}
//dataPro.push(newPro);
localStorage.setItem('product',JSON.stringify(dataPro));
//console.log(dataPro)

readData()
}


// Fuction Save data in local Storage :
// Function Clear data when creat Items :

function clearData(){
    Tittle.value='';
    Price.value='';
    Texes.value='';
    Ads.value='';
    Discount.value='';
    Total.innerHTML='';
    Price.value='';
    Count.value='';
    Category.value='';
    Total.style.background='#a00d02';

}

// Function Read the outputs :

function readData(){
getTotal();
let table = '';
for(let i=0;i<dataPro.length;i++){
table+=  `
         <tr>
                <td> ${i+1} </td>
                <td>${dataPro[i].Tittle}</td>
                <td>${dataPro[i].Price}</td>
                <td>${dataPro[i].Texes}</td>
                <td>${dataPro[i].Ads}</td>
                <td>${dataPro[i].Discount}</td>
                <td>${dataPro[i].Total}</td>
                <td>${dataPro[i].Category}</td>
                <td><button onclick="updateData(${i})" id="update">Update</button></td>
                <td><button onclick="deleteData( ${i} )" id="delete">Delete</button></td>



            </tr>` ;
            
//console.log(table)
}


document.getElementById('tbody').innerHTML =table;
let btnDeleteAll=document.getElementById('deleteAll');
if(dataPro.length>0){
    btnDeleteAll.innerHTML=  `<button onclick="deleteAll()">Delete All (${dataPro.length})</button>  `
}else{
    btnDeleteAll.innerHTML='';
}

}
readData();

// Function Delete Items :

function deleteData(i){

     dataPro.splice(i,1);
     localStorage.product= JSON.stringify(dataPro);
     readData();
}



function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    readData();
}

// Function Update Items :

function updateData(i){
    Tittle.value=dataPro[i].Tittle;
    Price.value=dataPro[i].Price;
    Texes.value=dataPro[i].Texes;
    Ads.value=dataPro[i].Ads;
    Discount.value=dataPro[i].Discount;

    getTotal();
    Count.style.display='none';
    Category.value=dataPro[i].Category;

    Submit.innerHTML='Update';
    mood='update';
    temp = i ;
   
   scroll({
    top:0,
    behavior:"smooth",
   })
}
// Function Search about Items :

let searchMood='tittle';

function getSearchMood(id){
  let Search=document.getElementById('search');
    

  if(id === 'searchTittle'){
     searchMood='tittle';
    Search.placeholder='search By Tittle';


  }else{
     searchMood='category';
     Search.placeholder='search By Category';
    
  }
  Search.focus();
  Search.value='';
  readData();
}


function searchData(value){
    let table='';
    if(searchMood=='tittle'){
       
        for(let i=0;i<dataPro.length;i++){
            if(dataPro[i].Tittle.includes(value.toLowerCase())){
                table+=  `
                   <tr>
                       <td> ${i+1} </td>
                       <td>${dataPro[i].Tittle}</td>
                       <td>${dataPro[i].Price}</td>
                       <td>${dataPro[i].Texes}</td>
                       <td>${dataPro[i].Ads}</td>
                       <td>${dataPro[i].Discount}</td>
                       <td>${dataPro[i].Total}</td>
                       <td>${dataPro[i].Category}</td>
                       <td><button onclick="updateData(${i})" id="update">Update</button></td>
                       <td><button onclick="deleteData( ${i} )" id="delete">Delete</button></td>
       
       
       
                    </tr>` ;

            }
        }
    }else{
        for(let i=0;i<dataPro.length;i++){
            if(dataPro[i].Category.includes(value.toLowerCase())){
                table+=  `
                   <tr>
                       <td> ${i+1} </td>
                       <td>${dataPro[i].Tittle}</td>
                       <td>${dataPro[i].Price}</td>
                       <td>${dataPro[i].Texes}</td>
                       <td>${dataPro[i].Ads}</td>
                       <td>${dataPro[i].Discount}</td>
                       <td>${dataPro[i].Total}</td>
                       <td>${dataPro[i].Category}</td>
                       <td><button onclick="updateData(${i})" id="update">Update</button></td>
                       <td><button onclick="deleteData( ${i} )" id="delete">Delete</button></td>
       
       
       
                    </tr>` ;

            }
        }
        
    }

    document.getElementById('tbody').innerHTML = table;
}

// Function Clean Data :