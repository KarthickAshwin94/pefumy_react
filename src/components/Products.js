import one_image from '../assets/images/Product1.jpeg'
import two_image from '../assets/images/Product2.jpeg'
import three_image from '../assets/images/Product3.jpeg'

function Products(){
    return( 
      <div className="products">
        <div className="product_one">
          <img src={one_image}alt="" />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="product_two">
          <img src={two_image}alt="" />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="product_three">
          <img src={three_image}alt="" />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
      
      </div>
    );
  }

  export default Products