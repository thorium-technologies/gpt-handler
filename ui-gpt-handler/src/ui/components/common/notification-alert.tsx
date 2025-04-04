import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

type AlertSeverity = 'success' | 'info' | 'warning' | 'error';
type AlertVariant = 'filled' | 'outlined' | 'standard';

interface NotificationAlertProps {
  severity: AlertSeverity;
  title?: string;
  message: string;
  variant?: AlertVariant;
  onClose?: () => void;
}

/**
 * Renders an MUI Alert with optional title and close functionality.
 */
export const NotificationAlert: React.FC<NotificationAlertProps> = ({
  severity,
  title,
  message,
  variant = 'filled',
  onClose,
}) => {
  return (
    <Alert
      severity={severity}
      variant={variant}
      onClose={onClose} // If onClose is provided, MUI shows a close icon automatically
      sx={{ width: '100%' }}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
};
