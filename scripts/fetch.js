let searchImages= async (url)=>{

    try{
        let res = await fetch(url);
        let data = await res.json();
     //   console.log("data",data);
        return data;
    }catch(err){
        console.log(err)
    }
};
let append = (data,container)=>{
    container.innerHTML=null;
    data.forEach(({alt_description, urls: {small}})=>{
        
        let div = document.createElement("div")
        div.setAttribute("class","images")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        img.src=small;
        h3.innerText=alt_description;
        div.append(img,h3);
        container.append(div)
    })
}

export { searchImages, append };