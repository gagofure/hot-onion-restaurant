import React from 'react';

const FoodItem = ({item}) => {
  const {title, img, subtitle, price} = item;
  return (
      <div className="col-xl-4">
        <div className="single-item text-center m-4">
            <div className="card p-4">
                <img className="card-img-top" src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                    <h4 className="price">${price}</h4>
                </div>
            </div>
        </div>
      </div>
  );
};

export default FoodItem;