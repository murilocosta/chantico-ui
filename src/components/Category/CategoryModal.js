import React from 'react';

import AppConfirmationModal from '../AppConfirmationModal';

export default function CategoryModal({ category, onClose, onConfirm }) {
  const open = category !== null;
  return category && (
    <AppConfirmationModal
      title="Action Confirmation"
      content={`Remove category ${category.name} permanently?`}
      open={open}
      onClose={onClose}
      onConfirm={() => onConfirm(category)}
    />
  );
}
