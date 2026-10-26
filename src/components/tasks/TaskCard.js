import { Card, Box, Typography, IconButton } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useContext } from "react";
import TaskContext from "../../context/TaskContext";

export default function TaskCard({
  task,
  onOpenDialog,
  onShowCompleteSnackbar,
}) {
  const { dispatchAction } = useContext(TaskContext);

  const handleToggleComplete = () => {
    if (!task.completed && onShowCompleteSnackbar) {
      onShowCompleteSnackbar();
    }
    dispatchAction("TOGGLE_COMPLETE", { id: task.id });
  };
  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          marginBottom: 1.5,
          border: "1px solid",
          borderColor: task.completed ? "success.light" : "divider",
          borderRadius: 2,
          background: task.completed
            ? "rgba(46, 125, 50, 0.08)"
            : "background.paper",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.04)",
          transition: "all 0.2s ease-in-out",

          "&:hover": {
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
            transform: "translateY(-2px)",
            borderColor: task.completed ? "success.main" : "text.disabled",
          },
        }}
      >
        {/* معلومات المهمة: العنوان والتفاصيل */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            flexGrow: 1,
            mr: 2,
            overflow: "hidden",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: task.completed ? "text.secondary" : "text.primary",
              fontWeight: 600,
              wordBreak: "break-word",
            }}
          >
            {task.title}
          </Typography>

          {task.details && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                wordBreak: "break-word",
              }}
            >
              {task.details}
            </Typography>
          )}
        </Box>

        {/* أزرار التحكم */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            flexShrink: 0,
          }}
        >
          <IconButton
            onClick={handleToggleComplete}
            color={task.completed ? "success" : "default"}
            size="small"
            aria-label="تغيير حالة المهمة"
          >
            <CheckCircleIcon />
          </IconButton>

          <IconButton
            onClick={() => onOpenDialog("edit", task)}
            color="primary"
            size="small"
            title="تعديل"
            aria-label="تعديل المهمة"
          >
            <EditIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={() => onOpenDialog("delete", task)}
            color="error"
            size="small"
            title="حذف"
            aria-label="حذف المهمة"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </Card>
    </>
  );
}
