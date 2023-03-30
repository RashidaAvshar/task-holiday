
import { connect } from 'react-redux';

const Card = (props) =>{
    const {image, title, price, description} = props;
    return (
      <div className='card-section2'>
      <img src={image} alt="product" />
      <p>{title}</p>
      <p>{description}</p>
      <div className='icon'>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      </div>
      <span> <span>$</span> {price}</span>   
      <i className="fa-solid fa-cart-shopping" 
      onClick={()=> {
        props.dispatch({
          type: "ADDTOCARD"
        })
      }}></i>
      
  </div>
    )
  }

  
  
function mapStateProps (state) {
    return{
      count: state.count
    }
  }
  export default connect(mapStateProps) (Card);


