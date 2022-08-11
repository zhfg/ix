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
    ShowBase,
} from 'react-admin';

import { Paper, Typography, Link as MuiLink, Box, Divider } from '@mui/material';
import { Application } from '../../types'

import { ImageList } from './GridList';
// import { CompanyListFilter } from './CompanyListFilter';

export const ApplicationShow = () => {
    return (
        <ShowBase>
            <ApplicationShowContext />
        </ShowBase>
    )
};

const ApplicationShowContext = (props: any) => {
    const { record, isLoading } = useShowContext<Application>();
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };
    if (isLoading || !record) return null;
    return (
        <>
            <Divider textAlign="left">
                Application info
            </Divider>
            <Box mt={2} display="flex" flex="2">

                <Box flex="2">
                    <Typography variant="subtitle2">
                        Application Name: {record.app_fullname}
                    </Typography>
                    <Typography variant="subtitle2">
                        Application Name: {record.app_fullname}
                    </Typography>
                </Box>
                <Box flex="2">
                    <Typography variant="h5">
                        Application Name: {record.app_fullname}
                    </Typography>
                </Box>
                <Box flex="2">
                    <Typography variant="h5">
                        Application Name: {record.app_fullname}
                    </Typography>
                </Box>
                {/* <Box flex="1">
                    <Card>
                        <CardContent>
                            <Box display="flex" mb={1}>
                                <LogoField />
                                <Box ml={2} flex="1">
                                    <Typography variant="h5">
                                        {record.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        <TextField source="sector" />,{' '}
                                        <SelectField
                                            source="size"
                                            choices={sizes}
                                        />
                                    </Typography>
                                </Box>
                            </Box>
                            <Tabs
                                value={tabValue}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleTabChange}
                            >
                                {record.nb_contacts && (
                                    <Tab
                                        label={
                                            record.nb_contacts === 1
                                                ? '1 Contact'
                                                : `${record.nb_contacts} Contacts`
                                        }
                                    />
                                )}
                                {record.nb_deals && (
                                    <Tab
                                        label={
                                            record.nb_deals === 1
                                                ? '1 deal'
                                                : `${record.nb_deals} Deals`
                                        }
                                    />
                                )}
                            </Tabs>
                            <Divider />
                            <TabPanel value={tabValue} index={0}>
                                <ReferenceManyField
                                    reference="contacts"
                                    target="company_id"
                                    sort={{ field: 'last_name', order: 'ASC' }}
                                >
                                    <ContactsIterator />
                                </ReferenceManyField>
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <ReferenceManyField
                                    reference="deals"
                                    target="company_id"
                                    sort={{ field: 'name', order: 'ASC' }}
                                >
                                    <DealsIterator />
                                </ReferenceManyField>
                            </TabPanel>
                        </CardContent>
                    </Card>
                </Box>
                <CompanyAside /> */}
            </Box>
            <Divider textAlign="left">
                Project List
            </Divider>
        </>
    );
}