import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, indigo, pink } from "@mui/material/colors";
import { flex } from "../../styles/globalStyle";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const {sales, purchases} = useSelector((state)=> state.stock)
  // const totalSales = sales?.
  const data = [
    {
      title: "sales",
      metric: "$4285",
      icon: <MonetizationOnIcon />,
      color: indigo[900],
      bgColor: indigo[100],
    },
    {
      title: "profit",
      metric: "$4285",
      icon: <PaymentsIcon />,
      color: pink[900],
      bgColor: pink[100],
    },
    {
      title: "purchases",
      metric: "$4285",
      icon: <ShoppingCartIcon />,
      color: amber[900],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {data.map((item) => (
        <Grid item key={item.title} sx={{ width: "400px" }}>
          <Paper sx={{ p: 2 }} elevation={8}>
            <Box sx={{ display: "flex" }}>
              <Avatar
                sx={{
                  width: "4rem",
                  height: "4rem",
                  color: item.color,
                  backgroundColor: item.bgColor,
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ mx: 4, flexGrow: 1 }}>
                {/* //! button özelliği verince yazıları otomatik büyük harf yapıyor. */}
                {/* <Typography variant="button">{item.title}</Typography> */}
                {/* //! veya toUpperCase() */}
                <Typography>{item.title.toUpperCase()}</Typography>
                <Typography variant="h4">{item.metric}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
