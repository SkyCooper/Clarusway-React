import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/cards/BrandCard";
import useStockCalls from "../hooks/useStockCalls";
import BrandModal from "../components/modals/BrandModal";
import { Alert } from "@mui/material";
import { flexCenter } from "../styles/globalStyle";

const Brands = () => {
  //todo, axios instance ile yapılması
  const { getBrands } = useStockCalls();
  const { brands, loading } = useSelector((state) => state.stock);

  //? modal açılıp/kapanması için stateler;
  const [open, setOpen] = useState(false);

  //? modal içindeki bilgiler için state;
  const [info, setInfo] = useState({});

  useEffect(() => {
    getBrands();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Typography variant="h4" color="error" mb={2}>
        Brands
      </Typography>

      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        New Brand
      </Button>

      <BrandModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {!loading && !brands?.length && (
        <Alert severity="warning" sx={{ mt: 4, width: "50%" }}>
          There is no brand to show
        </Alert>
      )}

      {brands?.length > 0 && (
        <Grid container sx={flexCenter} mt={4}>
          {brands?.map((brand) => (
            <Grid item key={brand.id}>
              <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Brands;
