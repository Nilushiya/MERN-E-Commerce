import React , {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
    const {allProducts} = useContext(ShopContext)
    console.log({allProducts})
    const {productId} = useParams();
    console.log({productId})
    const product = allProducts.find((e) =>
        e._id === productId)
        console.log(product)
  return (
    <div className='Product'>
        <Breadcrum  product = {product} />
        <ProductDisplay product={product}/>
        <DescriptionBox />
        <RelatedProduct product={product}/>
    </div>
  )
}

export default Product