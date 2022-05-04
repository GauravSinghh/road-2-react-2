//Link: https://api.unsplash.com/search/photos/?per_page=10&query=office&client_id=sOVVKg1lc5pakQE_Htljm84OGP-NLmtXTNQqa5ttzi0;


import {navbar} from '../components/navbar.js'
let nav =document.querySelector("#navbar")
nav.innerHTML=navbar();

import {searchImages,append} from '../scripts/fetch.js';

let svalue = document.getElementById("query");
let search = (e)=>{
    if(e.key=="Enter")
    {
      var value=svalue.value;
     
        
        let url = `https://api.unsplash.com/search/photos/?per_page=10&query=${value}&client_id=sOVVKg1lc5pakQE_Htljm84OGP-NLmtXTNQqa5ttzi0`
      searchImages(url).then((data)=>{
            console.log(data);
            let container = document.getElementById("container")
            append(data.results,container)
        })
       // searchImages();
    }

}

function sortfunc(){
    console.log("inside")
    var value=svalue.value;
    let asort = document.getElementById("sort").value;
    let filter = document.getElementById("filter").value;
    console.log(value,filter)
    let url = `https://api.unsplash.com/search/photos/?per_page=10&color=${filter}&order_by=${asort}&query=${value}&client_id=sOVVKg1lc5pakQE_Htljm84OGP-NLmtXTNQqa5ttzi0`
    searchImages(url).then((data)=>{
        console.log(data);
        let container = document.getElementById("container")
        append(data.results,container)
    })
}
let sort = document.getElementById("sort");
sort.addEventListener("change",sortfunc)

function filterfunc(){
    console.log("inside, filter")
    var value=svalue.value;
    let asort = document.getElementById("sort").value;
    let afilter = document.getElementById("filter").value;
    let url = `https://api.unsplash.com/search/photos/?per_page=10&color=${afilter}&order_by=${asort}&query=${value}&client_id=sOVVKg1lc5pakQE_Htljm84OGP-NLmtXTNQqa5ttzi0`

    searchImages(url).then((data)=>{
        console.log(data);
        let container = document.getElementById("container")
        append(data.results,container)
    })
}
let filter = document.getElementById("filter");
filter.addEventListener("change",filterfunc)




document.getElementById("query").addEventListener("keydown",search);


let categories = document.getElementById("categories").children;

for(let el of categories)
{
    el.addEventListener("click",cSearch);
}

function cSearch(){
    console.log(this.id)
    let url = `https://api.unsplash.com/search/photos/?per_page=10&query=${this.id}&client_id=sOVVKg1lc5pakQE_Htljm84OGP-NLmtXTNQqa5ttzi0`
    searchImages(url).then((data)=>{
        let container = document.getElementById("container")
        append(data.results,container)
    })
}


