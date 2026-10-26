import { Box, Button } from "@mui/material";
import { useContext, useMemo } from "react";
import TaskContext from "../../context/TaskContext";

export default function FilterButtons() {
  const { currentFilter, setCurrentFilter, tasks } = useContext(TaskContext);

  const stats = useMemo(() => {
    const all = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const uncompleted = all - completed;

    return { all, completed, uncompleted };
  }, [tasks]);

  // أنواع الفلترة المتاحة مع ربط العدادات بشكل صحيح لكل زر
  const filters = [
    { value: "all", label: "الكل", count: stats.all },
    { value: "completed", label: "المهام المنجزة", count: stats.completed },
    { value: "uncompleted", label: "المهام غير المنجزة", count: stats.uncompleted },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        p: 2,
        direction: "rtl",
        flexWrap: "wrap",
      }}
    >
      {filters.map((filter) => {
        const isActive = currentFilter === filter.value;

        return (
          <Button
            key={filter.value}
            variant={isActive ? "contained" : "outlined"}
            onClick={() => setCurrentFilter(filter.value)}
            sx={{
              fontWeight: isActive ? "bold" : "normal",
            }}
          >
            {filter.label} ({filter.count})
          </Button>
        );
      })}
    </Box>
  );
}