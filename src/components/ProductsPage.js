import React, {useState} from 'react';
import Product from './Product'

const ProductsPage = () => {
    const [products] = useState([
        {   name: "Gateway v1",
            description: "1st Project",
            price: "HTML/CSS",
            image: "images/atl.png",
            link: "https://codepen.io/esivur/project/editor/AwqeYJ",
            },
        {   name: "Ecom v1",
            description: "Retail Site for afdk",
            price: "HTML/CSS",
            image: "images/afdk.png",
            link: "https://infallible-nightingale-864ed1.netlify.app/",
            },
        {   
            name: "Ecom v2",
            description: "Retail Site for afdk",
            price: "React",
            image: "images/afdk.png",
            link: "https://github.com/esivur/ecomm2",
            },
        {   name: "Reservation",
            description: "Reservation App",
            price: "CSS",
            image: "images/food.jpg",
            link: "https://github.com/esivur/reservePage",
            },
        {   name: "Nav Bar",
            description: "Animated Navigation Bar Practice",
            price: "CSS",
            image: "images/download.png",
            link: "https://determined-tesla-f256e4.netlify.app/js_hamburgernavbar-main/",
            },
        {   name: "Mexico API",
            description: "API Group Project",
            price: "JavaScript",
            image: "images/covid199.jpg",
            link: "https://github.com/RobLazCDMX/Hope-Hackathon",
            },      
        {   name: "To-Do List",
            description: "React Practice",
            price: "React",
            image: "images/logo192.png",
            link: "https://github.com/esivur/To-Do-API-master",
            },
        {   name: "Tic Tac Toe",
            description: "React Practice",
            price: "JavaScript",
            image: "images/logo192.png",
            link: "https://github.com/esivur/Tic-Tac-Toe-main",
            }, 
        {   name: "When it's cold outside~",
            description: "Weather App",
            price: "Node",
            image: "images/android-weather-icons-png-12.png",
            link: "https://github.com/esivur/weatherapp",
            },
        {   name: "Gotta Catch 'em All",
            description: "Pokemon App",
            price: "Node",
            image: "images/pokemon.png",
            link: "https://github.com/esivur/Inquirer-app",
            },
            {   name: "Over 99 Billion Served",
            description: "Burger App ",
            price: "React",
            image: "images/mcd.png",
            link: "https://github.com/esivur/burgerapp",
            },
            {   name: "How do you know that name?",
            description: "Voice Recognition",
            price: "API",
            image: "images/unnamed.png",
            link: "https://github.com/esivur/speechapp",
            }, 
         
    ]);

    console.log('products :: ',products);
    return(
         <div class="flexbox_container">
             {
                 products.map((product, index) => <Product product={product} productNumber={index +1} />)
             }
           
         </div>
           );
}

export default ProductsPage;