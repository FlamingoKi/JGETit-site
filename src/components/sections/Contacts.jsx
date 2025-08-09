import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../sections/About.css";
import "./Contacts.css";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Здесь может быть отправка данных на сервер
    setTimeout(() => setSubmitted(false), 2000);
    setForm({ name: "", email: "", message: "" });
  };

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
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mt: 4 }}
      >
        <Paper
          elevation={0}
          sx={{
            width: { xs: "100%", md: 320 },
            minWidth: 0,
            maxWidth: 340,
            p: 3,
            mb: 3,
            borderRadius: 2,
            background: "transparent",
            boxShadow: "none",
            flex: "0 0 auto"
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
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: 440 },
            maxWidth: 700,
            p: 5,
            mb: 3,
            borderRadius: "32px",
            background: "#0a1206",
            border: "1.5px solid #232e13"
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              sx={{
                borderRadius: "18px",
                fontSize: "1.18rem",
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  background: "#181c1a",
                  borderRadius: "18px",
                  fontSize: "1.18rem",
                  "& input": {
                    color: "#fff"
                  },
                  "&:hover input": {
                    color: "#D6FE51"
                  },
                  "&.Mui-focused input": {
                    color: "#D6FE51"
                  },
                  "& fieldset": {
                    borderColor: "#232e13"
                  },
                  "&:hover fieldset": {
                    borderColor: "#D6FE51"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#D6FE51"
                  }
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                  fontSize: "1.1rem"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#D6FE51"
                },
                "& .MuiInputLabel-root:hover": {
                  color: "#D6FE51"
                }
              }}
            />
            <TextField
              label="Почта"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              sx={{
                borderRadius: "18px",
                fontSize: "1.18rem",
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  background: "#181c1a",
                  borderRadius: "18px",
                  fontSize: "1.18rem",
                  "& input": {
                    color: "#fff"
                  },
                  "&:hover input": {
                    color: "#D6FE51"
                  },
                  "&.Mui-focused input": {
                    color: "#D6FE51"
                  },
                  "& fieldset": {
                    borderColor: "#232e13"
                  },
                  "&:hover fieldset": {
                    borderColor: "#D6FE51"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#D6FE51"
                  }
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                  fontSize: "1.1rem"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#D6FE51"
                },
                "& .MuiInputLabel-root:hover": {
                  color: "#D6FE51"
                }
              }}
            />
            <TextField
              label="Сообщение"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              multiline
              minRows={4}
              sx={{
                borderRadius: "18px",
                fontSize: "1.18rem",
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  background: "#181c1a",
                  borderRadius: "18px",
                  fontSize: "1.18rem",
                  "& textarea": {
                    color: "#fff"
                  },
                  "&:hover textarea": {
                    color: "#D6FE51"
                  },
                  "&.Mui-focused textarea": {
                    color: "#D6FE51"
                  },
                  "& fieldset": {
                    borderColor: "#232e13"
                  },
                  "&:hover fieldset": {
                    borderColor: "#D6FE51"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#D6FE51"
                  }
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                  fontSize: "1.1rem"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#D6FE51"
                },
                "& .MuiInputLabel-root:hover": {
                  color: "#D6FE51"
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={submitted}
              sx={{
                mt: 3,
                py: 1.2,
                borderRadius: "32px",
                fontSize: "1.08rem",
                background: "#D6FE51",
                color: "#000",
                fontWeight: 700,
                width: "100%",
                alignSelf: "center",
                whiteSpace: "nowrap",
                display: "block",
                "&:hover": {
                  background: "#D6FE51",
                  color: "#000"
                }
              }}
            >
              {submitted ? "Отправлено!" : "Отправить сообщение"}
            </Button>
          </form>
        </Paper>
      </Stack>
    </Box>
  );
}