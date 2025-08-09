import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import "../sections/About.css";
import "./Contacts.css";

export default function Contacts() {
  return (
    <Box component="section" id="contacts" sx={{ mb: 6, width: "100%", maxWidth: 900, mx: "auto" }}>
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        className="about-title"
      >
        <span className="about-title-white">Связаться</span>
        <span className="about-title-green">с нами</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className="contacts-subtitle"
        gutterBottom
      >
        Готовы начать свой следующий проект? Давайте обсудим ваши потребности
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={5} justifyContent="center" alignItems="flex-start" sx={{ mt: 4 }}>
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            minWidth: 260,
            maxWidth: 340,
            p: 3,
            mb: 3,
            borderRadius: 2,
            background: "transparent", // фон полностью прозрачный
            boxShadow: "none"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#D6FE51",
              fontWeight: 700,
              letterSpacing: "0.04em",
              mb: 1
            }}
            gutterBottom
          >
            Напишите нам
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.04em",
              mb: 2
            }}
            gutterBottom
          >
            hello@tsifrovyeresheniya.com
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#D6FE51",
              fontWeight: 700,
              letterSpacing: "0.04em",
              mb: 1
            }}
            gutterBottom
          >
            Позвоните нам
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.04em",
              mb: 2
            }}
            gutterBottom
          >
            +7 (999) 123-4567
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#D6FE51",
              fontWeight: 700,
              letterSpacing: "0.04em",
              mb: 1
            }}
            gutterBottom
          >
            Посетите нас
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.04em",
              mb: 0
            }}
          >
            ул. Инновационная, 123<br />Москва, 123456
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
}