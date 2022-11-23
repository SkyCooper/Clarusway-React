import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnHoverStyle, arrowStyle } from "../styles/globalStyle";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

//todo, Firms componentini kopyalaıp üzerinden değiştirdik...
const Products = () => {
  const { getBrands, getCategories, getProducts } = useStockCalls();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [toggle, setToggle] = useState({
    brand: false,
    name: false,
    stock: 1,
  });

  useEffect(() => {
    getBrands();
    getCategories();
    getProducts();
  }, []);

  const handleSortNumber = (arg) => {
    setToggle({ ...toggle, [arg]: toggle.arg * -1 });
    //? yani toogle objesini aç, başlangıçta 1 olan ve argüman olarak gelen stock değeri  -1 olacak, veya -1 olan +1 olacak, devamlı terslenecek..
  };
  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>
      {/*
      <ProductModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} /> */}

      {products?.length >= 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">
                  <Box sx={arrowStyle}>
                    <div>Brand</div>
                    {true && <UpgradeIcon />}
                    {false && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box sx={arrowStyle}>
                    <div>Name</div>
                    {true && <UpgradeIcon />}
                    {false && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box sx={arrowStyle} onClick={() => handleSortNumber("stock")}>
                    <div>Stock</div>
                    {toggle.stock === 1 && <UpgradeIcon />}
                    {toggle.stock !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon sx={btnHoverStyle} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Products;
