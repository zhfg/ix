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
import { Application } from '../../types'
// import { CompanyListFilter } from './CompanyListFilter';

export const ApplicationList = () => {
    const { identity } = useGetIdentity();
    if (!identity) return null;
    return (
        <List
            actions={<ApplicationListActions />}
            // aside={<CompanyListFilter />}
            // filterDefaultValues={{ id }}
            pagination = {false}
            // pagination={<Pagination rowsPerPageOptions={[15, 25, 50, 100]} />}
            // perPage={25}
            sort={{ field: 'record.app_shortname', order: 'ASC' }}
            component="div"
        >
            <ImageList />
        </List>
    );
};

const ApplicationListActions = () => {
    return (
        <TopToolbar>
            <ExportButton />
            <CreateButton
                variant="contained"
                label="New Application"
                sx={{ marginLeft: 2 }}
            />
        </TopToolbar>
    );
};
