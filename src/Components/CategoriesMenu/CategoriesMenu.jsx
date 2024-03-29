import React from "react";
import './CategoriesMenu.scss';
const CategoriesMenu=({ newData, selectedCategory, CategoryClick,selectedSubcategory, SubcategoryClick, showSubcategories })=>{
  // getting unique categories  
  const categories = [...new Set(newData.map(item => item.category))];
  // getting unique subcategories
  const getSubcategories = (category) => {
        const subcategories = [...new Set(newData.filter(item => item.category === category).map(item => item.subcategory))];
        return subcategories;
    };
  
    return(
        <section className="CategoriesMenu">
         <div className="main__CategoriesMenu">
        {categories.map((category, index) => (
          <p key={index} onClick={() => CategoryClick(category)} style={{fontWeight:selectedCategory===category ?'800':'700'}} className="p__main__CategoriesMenu"> {category}</p>
        ))}
        </div>
   
        <div className="subcategories__CategoriesMenu">
          {showSubcategories && selectedCategory && (
            <div>
                {getSubcategories(selectedCategory).map((subcategory, index) => (
                  <p key={index} onClick={() => SubcategoryClick(subcategory)} style={{ fontWeight: selectedSubcategory === subcategory ? '800':'700' }}>{subcategory}</p>
                ))}
            </div>
          )}
        </div>
        </section>
    )
}
export default CategoriesMenu;