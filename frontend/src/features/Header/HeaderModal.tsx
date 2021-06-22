import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { IDepartment } from "api/types/user";
import { useUserStore } from "store/hooks";

import { Modal } from "components/Modal";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (department: IDepartment | null) => void;
}

export const HeaderModal: React.FC<IModalProps> = ({ open, onClose, onSubmit }) => {
  const user = useUserStore();
  const [selectedDepartment, setSelectedDepartment] = useState(user.selectedDepartment);

  const handleSubmit = () => {
    onSubmit(selectedDepartment);
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      width={600}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box>
        <Box mb={2}>
          <Typography variant="h6">Выберите подразделение</Typography>
        </Box>
        <Box mb={3}>
          <Autocomplete
            value={selectedDepartment}
            fullWidth
            id="combo-box-demo"
            options={user.departments}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Подразделение" variant="outlined" />
            )}
            onChange={(event, value) => {
              setSelectedDepartment(value);
            }}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={onClose} variant="contained">
            Отмена
          </Button>
          <Box ml={2}>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Сохранить
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
