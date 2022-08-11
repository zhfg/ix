import * as React from 'react';
import { useState, ChangeEvent } from 'react'
import {
    List,
    TopToolbar,
    ExportButton,
    CreateButton,
    Pagination,
    useGetIdentity,
    useShowContext,
    EditButton,
    ShowBase,
} from 'react-admin';

import { Paper, Typography, Link as MuiLink, Box, Divider } from '@mui/material';
import { Project } from '../../types'

import { ImageList } from './GridList';
// import { CompanyListFilter } from './CompanyListFilter';

export const ProjectEdit = () => {
    return (
        <Typography>
            ProjectEdit
        </Typography>
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
            <ProjectTopPannel />
            <Divider textAlign="left">
            Porject info
            </Divider>
            <Box mt={2} display="flex" p={5}>
                <Box flex="2">
                    <Typography variant="h5" mt={2}>
                    Name: {record.name}
                    </Typography>
                    <Typography variant="h5"  mt={2}>
                    Env: {record.env}
                    </Typography>
                    <Typography variant="h5" mt={2}>
                    Infra_arch: {record.infra_arch}
                    </Typography>
                    <Typography variant="h5" mt={2}>
                    Git_url: {record.git_url}
                    </Typography>
                    <Typography variant="h5" mt={2}>
                    Tenant_id: {record.tenant_id}
                    </Typography>
                    <Typography variant="h5" mt={2}>
                    Project_id: {record.project_id}
                    </Typography>
                </Box>
            </Box>
            <Divider textAlign="left">
                Application List
            </Divider>
        </>
    );
}

const ProjectTopPannel = () => {
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