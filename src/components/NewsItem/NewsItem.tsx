import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './NewsItem.module.css';
import { FC, useEffect } from 'react';
import { formatSeconds } from '../../utils/formatSeconds';
import { useGetNewsByIdQuery } from '../../services/newsApi';

interface NewsItemProps {
    id: number;
}

const NewsItem: FC<NewsItemProps> = ({ id }) => {
    const { data: item, refetch } = useGetNewsByIdQuery(id.toString());

    useEffect(() => {
        refetch();
    }, [id]);

    return (
        <>
            {item && (
                <Card
                    sx={{ minWidth: 275 }}
                    style={{ color: '#f1faee', backgroundColor: '#1d3557' }}
                >
                    <CardContent style={{ padding: '8px' }}>
                        <Typography variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <div className={styles.item__row}>
                            <Typography sx={{ fontSize: 14 }}>{item.score} point</Typography>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography>by</Typography>
                                <Typography variant="h6">{item.by}</Typography>
                            </div>
                            <Typography variant="body2">
                                {formatSeconds(Date.now() / 1000 - item.time)}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Open</Button>
                    </CardActions>
                </Card>
            )}
        </>
    );
};

export default NewsItem;
