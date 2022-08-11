import * as React from 'react';
import {
    List,
    TopToolbar,
    ExportButton,
    CreateButton,
    Pagination,
    useGetIdentity,
} from 'react-admin';

import { ImageList } from './GridList';
// import { CompanyListFilter } from './CompanyListFilter';

export const ProjectList = () => {
    const { identity } = useGetIdentity();
    if (!identity) return null;
    return (
        <List
            actions={<ProjectListActions />}
            filterDefaultValues={{ sales_id: identity?.id }}
            pagination = {false}
            sort={{ field: 'record.app_shortname', order: 'ASC' }}
            component="div"
        >
            <ImageList />
        </List>
    );
};

const ProjectListActions = () => {
    return (
        <TopToolbar>
            <ExportButton />
            <CreateButton
                variant="contained"
                label="New Porject"
                sx={{ marginLeft: 2 }}
            />
        </TopToolbar>
    );
};
