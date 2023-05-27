import '../assets/styles/card.css';


const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-tumb">
        <i>
          <img src='../assets/imgs/sidebar.jpg' width="100%" alt="image" />
        </i>
      </div>
      <div className="product-details">
        <span className="product-catagory">looleknkdjkgandkniajkldnioejo</span>
        <h4>Hi there</h4>
        <p>lkdknajkansviewnkdjivondakjkajdkgadsj</p>
        <div className="product-bottom-details">
          <div className="product-price">33$</div>
          <div className="product-is">
            <i>
              <i className="fa fa-shopping-cart" />
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
