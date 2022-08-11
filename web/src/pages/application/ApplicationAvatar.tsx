import * as React from 'react';
import { Avatar } from '@mui/material';
import { useRecordContext } from 'react-admin';

import { Application } from '../../types';

export const ApplicationAvatar = (props: {
    record?: Application;
    size?: 'small' | 'large';
}) => {
    const { size = 'large' } = props;
    const record = useRecordContext<Application>(props);
    if (!record) return null;
    return (
        <Avatar
            src={process.env.PUBLIC_URL + record.logo}
            alt={record.name}
            sx={{
                bgcolor: 'aliceblue',
                '& img': { objectFit: 'contain' },
            }}
            imgProps={{ className: size }}
        />
    );
};
