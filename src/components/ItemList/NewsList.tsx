import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';
import { News } from '../../types/news';
import { Button, CircularProgress } from '@mui/material';

const ItemList = () => {
    const [ids, setIds] = useState<number[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    const fetchData = async () => {
        setIsFetching(true);
        const { data } = await axios.get<number[]>(
            'https://hacker-news.firebaseio.com/v0/newstories.json',
        );
        const slicedIds = data.slice(0, 100);
        setIds(slicedIds);
        setIsFetching(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className={styles.list__button}>
                <Button variant="outlined" onClick={() => fetchData()}>
                    Reload
                </Button>
            </div>
            <div className={styles.list}>
                {isFetching ? (
                    <CircularProgress size={60} style={{margin: '0 auto'}}/>
                ) : (
                    ids && ids.map((id, i) => <NewsItem id={id} key={i} />)
                )}
            </div>
        </div>
    );
};

export default ItemList;
