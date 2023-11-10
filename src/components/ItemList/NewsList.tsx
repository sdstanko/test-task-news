import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';

const ItemList = () => {
    return (
        <div className={styles.list}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    );
};

export default ItemList;
