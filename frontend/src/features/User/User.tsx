import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";

import { setUser } from "store/user";
import { getUser } from "api/user";

interface IUserProps {
  children: React.ReactNode;
}

export const User: React.FC<IUserProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then((response) => {
        dispatch(setUser(response.data));
      })
      .catch((err) => {
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return <Box py={2}>{children}</Box>;
};
