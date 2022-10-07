import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'common',
   templateUrl: './app.component.html', // here we are connecting our app.component.html(we use 2 methode either this or our own template given as below)
  // template:`<h1 id="h1">hello1</h1>    // here we can create our own HTML page without directing to app.component.html 
  // <h2>ggg</h2> <p>jasjdasjd</p>`,
  styleUrls: ['./app.component.css'] // here calling app.component.css
  // styles: [(h1.style.color)='red']  //here we can create our own style to html
})
export class AppComponent {  //under this braces we define functions and action oriented code(as controller in laravel)
  title = 'angular-app1';
array1=['sss','fff','jjj','lll'];

// json array

product =[
  {
    'pname':"soap",
    'p_qty':'5',
    'price':'30'
  },
  {
    'pname':"brush",
    'p_qty':'51',
    'price':'40'
  },
  {
    'pname':"oil",
    'p_qty':'8',
    'price':'90'
  }
]

//ngif
isAuthenticated=false;//this check in html file inside a div to check display it or not.Display div(if it is true)
switchVar="p2";//for switch case
var1=false;//for if else
var2="3"
size=false;
clor=false;

cardItem=[
  {
'pname1':'p1',
'price':'565',
'stock':'23',
'imges':'assets/images/img1.jpeg'
  },
  {
  'pname1':'p2',
  'price':'345',
  'stock':'34',
  'imges':'assets/images/img1.jpeg'
  },  
  {
  'pname1':'p3',
  'price':'190',
  'stock':'89',
  'imges':'assets/images/img1.jpeg'
   }
]

b=true;
//one way binding
btnclick(){
  console.log("clicked");
}
btnclick1(a:any){
  console.log(a);
}
// two way binding ()
username1="";
color1="yellow";
// for custome pipe
students=["aaa",'bbb','ccc','dddd'];
splchrname="asa$#hgjh&*"
}
