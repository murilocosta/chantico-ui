import React from 'react';

import CategoryForm from './CategoryForm';
import CategoryTable from './CategoryTable';
import { Typography } from '@material-ui/core';

export default function CategoryManager() {
  return (
    <React.Fragment>
      <Typography variant="h4">
        {'Categories management'}
      </Typography>
      <CategoryForm />
      <CategoryTable />
    </React.Fragment>
  );
}
