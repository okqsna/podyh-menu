import React from 'react';
import './ContentMenu.scss';


const ContentMenu = ({ filteredData, AddToFavorites, favorites, removeFromFavorites}) => {
  // checking if product is already chosen as favorite
  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };
  // adding to favorites
  const clickAddToFavorites = (item) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item);
    }else{
      AddToFavorites(item);
    }
  };
  return (
    <section className='ContentMenu'>
      <div className="cards__ContentMenu">
      {filteredData && filteredData.map((item) => (
          <div key={item.id} className='card__cards__ContentMenu'>
            <div className="txt__card__cards__ContentMenu">
              <h4>{item.name}</h4>
              <p className='price__txt'>{item.price} {item.currency}</p>
              <p className='caption__txt'>{item.caption}</p>
              <div className="chars__txt__card__cards__ContentMenu">
                {
                  item.mass ? (<div className="mass__chars__txt">
                  <div className="img__mass__chars__txt"></div>
                   <p>{item.mass} {item.mass_units}</p>
                </div>):null
                }
              {
                item.new ? ( <div className="new__chars__txt">
                <div className='img__new__chars__txt'></div>
                <p>Новинка</p>
              </div>):null
              }
              {
                item.acuteness ? (
                  <div className='acuteness__chars__txt'>
                    <div className="img__acuteness__chars__txt"></div>
                    <p>{item.acuteness}</p>
                  </div>
                ):null
              }
              {
                item.vegetarian ?(<div className='vegetarian__chars__txt'>
                  <div className="img__vegetarian__chars__txt"></div>
                  <p>Вегетаріанська</p>
                </div>):null
              }
              </div>
              <button className="btnFav__card__cards__ContentMenu" onClick={()=>{clickAddToFavorites(item)}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill={isFavorite(item.id) ? '#000' : 'none'} xmlns="http://www.w3.org/2000/svg">
                <path d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C12.5138 4.64548 13.183 4.08134 13.954 3.69235C14.725 3.30337 15.5764 3.10037 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              </button>
            </div>
            <div className="img__card__cards__ContentMenu">
            <img src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default ContentMenu;