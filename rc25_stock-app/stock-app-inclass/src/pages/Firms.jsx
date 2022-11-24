// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/cards/FirmCard";
import useStockCalls from "../hooks/useStockCalls";
import FirmModal from "../components/modals/FirmModal";
import { flexCenter } from "../styles/globalStyle";


const Firms = () => {
  //todo, axios instance ile yapılması
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);

  //? modal açılıp/kapanması için stateler;
  const [open, setOpen] = useState(false);

  //? modal içindeki bilgiler için state;

  const [info, setInfo] = useState({
    // name : "",
    // phone: "",
    // address : "",
    // image :"",
    //? yazmasak da olur
  });

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>

      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        New Firm
      </Button>

      <FirmModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {firms?.length > 0 && (
        <Grid container sx={flexCenter} mt={3}>
          {firms?.map((firm) => (
            <Grid item key={firm.id}>
              <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
