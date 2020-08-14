import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CategoryTableRow({ category, onUpdate, onDelete }) {
  const handleUpdate = () => onUpdate(category);
  const handleDelete = () => onDelete(category);

  return (
    <TableRow>
      <TableCell>{category.name}</TableCell>
      <TableCell>{category.color}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleUpdate}>
          <CreateIcon />
        </IconButton>
        <IconButton color="secondary" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
