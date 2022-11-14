import React, {useState} from 'react';
import "./style.css";

const Products2 = () => {
    const[red, setRed] = useState(false);

    

    const [productsArray, setProductsArray] =useState([
        {
            id:1,
            img:"Metabnb for frontend/imagecard1.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:2,
            img:"Metabnb for frontend/imagecard2.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:3,
            img:"Metabnb for frontend/imagecard3.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:4,
            img:"Metabnb for frontend/imagecard4.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:5,
            img:"Metabnb for frontend/imagecard5.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:6,
            img:"Metabnb for frontend/imagecard6.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:7,
            img:"Metabnb for frontend/imagecard7.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:8,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:9,
            img:"Metabnb for frontend/imagecard3.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:10,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:11,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:12,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:13,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:14,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:15,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
        {
            id:16,
            img:"Metabnb for frontend/imagecard8.png",
            name:"Desert King",
            price:"1MBT per night",
            distance:"2345km away",
            availability:"available for 2weeks stay",
            marked:false,
        },
    ]);

    
    const heartClick=(id)=>{
        setProductsArray(productsArray.map(product=>{
            if(product.id===id){
              return{
                ...product,marked:!product.marked
              }
            }
            return product;
          }))
    }


    const mapproducts = productsArray.map(item=>(
        <div className='card' key={item.id}>
            <div className='top'>
                <img src={item.img} alt={item.id}></img>
                <i className='icofont-heart' onClick={()=>heartClick(item.id)} style={{color:item.marked ? "red" : "white"}}></i>

            </div>

            <div className='bottom'>
                <div className='bottom-first'><span className='name'>{item.name}</span><span className='price'>{item.price}</span></div>
                <div className='bottom-second'><span className='distance'>{item.distance}</span><span className='availabitiy'>{item.availability}</span></div>
                <div className='review'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>

                </div>

            </div>
        </div>
    ))
  return (
    <div className='products2'>
       

        <div className='card-wrapper'>

            {mapproducts}


        </div>
      
    </div>
  );

}

export default Products2;
