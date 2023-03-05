/* eslint-disable react/jsx-no-undef */
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export const Home: React.FC = () => {
  const navigate = useNavigate();
  const context = { signed: true };
  return (
    <>
      <div className="flex-grow-1">
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className="flex-grow-1">
              MyList
            </Typography>
            {!context.signed ? (
              <div>
                <Button
                  onClick={() => {
                    navigate('/login');
                  }}
                  color="inherit"
                  variant="text"
                  component="button"
                >
                  Login
                </Button>
                {' / '}
                <Button
                  onClick={() => {
                    navigate('/register');
                  }}
                  color="inherit"
                  variant="text"
                  component="button"
                >
                  sign-up
                </Button>
              </div>
            ) : (
              <></>
            )}
          </Toolbar>
        </AppBar>
        <div className="py-1" />
      </div>
      <div className="d-flex flex-direction-column justify-content-start align-items-start mt-5"></div>
    </>
  );
};
