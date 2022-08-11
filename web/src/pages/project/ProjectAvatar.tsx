import * as React from 'react';
import { Avatar } from '@mui/material';
import { useRecordContext } from 'react-admin';

import { Project } from '../../types';

export const ProjectAvatar = (props: {
    record?: Project;
    size?: 'small' | 'large';
}) => {
    const { size = 'large' } = props;
    const record = useRecordContext<Project>(props);
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
