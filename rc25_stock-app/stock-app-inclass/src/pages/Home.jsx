import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import ChartsCard from "../components/cards/ChartsCard";
import KpiCards from "../components/cards/KpiCards";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getSales, getPurchases } = useStockCalls();
  useEffect(() => {
    //todo, bu ikisi PromiseAll yapılabilir,
    //todo, vaya bütün get metodları en baştan PromiseAll yapılabilir.
    //todo, duruma göre birisi yaılabilir veya böyle ayrı ayrı kullanılabilir.
    getSales();
    getPurchases();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Dashboard
      </Typography>
      <KpiCards/>
      <ChartsCard/>
    </Box>
  );
};

export default Home;
