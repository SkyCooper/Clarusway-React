// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {
  //todo, axios instance ile yapılması
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);

  //todo, düz axios ile yapılması;
  // const BASE_URL = "https://13673.fullstack.clarusway.com/";
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);
  // //? getfirms burada export edilemez , component dışında olması lazım
  // const getFirms = async () => {
  //   const url = "firms";
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>
      <Button variant="outlined">New Firm</Button>
      {firms?.lenght > 0 && (
        <Grid container justifyContent="center" gap={3}>
          {firms?.map((firm) => (
            <Grid item>
              <FirmCard key={firm.id} firm={firm}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
