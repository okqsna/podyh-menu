import React from 'react';
import './Favorites.scss';
const Favorites = ({ favorites, removeFromFavorites, totalPrice, setShowFavorites }) => {
  return (
    <section className="Favorites">
      <h3>Ваші обрані</h3>
      <div className='cards__Favorites'>
      {favorites.length > 0 ? (
           <>
         <p className='totalPrice__Favorites'>Загальна вартість: <span>{totalPrice} UAH</span></p>
          {favorites.map((item) => (
              <div key={item.id} className='card__cards__Favorites'>
              <div className="txt__card__cards__Favorites">
                <h4>{item.name}</h4>
                <p className='price__txt'>{item.price} {item.currency}</p>
                <p className='caption__txt'>{item.caption}</p>
                <div className="chars__txt__card__cards__Favorites">
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
                <button className='remove__card__cards__Favorites'  onClick={() => removeFromFavorites(item)}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='svg__remove'>
                  <path d="M6.11 17.5C3.9 15.43 2 12.48 2 8.68C2 5.59 4.49 3.09 7.56 3.09C9.38 3.09 10.99 3.97 12 5.33C12.5138 4.63588 13.183 4.07173 13.954 3.68274C14.725 3.29376 15.5764 3.09076 16.44 3.09C17.59 3.09 18.66 3.44 19.55 4.05M21.74 7C21.91 7.53 22 8.1 22 8.69C22 15.69 15.52 19.82 12.62 20.82C12.28 20.94 11.72 20.94 11.38 20.82C10.73 20.6 9.91 20.22 9.02 19.69M22 2L2 22" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="img__card__cards__Favorites">
              <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="empty__Favorites">
           <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.11 17.5C3.9 15.43 2 12.48 2 8.68C2 5.59 4.49 3.09 7.56 3.09C9.38 3.09 10.99 3.97 12 5.33C12.5138 4.63588 13.183 4.07173 13.954 3.68274C14.725 3.29376 15.5764 3.09076 16.44 3.09C17.59 3.09 18.66 3.44 19.55 4.05M21.74 7C21.91 7.53 22 8.1 22 8.69C22 15.69 15.52 19.82 12.62 20.82C12.28 20.94 11.72 20.94 11.38 20.82C10.73 20.6 9.91 20.22 9.02 19.69M22 2L2 22" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
           <p>Немає обраних</p>
           <button className='btn__empty__Favorites' onClick={()=>setShowFavorites(false)}>Повернутись до меню</button>
        </div>
      )}
      </div>
    </section>
  );
};

export default Favorites;