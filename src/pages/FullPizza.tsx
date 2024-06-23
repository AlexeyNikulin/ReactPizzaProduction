import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SkeletonFullPizza from '../components/FullPizza/SkeletonFullPizza';
import FullPizzaItem from '../components/FullPizza';
import { IFullPizzaItem } from '../redux/pizza/types';

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = React.useState<IFullPizzaItem>();

    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(
                    'https://6648c5a24032b1331bec60ed.mockapi.io/items',
                    {
                        params: {
                            id: id,
                        },
                    },
                );
                setPizza(data[0]);
            } catch (error) {
                alert('Ошибка при получении пиццы!');
                navigate('/');
            }
        }

        fetchPizza();
    }, []);

    return (
        <div className="container">
            {!pizza ? <SkeletonFullPizza /> : <FullPizzaItem {...pizza} />}
        </div>
    );
};

export default FullPizza;
