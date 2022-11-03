//? import { Typography } from "@mui/material";
//? bütün kütüphaneyi al Typography kullan demek ama kullanışlı değil
import Typography from "@mui/material/Typography";
//! kütüphaneden sadece Typography al demek, daha hızlı çalışır.
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TextFieldComp = () => {
  return (
    <div>
      <Container>
        <Typography variant="h1" color="error" align="center" mt={4}>
          TEXT FIELD
        </Typography>
      </Container>
    </div>
  );
};

export default TextFieldComp;
