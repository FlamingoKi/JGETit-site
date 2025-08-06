import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import "../sections/About.css"; // добавить стили about-title
import "./Contacts.css"; // убедитесь, что стили подключены

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
        <Paper elevation={3} sx={{ flex: 1, minWidth: 260, maxWidth: 340, p: 3, mb: 3, borderRadius: 2, background: "#000" }}>
          <Typography variant="h6" color="#D6FE51" gutterBottom>
            Напишите нам
          </Typography>
          <Typography variant="body2" color="#D6FE51" gutterBottom>
            hello@tsifrovyeresheniya.com
          </Typography>
          <Typography variant="h6" color="#D6FE51" gutterBottom>
            Позвоните нам
          </Typography>
          <Typography variant="body2" color="#D6FE51" gutterBottom>
            +7 (999) 123-4567
          </Typography>
          <Typography variant="h6" color="#D6FE51" gutterBottom>
            Посетите нас
          </Typography>
          <Typography variant="body2" color="#D6FE51">
            ул. Инновационная, 123<br />Москва, 123456
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ flex: 1, minWidth: 260, maxWidth: 340, p: 3, mb: 3, borderRadius: 2, border: "2px solid #D6FE51", background: "#000" }}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Имя"
              name="name"
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ style: { color: "#D6FE51" } }}
              InputProps={{
                style: { color: "#fff" },
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  }
                }
              }}
            />
            <TextField
              label="Электронная почта"
              name="email"
              type="email"
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ style: { color: "#D6FE51" } }}
              InputProps={{
                style: { color: "#fff" },
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  }
                }
              }}
            />
            <TextField
              label="Сообщение"
              name="message"
              variant="outlined"
              required
              fullWidth
              multiline
              rows={4}
              InputLabelProps={{ style: { color: "#D6FE51" } }}
              InputProps={{
                style: { color: "#fff" },
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D6FE51"
                  }
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{
                borderRadius: "32px",
                fontWeight: 600,
                background: "#D6FE51",
                color: "#000",
                border: "2px solid #D6FE51",
                boxShadow: "none",
                transition: "background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
                "&:hover": {
                  background: "#D6FE51",
                  color: "#000",
                  borderColor: "#D6FE51",
                  boxShadow: "0 6px 18px 0 #D6FE5180" // менее яркое свечение
                }
              }}
            >
              Отправить сообщение
            </Button>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
}
