import './SideMenu.scss';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';

const SideMenu=({newData, selectedCategory, selectedSubcategory, CategoryClick,SubcategoryClick, showSubcategories, totalBuys, favorites,FavoritesClick})=>{
    return(
        <section className='SideMenu'>
            <div className="place__SideMenu">
                <div className="content__place__SideMenu">
                    <div className="pic__content__place__SideMenu"></div>
                    <p>В закладі</p>
                </div>
            </div>
            <div className="menu__SideMenu">
                <p className='cap__menu__SideMenu'>Меню:</p>
                <div className="categories__menu__SideMenu">
                    <CategoriesMenu newData={newData} selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} CategoryClick={CategoryClick} SubcategoryClick={SubcategoryClick} showSubcategories={showSubcategories}/>
                </div>
            </div>
            {
                favorites.length>0 ? (
                <div className="fav__SideMenu" onClick={()=>FavoritesClick()}>
                <p>Ваші обрані:</p>
                <div className="main__fav__SideMenu">
                    <div className="img__main__fav__SideMenu"></div>
                    <p>Позицій:<span>{totalBuys}</span></p>
                </div>
                </div>):null
            }
        </section>
    )
}
export default SideMenu;