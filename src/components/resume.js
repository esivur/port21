const resume = (props) => {
    const {name, description, price, image} = props.product;
    const productNumber = props.productNumber;
    return(
        <div className={'flexbox_item2 flexbox_item_${productNumber}'}> 
        <img src={image} width="590px" height="" alt={name} />
            </div>
    );
}

export default resume;