import * as React from 'react';
import { useState, ChangeEvent } from 'react'
import {

    TopToolbar,
    ExportButton,
    CreateButton,
    Pagination,
    useGetIdentity,
    ReferenceManyField,
    useShowContext,
    useListContext,
    EditButton,
    ShowBase,
    RecordContextProvider,
} from 'react-admin';

import {
    Paper,
    Link as MuiLink, 
    Box, 
    Button,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Tabs,
    Tab,
    Divider, } from '@mui/material';
import { Application, Project } from '../../types'
import { Link as RouterLink } from 'react-router-dom';

import { ImageList } from './GridList';
// import { CompanyListFilter } from './CompanyListFilter';

export const ProjectShow = () => {
    return (
        <ShowBase>
            <ProjectShowContext />
        </ShowBase>
    )
};

const ProjectShowContext = (props: any) => {
    const { record, isLoading } = useShowContext<Project>();
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };
    if (isLoading || !record) return null;
    return (
        <>
            <ProjectShowAction />
            <Divider textAlign="left">
            Porject info
            </Divider>
            <Box mt={2} display="flex" pt={2} pl={5}>
                <Box flex="2">
                    <Typography variant="subtitle2" mt={2}>
                    Name: {record.name}
                    </Typography>
                    <Typography variant="subtitle2"  mt={2}>
                    Env: {record.env}
                    </Typography>
                    <Typography variant="subtitle2" mt={2}>
                    Infra_arch: {record.infra_arch}
                    </Typography>
                </Box>
                <Box flex="2">
                    <Typography variant="subtitle2" mt={2}>
                    Git_url: {record.git_url}
                    </Typography>
                    <Typography variant="subtitle2" mt={2}>
                    Tenant_id: {record.tenant_id}
                    </Typography>
                    <Typography variant="subtitle2" mt={2}>
                    Project_id: {record.project_id}
                    </Typography>
                </Box>
            </Box>
            <Divider textAlign="left">
                Application List
            </Divider>
            <ReferenceManyField
                reference="application"
                target="project_id"
                sort={{ field: 'last_name', order: 'ASC' }}
            >
                <ProjectIterator />
            </ReferenceManyField>
        </>
    );
}

const ProjectShowAction = () => {
    return (
        <Box>
            <TopToolbar>
                <EditButton label="Edit Project" />
            </TopToolbar>
        </Box>
    )
}

const ProjectEditButton = () => {

}

const ProjectIterator = () => {
    const { data: applications, isLoading } = useListContext<Application>();
    if (isLoading) return null;
    const now = Date.now();
    return (
        <Box>
            {applications.map(
                application => (
                    <RecordContextProvider key={application.id} value={application}>
                        <ListItem
                            button
                            component={RouterLink}
                            to={`/application/${application.id}/show`}
                        >
                            <ListItemText
                                primary={`${application.app_id} ${application.app_fullname}`}
                                secondary={
                                    <>
                                        {application.app_type}
                                    </>
                                }
                            />

                        </ListItem>
                    </RecordContextProvider>
                )
            )}

        </Box>
    );
}