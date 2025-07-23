import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import "./Footer.css";

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: "#000", py: 5, px: 0, color: "#fff", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box className="footer-row" sx={{ width: "100%", maxWidth: 1200, display: "flex", justifyContent: "space-between", gap: 4, flexWrap: "wrap" }}>
        <Box className="footer-col footer-brand" sx={{ minWidth: 160, maxWidth: 300, mb: 3 }}>
          <Typography variant="h6" className="footer-brand-title" sx={{ color: "#D6FE51", mb: 1 }}>
            ЦифровыеРешения
          </Typography>
          <Typography variant="body2" className="footer-brand-desc">
            Повышаем уровень бизнеса с помощью передовых цифровых решений
          </Typography>
        </Box>
        <Box className="footer-col footer-services" sx={{ minWidth: 160, maxWidth: 300, mb: 3 }}>
          <Typography variant="subtitle1" className="footer-col-title" sx={{ color: "#D6FE51", mb: 1 }}>
            Услуги
          </Typography>
          <List sx={{ p: 0 }}>
            {["Разработка сайтов", "Создание чат-ботов", "Пользовательские скрипты"].map((text) => (
              <ListItem key={text} sx={{ p: 0, mb: 1 }}>
                <Link
                  href="#services"
                  underline="none"
                  sx={{
                    color: "#D6FE51",
                    fontSize: "1rem",
                    fontWeight: 400,
                    transition: "color 0.2s",
                    position: "relative",
                    "&:hover": {
                      color: "#fff",
                    },
                    "&:after": {
                      content: '""',
                      display: "block",
                      borderBottom: "2px solid #D6FE51",
                      width: "100%",
                      transform: "scaleX(0)",
                      transition: "transform 0.2s",
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                    },
                    "&:hover:after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="footer-col footer-company" sx={{ minWidth: 160, maxWidth: 300, mb: 3 }}>
          <Typography variant="subtitle1" className="footer-col-title" sx={{ color: "#D6FE51", mb: 1 }}>
            Компания
          </Typography>
          <List sx={{ p: 0 }}>
            { [
                { label: "О нас", href: "#about" },
                { label: "Портфолио", href: "#portfolio" },
                { label: "Отзывы", href: "#reviews" },
              ].map((item) => (
              <ListItem key={item.href} sx={{ p: 0, mb: 1 }}>
                <Link
                  href={item.href}
                  underline="none"
                  sx={{
                    color: "#D6FE51",
                    fontSize: "1rem",
                    fontWeight: 400,
                    transition: "color 0.2s",
                    position: "relative",
                    "&:hover": {
                      color: "#fff",
                    },
                    "&::after": {
                      content: '""',
                      display: "block",
                      borderBottom: "2px solid #D6FE51",
                      width: "100%",
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      transform: "scaleX(0)",
                      transition: "transform 0.2s",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item.label}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="footer-col footer-contacts" sx={{ minWidth: 160, maxWidth: 300, mb: 3 }}>
          <Typography variant="subtitle1" className="footer-col-title" sx={{ color: "#D6FE51", mb: 1 }}>
            Связь
          </Typography>
          <Stack direction="row" spacing={1} className="footer-contacts-btns">
            <Button variant="contained" sx={{ minWidth: 44, minHeight: 44, borderRadius: 1, background: "#D6FE51", color: "#000", fontSize: "1.3rem", "&:hover": { background: "#fff", color: "#000" } }}>@</Button>
            <Button variant="contained" sx={{ minWidth: 44, minHeight: 44, borderRadius: 1, background: "#D6FE51", color: "#000", fontSize: "1.3rem", "&:hover": { background: "#fff", color: "#000" } }}>☎</Button>
            <Button variant="contained" sx={{ minWidth: 44, minHeight: 44, borderRadius: 1, background: "#D6FE51", color: "#000", fontSize: "1.3rem", "&:hover": { background: "#fff", color: "#000" } }}>✉</Button>
            <Button variant="contained" sx={{ minWidth: 44, minHeight: 44, borderRadius: 1, background: "#D6FE51", color: "#000", fontSize: "1.3rem", "&:hover": { background: "#fff", color: "#000" } }}>🌐</Button>
          </Stack>
        </Box>
      </Box>
      <Typography className="footer-copyright" sx={{ color: "#D6FE51", fontSize: "0.95rem", mt: 3, width: "100%", textAlign: "center" }}>
        © 2025 Ваш сайт
      </Typography>
    </Box>
  );
}
