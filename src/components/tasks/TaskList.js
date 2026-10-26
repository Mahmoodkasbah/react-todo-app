import { Box, Typography, Snackbar, Alert } from "@mui/material";
import TaskCard from "./TaskCard";
import { useContext, useState } from "react";
import TaskContext from "../../context/TaskContext";
import EditTaskDialog from "../dialogs/EditTaskDialog";
import DeleteTaskDialog from "../dialogs/DeleteTaskDialog";
// إعداد رسائل التنبيه حسب نوع العملية

const SNACKBAR_CONFIGS = {
  edit: { message: "تم تعديل المهمة بنجاح", severity: "info" },
  delete: { message: "تم حذف المهمة بنجاح", severity: "error" },
  complete: { message: "تم إنجاز المهمة بنجاح", severity: "success" },
};
export default function TaskList() {
  const {
    filteredTasks: tasks,
    currentFilter,
    dispatchAction,
  } = useContext(TaskContext);

  const [dialogType, setDialogType] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [snackbarType, setSnackbar] = useState(null);

  // تحديد محتوى رسالة التنبيه بناءً على نوع العملية
  const activeSnackbar = snackbarType ? SNACKBAR_CONFIGS[snackbarType] : null;

  const handleOpenDialog = (type, task) => {
    setSelectedTask({ ...task });
    setDialogType(type);
  };
  const handleClose = () => {
    setDialogType(null);
    setSelectedTask(null);
  };
  const handleDelete = () => {
    dispatchAction("DELETE_TASK", { id: selectedTask.id });
    handleClose();
    setSnackbar("delete");
  };
  const handleSaveEdit = () => {
    const title = selectedTask.title.trim();
    if (!title) return;

    dispatchAction("MODIFY_TASK", {
      task: {
        ...selectedTask,
        title,
        details: (selectedTask.details || "").trim(),
      },
    });

    handleClose();
    setSnackbar("edit");
  };
  const handleShowCompleteSnackbar = () => {
    setSnackbar("complete");
  };
  // رسائل الحالة الفارغة حسب الفلتر
  const getEmptyMessage = () => {
    if (currentFilter === "completed") return "لا توجد مهام حالياً منجزة";
    if (currentFilter === "uncompleted") return "لا توجد مهام حالياً غير منجزة";
    return "لا توجد مهام حالياً، أضف مهمة جديدة";
  };

  return (
    <Box
      sx={{
        padding: 2,
        direction: "rtl",
        flex: 1,
        display: tasks.length === 0 ? "flex" : "block",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tasks.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          {getEmptyMessage()}
        </Typography>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onOpenDialog={handleOpenDialog}
            onShowCompleteSnackbar={handleShowCompleteSnackbar}
          />
        ))
      )}

      <DeleteTaskDialog
        isOpen={dialogType === "delete"}
        onClose={handleClose}
        selectedTask={selectedTask}
        onDelete={handleDelete}
      />

      <EditTaskDialog
        isOpen={dialogType === "edit"}
        onClose={handleClose}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        onSave={handleSaveEdit}
      />

      <Snackbar
        open={Boolean(snackbarType)}
        autoHideDuration={2000}
        onClose={() => {
          setSnackbar(null);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {activeSnackbar ? (
          <Alert
            icon={false}
            severity={activeSnackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {activeSnackbar.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Box>
  );
}
