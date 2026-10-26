import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export default function DeleteTaskDialog({
  isOpen,
  onClose,
  selectedTask,
  onDelete,
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} dir="rtl">
      <DialogTitle> هل تريد حقاً حذف هذه المهمة؟</DialogTitle>
      <DialogContent>
        سيتم حذف المهمة: <strong>{selectedTask?.title || ""}</strong> ولا يمكن
        التراجع عن هذا الإجراء.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>إلغاء</Button>
        <Button variant="contained" color="error" onClick={onDelete}>
          نعم قم بالحذف
        </Button>
      </DialogActions>
    </Dialog>
  );
}
