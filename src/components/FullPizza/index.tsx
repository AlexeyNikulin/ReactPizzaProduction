import React from 'react';
import { Link } from 'react-router-dom';
import { IFullPizzaItem } from '../../redux/pizza/types';

const FullPizzaItem: React.FC<IFullPizzaItem> = ({ imageUrl, title, price }) => {
    return (
        <>
            <img src={imageUrl} />
            <div className="pizza-block-item">
                <h2 className="pizza-block-item__title">{title}</h2>
                <h4 className="pizza-block-item__price">{price} ₽</h4>
            </div>
            <Link to="/">
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </>
    );
};

export default FullPizzaItem;
