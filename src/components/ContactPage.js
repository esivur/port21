import React, {useState} from 'react';
import Resume from './resume'

const ProductsPage = () => {
    const [products] = useState([
        { 
            image: "images/resume.png"
            },  
         
    ]);

    console.log('products :: ',products);
    return(
         <div class="flexbox_container">
             {
                 products.map((product, index) => <Resume product={product} />)
             }
         </div>
           );
}

export default ProductsPage;