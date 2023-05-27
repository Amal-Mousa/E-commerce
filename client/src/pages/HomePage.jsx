import ProductCard from '../Components/ProductCard';
import '../assets/styles/layout.css';


const categoryOptions = ['All', 'Short by shoes', 'Short by shirts', 'Short by jacket', 'short by trousers ', 'Short by sweater'];


const HomePage = () => {
  return (
    <div className="parent">
      <aside className="sidebar">
        <p className="filter-title">Filters</p>
        <input type="text" placeholder="Search" />
        <fieldset className="price-filter">
          <legend>Price</legend>
          <input type="range" min={0} max={9} />
        </fieldset>
        <fieldset className="category-filter">
          <legend>Category</legend>
          <div className="radio-container">
            {
              categoryOptions.map((option, index) => (
                <label htmlFor={option} className="radio-label" key={index}>
                  <input className="cat-input" id={option} name="category" type="radio" value={index} />
                  {option}
                </label>
              ))
            }
          </div>
        </fieldset>

      </aside>
      <div className="small-container">
        <div className="row row-2">
          <h2 className="product-title">All Products</h2>
        </div>
        <div className="product-list">
          <ProductCard />
        </div>
        <div className="page-btn" id="pagination">
        </div>
      </div>
    </div>
  )
}

export default HomePage
