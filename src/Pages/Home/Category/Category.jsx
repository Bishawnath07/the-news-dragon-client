import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';
import useSetTitle from '../../../Hook/useSetTitle';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    useSetTitle('Home')
    return (
        <div>
           { id && <h4>this  category News :{categoryNews.length}</h4>}
            {
                categoryNews.map(news => <NewsCart
                key={news._id}
                news = {news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;