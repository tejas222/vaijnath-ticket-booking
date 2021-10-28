import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
  DateInput,
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const BookingList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='fullname' />
      <DateField source='date' />
      <TextField source='slot' />
    </Datagrid>
  </List>
);
