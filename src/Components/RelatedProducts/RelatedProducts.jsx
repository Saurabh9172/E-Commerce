import { useContext } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const RelatedProducts = ({ category, currentProductId }) => {

   const { all_product } = useContext(ShopContext);

  // Filter related products
  const related = all_product.filter(
    (item) => item.category === category && item.id !== currentProductId
  ).slice(0,4);


  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
          {related.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
    </div>
  )
}

export default RelatedProducts