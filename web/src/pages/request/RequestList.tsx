import {
    List,
    Datagrid,
    TextField
} from 'react-admin'

export const RequestList = (props: any) => {
    return (
        <>
        <List 
        {...props}
        >
            <Datagrid>
                <TextField source="name"></TextField>
                <TextField source="location"></TextField>
            </Datagrid>
        </List>
        </>
    );
};
