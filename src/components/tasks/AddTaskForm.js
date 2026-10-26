import { Box, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import TaskContext from "../../context/TaskContext";

export default function AddTaskForm() {
  const { dispatchAction } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const isButtonDisabled = title.trim() === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskTitle = title.trim();
    if (!taskTitle) return;
    dispatchAction("ADD_TASK", {
      title: taskTitle,
      details: details.trim(),
    });

    setTitle("");
    setDetails("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        bgcolor: "background.paper",
        direction: "rtl",
      }}
    >
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        variant="outlined"
        placeholder="أضف عنوان المهمة..."
        inputProps={{ "aria-label": "عنوان المهمة" }}
      />

      <TextField
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        fullWidth
        minRows={2}
        maxRows={4}
        variant="outlined"
        placeholder="أضف تفاصيل أو وصف للمهمة (اختياري)..."
        inputProps={{ "aria-label": "وصف المهمة" }}
      />

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        disabled={isButtonDisabled}
        sx={{
          py: "10px",
          fontWeight: "bold",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        إضافة المهمة
      </Button>
    </Box>
  );
}
