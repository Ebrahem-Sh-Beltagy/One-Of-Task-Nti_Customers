
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
    Ele.setAttribute(attr.key, attr.val)
     return Ele
 }
getApi.then((x)=>{
   let y = x.json().then(
       (y)=> {
           y.forEach((index, i) => {
          const card=   createMyOwnElement(getParent, "div", null, "card", {key:"style" , val:"width 80%"})
          const id =   createMyOwnElement(card, "span", y[i].id, null, {key:"style" , val:"width 100%"})
          const albumId =   createMyOwnElement(card, "span", y[i].albumId, null, {key:"style" , val:""})

        //   const thumbnailUrl =  createMyOwnElement(card, "img", y[i].thumbnailUrl, null, {key:"src" , val: thumbnailUrl})
          const cardBody= createMyOwnElement(card, "div", null, "cardBody",{key:"style" , val:"80"})
          const title =  createMyOwnElement(cardBody, "h5", y[i].title, null, {key:"style" , val: "color:red"})

           
              
            console.log( y[i]);
              
           });
       

        // console.log(y[0].id)
       }
   ) 
     
}).catch(e=>{
    console.log(e.message)
})
// console.log(`${xx + "jj"}`);



