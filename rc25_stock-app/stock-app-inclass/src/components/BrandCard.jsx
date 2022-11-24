import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle } from "../styles/globalStyle";
import useStockCalls from "../hooks/useStockCalls";
import { CardHeader } from "@mui/material";

export default function BrandCard({ brand, setOpen, setInfo }) {
  const { deleteBrand } = useStockCalls();
  return (
    <Card
      sx={{
        p: 2,
        maxWidth: "300px",
        maxHeight: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader title={brand?.name}/>
      <CardMedia
        height="325"
        width="250"
        image={brand?.image}
        sx={{ p: 1, objectFit: "contain" }}
        component="img"
        alt="brand-img"
      />
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <EditIcon
          sx={btnHoverStyle}
          onClick={() => {
            setOpen(true);
            setInfo(brand);
          }}
        />
        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteBrand(brand?.id)}
        />
      </CardActions>
    </Card>
  );
}
