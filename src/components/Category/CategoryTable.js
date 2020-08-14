import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core';

import { selectCategoryList } from '../../store/selectors/category';
import {
  editCategory as editAction,
  deleteCategory as deleteAction,
  listCategories as listAction
} from '../../store/actions/category';
import CategoryTableRow from './CategoryTableRow';
import CategoryModal from './CategoryModal';

const useStyles = makeStyles({
  root: {
    width: '97%',
    margin: '0 auto'
  }
});

const CategoryTable = ({ categories, editCategory, deleteCategory, listCategories }) => {
  const [deleted, setDeleted] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    listCategories();
  }, [
    listCategories
  ])

  const handleCategoryUpdate = (category) => editCategory(category);

  const handleCategoryDelete = (category) => {
    deleteCategory(category.id);
    setDeleted(null);
  };

  const handleActionConfirmationOpened = (category) => setDeleted(category);

  const handleActionConfirmationClosed = () => setDeleted(null);

  return (
    <div>
      <TableContainer className={classes.root} component={Paper} square>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{'Name'}</TableCell>
              <TableCell>{'Color'}</TableCell>
              <TableCell align="right">{'Update/Delete'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <CategoryTableRow
                key={category.id}
                category={category}
                onUpdate={handleCategoryUpdate}
                onDelete={handleActionConfirmationOpened}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CategoryModal
        category={deleted}
        onClose={handleActionConfirmationClosed}
        onConfirm={handleCategoryDelete}
      />
    </div>
  );
}

export default connect(selectCategoryList, {
  editCategory: editAction,
  deleteCategory: deleteAction,
  listCategories: listAction
})(
  CategoryTable
);
