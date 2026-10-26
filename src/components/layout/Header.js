
import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Header() {
  const today = new Date().toLocaleDateString("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        p: "15px 24px",
        bgcolor: "primary.main",
        color: "primary.contrastText",
        boxSizing: "border-box",
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        قائمة المهام
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: 26 }} />

        <Typography variant="body2">
          {today}
        </Typography>
      </Box>
    </Box>
  );
}
