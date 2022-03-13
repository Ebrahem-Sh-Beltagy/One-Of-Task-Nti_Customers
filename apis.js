
//fetch api
// function getApis (link){
//     fetch(link)
//     .then(x=>{
//         x.json()
//         .then(y =>{
//             console.log(y)
//         })
//     }).catch(e=>{
//         console.log("error");
        
//     })
// }
// const getApis = async function(link,callback){
//     let data = await fetch(link)
//     let jsonData = await data.json()
//     callback(jsonData)
// }

const getApi = fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
const getParent = document.querySelector(".parent")
const createMyOwnElement = (parent, ele, txt, classes, attr)=>{
    const Ele = document.createElement(ele)
    parent.appendChild(Ele)
    Ele.textContent = txt
    Ele.className = classes
    Ele.setAttribute(attr.key || null, attr.val || null)
     return Ele
 }
getApi.then((x)=>{
    x.json().then(
       (y)=> {
        y.forEach((index, i) => {
            const card=   createMyOwnElement(getParent, "div", null, "card col-sm-3 col-md-3 col-xl-3 ml-l", {key:"style" , val:"width:100%"})
            const albumId =   createMyOwnElement(card, "h3", `AlbumId: ${y[i].albumId}`, null, {key:"style" , val:""})
            const id =   createMyOwnElement(card, "p",`Id: ${y[i].id}`, null, {key:"style" , val:""})
  
            const thumbnailUrl =  createMyOwnElement(card, "img", y[i].thumbnailUrl, "img-fluid", {key:"src" , val: y[i].thumbnailUrl})
            const cardBody= createMyOwnElement(card, "div", null, "cardBody",{key:"style" , val:"80"})
            const title =  createMyOwnElement(cardBody, "h5", `Title: ${y[i].title}`, null, {key:"style" , val: "color:red"})
            
              console.log( y[i])
                
             })
          console.log(y[0].url)
        // console.log(y[0].id)
       }
   ) 
     
}).catch(e=>{
    console.log(e.message)
})
// console.log(`${xx + "jj"}`);



