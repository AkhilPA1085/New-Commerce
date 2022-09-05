import HomeCategoryItem from '../home-category-item/home-category-item.component';

import './directory.styles.scss'

const Directory = ({categories})=>{
    return(
        <div className="container directories-container">
            {categories.map((category)=>
                <HomeCategoryItem category={category} key={category.id}/>
            )}
        </div>
    )
}

export default Directory;