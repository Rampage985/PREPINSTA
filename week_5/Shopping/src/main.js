let shop =document.getElementById("shop")
 let shopItemData= [{
    id:"shoe",
    name:"Nike Shoe",
    price: 100,
    des: "Lorem ipsum dolor sit amet.",
    img:"https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 },{
    id:"Cam",
    name:"Camera",
    price: 250,
    des: "Lorem ipsum dolor sit amet.",
    img:"https://images.unsplash.com/photo-1597939001150-4d20b4c4a8d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbWFyYXxlbnwwfHwwfHx8MA%3D%3D"
 },{
    id:"Ear",
    name:"Earphone",
    price: 50,
    des: "Lorem ipsum dolor sit amet.",
    img:"https://images.unsplash.com/photo-1580236176063-bea7f16aec30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D"
 },{
    id:"Head",
    name:"Headphone",
    price: 150,
    des: "Lorem ipsum dolor sit amet.",
    img:"https://images.unsplash.com/photo-1536656930057-9252abf296a5?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 },{
    id:"Je",
    name:"Jeans",
    price: 20,
    des: "Lorem ipsum dolor sit amet.",
    img:"https://images.pexels.com/photos/2897533/pexels-photo-2897533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 },{
    id:"Wat",
    name:"Watch",
    price: 500,
    des: "Lorem ipsum dolor sit amet.",
    img:"https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 }];

 let basket =JSON.parse(localStorage.getItem("data")) || [];
 let theshop =()=>{
    return (shop.innerHTML=shopItemData.map((x)=>{ 
        let {id,name,price,des,img} =x;
        let search = basket.find((x)=>x.id === id) || [];
        return`
        <div id=product-id-${id} class="item">
        <img width="219" height="200" src="${img}" alt="">
    <div class="detail">
        <h3>${name}</h3>
        <p>${des}</p>
        <div class="price-quantity">
            <h2 class="price">$${price}</h2>
            <div class="buttons">
                            
            <img onclick="decrement(${id})" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAvUlEQVRYR+2WUQ6DIBBEgXiverPqzTyYsR0wTZoWeYb44ceQLIkMu4yP/SCGm414Mz/BhuhGTMiEiADp7iETIgKku4dMiAiQTj00qsDju8igjzVp2n5KJ70cylrZcXBuSVw05agOMjQp61ky884X/d9HrznetRSGeQtrrttrKMrQ7qTl6djC37mzVroNjUrOUR2ty2mwXKTl6CJ09o4u20c9dNlBZwvZEJEyIRMiAqS7h0yICJDuHjIhIkD6G78YFSWtOeXZAAAAAElFTkSuQmCC"/>


            <div id=${id} class="quantity">
             ${search.item === undefined ? 0 : search.item}
            </div>
                            
                <img onclick="increment(${id})" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACaklEQVRYR+1Xu07DMBRNUdlhhaX9AmBgLwsr8AdlgIEFmItEkWAGFgYYyB8AKwvdGeAP6AIr3akK51R2dOM6dpw2okOv5DqJr889uS83lWjKpDJlfKIZIV9ETA+1jQ2PuH/3gUxy3ST0mwafw+0gxs/uJI26sOyE+DRNbQdP6K3SxRWyFVjfVgwYtrUcbBrQWVV6nSLhdlXZAgC/BYk6rrseUszBU6Vzhpn3QeIr+3ugNRVijNmXS6UTovvfFKEe5sX/9hDtf2DUFJFjzFcOUqV7iLYZMoaOYnoJZOeQawPJkbmnhfpSfB7OdXTQAL2kDW3guqOsMOklAYfzhks6Z1m9uhpZwUlL8SW1NnCJiyN1E2PWyV2UkEyDVI/LSyirBZjeYclr4ix7M98YQnrnQb1cFzP7WxLavIS4/wWjoYCyekwb674+RDK64Y7ghBBqAigruXVofYTMfBxptiGEaFTGnnnEfJLiIyTXmcjMn5SEEpKAtvONIdVh7eCaQwqbrK4u2wvlKnsJWOR80/tJlHlI6aHV1nEymn0qmBDBQs83TUjuY/Wx649IaMgIYJ5v1zZgy7NDPLM115RqEUIEkMmdk0+iZsu9ZLEoIdncQgk5/ycVJUQSTYxaIJsu9GPXnnEIBXLJpz4OoRZMHGC8YtxgPFtNVqPNqD/UW1d6F2V4SFYa8Z8w9Plk2mNH3hIPeZgysa1S1EN7QLtNECvRFz6blm0W8GX3ib9vS2JtH9d3kyZEvB+MqgI+wZwVihba77n6zutDb76MkGlMeoo5lBkCpcgQM4cyPaMBi4bM9ZJjrc0I+dw3dR76A2ojdyVUunHNAAAAAElFTkSuQmCC"/>
            </div>
        </div>
    </div>
    
</div>
`}).join(""));}

 theshop();

 let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
    update(selectedItem.id);
    localStorage.setItem("data",JSON.stringify(basket))
    // console.log(basket);
}
    
let decrement =(id)=>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
   if(search===undefined)return;

   else if (search.item === 0) {return;}
    
    else {
      search.item -= 1;
    }
    
    update(selectedItem.id);
    basket= basket.filter((x)=> x.item !==0);
    
    localStorage.setItem("data",JSON.stringify(basket))
}

let update =(id)=>{
   let search=basket.find((x)=>x.id === id)
   console.log(search.item);
   document.getElementById(id).innerHTML=search.item;  

   calculation();
};

let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0); 
}

calculation();