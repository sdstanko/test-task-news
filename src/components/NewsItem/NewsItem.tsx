import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './NewsItem.module.css';

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

export default function NewsItem() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ color: '#f1faee', backgroundColor: '#1d3557' }}>
            <CardContent style={{padding: '8px'}}>
                <Typography variant="h5" component="div">
                    Braid's long-delayed anniversary edition finally has a release date
                </Typography>
                <div className={styles.item__row}>
                    <Typography sx={{ fontSize: 14 }}>1 point</Typography>
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <Typography>by</Typography>
                        <Typography variant="h6">fjk</Typography>
                    </div>
                    <Typography variant="body2">1 minute ago</Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Open</Button>
            </CardActions>
        </Card>
    );
}
