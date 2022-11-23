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

export default function FirmCard({ firm }) {
  const { deleteFirm } = useStockCalls();
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
      <CardHeader title={firm?.name} subheader={firm?.address} />
      <CardMedia
        height="150px"
        image={firm?.image}
        sx={{ p: 1, objectFit: "contain" }}
        component="img"
        alt="firm-img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone: {firm?.phone}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <EditIcon sx={btnHoverStyle} />
        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteFirm(firm?.id)}
        />
      </CardActions>
    </Card>
  );
}
