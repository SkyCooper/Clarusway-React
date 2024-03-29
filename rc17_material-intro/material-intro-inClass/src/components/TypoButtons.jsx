//? import { Typography } from "@mui/material";
//? bütün kütüphaneyi al Typography kullan demek ama kullanışlı değil
import Typography from "@mui/material/Typography";
//! kütüphaneden sadece Typography al demek, daha hızlı çalışır.
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          mt={4}
          color="error"
        >
          MUI Typography
        </Typography>
        {/* kendisi aslında h1 ama h4 görüntüsünde demek */}
        <Typography
          variant="body2"
          align="justify"
          mt={4}
          sx={{ backgroundColor: "hotpink", color: "#eee", fontSize: "1.4rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          praesentium possimus facilis, suscipit id laudantium quos modi cumque
          et quis dicta, eius doloribus assumenda temporibus!
        </Typography>
        <Typography mt={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          praesentium possimus facilis, suscipit id laudantium quos modi cumque
          et quis dicta, eius doloribus assumenda temporibus!
        </Typography>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          praesentium possimus facilis, suscipit id laudantium quos modi cumque
          et quis dicta, eius doloribus assumenda temporibus!
        </Typography>
      </Container>

      <Container>
        {/* <Box display="flex" flexDirection="column" gap={2} mt={2} width="50%"> */}
        {/* böylede yazılabilir. */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <Button variant="text" color="primary">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
