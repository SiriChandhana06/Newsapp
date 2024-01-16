function Product(props){

    //console.log(props);
    return(
        /*<div className="product">
            <h3>Samsung MS1</h3>
            <p>23000 Rs</p>
        </div>*/
        <div className="product">
            <img className="img" src={props.url}/>
            <h3>{props.name}</h3>
            <p>{props.price} Rs</p>
        </div>
    );
}
export default Product;