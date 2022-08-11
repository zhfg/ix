import * as React from 'react';
import { useState } from 'react';
import { Paper, Typography, Link as MuiLink, Box } from '@mui/material';
import ContactsIcon from '@mui/icons-material/AccountCircle';
import DealIcon from '@mui/icons-material/MonetizationOn';
import { useCreatePath, SelectField, useRecordContext } from 'react-admin';
import { Link } from 'react-router-dom';

// import { sectors } from './sectors';
import { ProjectAvatar } from './ProjectAvatar';
import { Project } from '../../types';

export const ApplicationCard = (props: { record?: Project }) => {
    const [elevation, setElevation] = useState(1);
    const createPath = useCreatePath();
    const record = useRecordContext<Project>(props);
    if (!record) return null;

    return (
        <MuiLink
            component={Link}
            to={createPath({
                resource: 'project',
                id: record.id,
                type: 'show',
            })}
            underline="none"
            onMouseEnter={() => setElevation(3)}
            onMouseLeave={() => setElevation(1)}
        >
            <Paper
                sx={{
                    height: 200,
                    width: 195,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1em',
                }}
                elevation={elevation}
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <ProjectAvatar />
                    <Box textAlign="center" marginTop={1}>
                        <Typography variant="subtitle2">
                            {record.name}
                        </Typography>
                        {/* <SelectField
                            color="textSecondary"
                            source="sector"
                            // choices={sectors}
                        /> */}
                    </Box>
                </Box>
                <Box display="block" justifyContent="space-around" width="100%">
                    <Box display="flex" alignItems="center">
                        <ContactsIcon color="disabled" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="subtitle2" sx={{ mb: -1 }}>
                                {record.git_url}
                            </Typography>
                            {/* <Typography variant="caption" color="textSecondary">
                                {record.nb_contacts > 1
                                    ? 'contacts'
                                    : 'contact'}
                            </Typography> */}
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <DealIcon color="disabled" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="subtitle2" sx={{ mb: -1 }}>
                                {record.devuser_mail}
                            </Typography>
                            {/* <Typography variant="caption" color="textSecondary">
                                {record.nb_deals > 1 ? 'deals' : 'deal'}
                            </Typography> */}
                        </div>
                    </Box>
                </Box>
            </Paper>
        </MuiLink>
    );
};