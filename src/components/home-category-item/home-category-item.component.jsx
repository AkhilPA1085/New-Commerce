import './home-category-item.styles.scss'

const HomeCategoryItem = ({category})=>{
    return(
        <div className="category-container">
          <div className="background-image" style={{backgroundImage:`url(${category.imageUrl})`}}/>
          <div className="category-body-container">
            <h2 className="category">{category.title}</h2>
            <p className="shop-now">Shop Now</p>
          </div>
        </div>
    )
}
export default HomeCategoryItem;