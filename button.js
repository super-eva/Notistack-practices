import React from 'react';
import { useSnackbar } from 'notistack';

export const MyButton = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love hooks');
  };

  return (
    <button onClick={handleClick}>Show snackbar</button>
  );
}

