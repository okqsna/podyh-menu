import './Main.scss';
import SideMenu from '../SideMenu/SideMenu';
import ContentMenu from '../ContentMenu/ContentMenu';
import Data from '../../data.json';
import { useState, useTransition, useEffect } from 'react';
import Favorites from '../Favorites/Favorites';
const Main=()=>{
    const [isPending, startTransition]=useTransition();
    const newData=Data;
    const [selectedCategory, setSelectedCategory]=useState(null);
    const [selectedSubcategory, setSelectedSubcategory]=useState(null);
    const [showSubcategories, setShowSubcategories]=useState(false);
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const newPrData=newData.filter(item=>{return(item.new)});
   
    // onClick for categories
    const CategoryClick=(category)=>{
        if(selectedCategory===category && showSubcategories){
            startTransition(()=>{
                setShowSubcategories(false);
            })
        }
        else{
            startTransition(()=>{
                setSelectedCategory(category);
                setSelectedSubcategory(null);
                setShowSubcategories(true);
            })
        }
    }
    // onClick for subcategories
    const SubcategoryClick=(subcategory)=>{
        startTransition(()=>{
            setSelectedSubcategory(subcategory);
        })
    }
  // filtering data array 
   const filteredData = newData.filter(item => {
    return (
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedSubcategory || item.subcategory === selectedSubcategory)
    );
  });
 
  // adding products to favorites
  const AddToFavorites = (product) => {
    setFavorites(() => {
      const updatedFavorites = [...favorites, product];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  // removing products from favorites
  const removeFromFavorites = (product) => {
    setFavorites(() => {
      const updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  // saving Favorite products to localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
 // onClick to show Favorite component
 const FavoritesClick = () => {
  if (showFavorites) {
      startTransition(()=>{
          setShowFavorites(false);
      })
  } else {
      startTransition(()=>{
          setShowFavorites(true);
      })
  }
};

    const totalPrice=favorites.reduce((acc, item)=>acc+item.price,0);
    const totalBuys=favorites.length;
    return(
        <main className='Main'>
            <div className="content__Main">
                <SideMenu newData={newData} selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} CategoryClick={CategoryClick} SubcategoryClick={SubcategoryClick} showSubcategories={showSubcategories} totalBuys={totalBuys} favorites={favorites} FavoritesClick={FavoritesClick} newPrData={newPrData}/>
                {showFavorites ?(<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} totalPrice={totalPrice} setShowFavorites={setShowFavorites}/>):( <ContentMenu filteredData={filteredData} AddToFavorites={AddToFavorites} totalBuys={totalBuys} favorites={favorites} removeFromFavorites={removeFromFavorites}/>)}           
            </div>
        </main>
    )
}
export default Main;