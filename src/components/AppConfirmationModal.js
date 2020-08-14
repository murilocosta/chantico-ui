import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

export default function AppConfirmationModal({ title, open, content, onClose, onConfirm }) {
  return (
    <Dialog keepMounted open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          {'Cancel'}
        </Button>
        <Button color="primary" onClick={onConfirm}>
          {'Confirm'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
