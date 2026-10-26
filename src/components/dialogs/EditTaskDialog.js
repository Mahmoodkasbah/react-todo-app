import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
const fieldSx = {
  "& .MuiInputBase-input": { textAlign: "right" },
  "& .MuiInputLabel-root": {
    right: 0,
    left: "auto",
    transformOrigin: "right",
  },
};
export default function EditTaskDialog({
  isOpen,
  onClose,
  selectedTask,
  setSelectedTask,
  onSave,
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} dir="rtl">
      <DialogTitle sx={{ textAlign: "right", fontWeight: 700 }}>
        تعديل المهمة
      </DialogTitle>

      <DialogContent>
        <TextField
          dir="rtl"
          margin="dense"
          label="تعديل العنوان"
          fullWidth
          variant="standard"
          value={selectedTask?.title || ""}
          onChange={(e) =>
            setSelectedTask({
              ...selectedTask,
              title: e.target.value,
            })
          }
          sx={fieldSx}
        />
        <TextField
          margin="dense"
          label="تفاصيل المهمه"
          fullWidth
          variant="standard"
          value={selectedTask?.details || ""}
          onChange={(e) =>
            setSelectedTask({
              ...selectedTask,
              details: e.target.value,
            })
          }
           sx={fieldSx}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>إلغاء</Button>
        <Button variant="contained" onClick={onSave}>
          حفظ التغيرات
        </Button>
      </DialogActions>
    </Dialog>
  );
}
