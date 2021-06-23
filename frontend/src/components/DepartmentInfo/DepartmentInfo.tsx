import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { IDepartment } from "api/types/user";

interface IDepartmentInfo {
  department: IDepartment;
}

export const DepartmentInfo: React.FC<IDepartmentInfo> = ({ department }) => {
  return (
    <Paper elevation={3}>
      <Box display="flex" py={2} px={2}>
        <Box>
          <Box>
            <Typography variant="subtitle2">Подразделение</Typography>
          </Box>
          <Box>
            <Typography color="textSecondary" variant="body2">
              {department.title}
            </Typography>
          </Box>
        </Box>
        <Box ml={4}>
          <Box>
            <Typography variant="subtitle2">Адрес доставки</Typography>
          </Box>
          <Box>
            <Typography color="textSecondary" variant="body2">
              {department.address}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
