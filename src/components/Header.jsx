import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import "./Header.css";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  // Удаляем автоматический переход на #about при загрузке
  // Если где-то в коде есть window.location.hash = "#about" — уберите это

  // Также можно добавить useEffect для сброса hash при загрузке:
  React.useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  // Добавим обработчик для плавного скролла с учетом высоты header
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // Высота header (можно вынести в переменную, если меняется)
        const headerHeight = 90;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const top = rect.top + scrollTop - headerHeight - 16; // 16px запас для воздуха
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{ background: "#000", height: "90px" }} // Явно задаем высоту AppBar
    >
      <Toolbar
        sx={{
          justifyContent: "flex-start",
          minHeight: "180px",
          height: "180px",
          px: { xs: 2, md: 6 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          <img
            src="/logo.png"
            alt="Логотип"
            style={{
              height: 200, // увеличено
              width: 200,  // увеличено
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", ml: { xs: 8, md: 32 } }}>
          <List sx={{ display: "flex", gap: 1, p: 0, m: 0 }}>
            {navLinks.map((item) => (
              <ListItem key={item.href} disablePadding sx={{ width: "auto" }}>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href)}
                  sx={{
                    color: "#fff",
                    px: 3,
                    py: 2,
                    borderRadius: 0,
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
                      bottom: 0,
                      transform: "scaleX(0)",
                      transition: "transform 0.2s",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ fontWeight: 500, color: "#fff", fontSize: "1.1rem" }}>
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

