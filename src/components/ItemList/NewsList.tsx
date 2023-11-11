import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';
import { Button, CircularProgress } from '@mui/material';
import { useGetAllNewsQuery } from '../../services/newsApi';

const ItemList = () => {
    const [ids, setIds] = useState<number[]>([]);
    const { data: allIds, refetch, isFetching } = useGetAllNewsQuery('');

    useEffect(() => {
        if (allIds) {
            setIds(allIds.slice(0, 100));
        }

        setInterval(() => {
            refetch();
        }, 60000);
    }, [allIds]);

    return (
        <div>
            <div className={styles.list__button}>
                <Button variant="outlined" onClick={() => refetch()}>
                    Reload
                </Button>
            </div>
            <div className={styles.list}>
                {isFetching ? (
                    <CircularProgress size={60} style={{ margin: '0 auto' }} />
                ) : (
                    ids && ids.map((id, i) => <NewsItem id={id} key={i} />)
                )}
            </div>
        </div>
    );
};

export default ItemList;
