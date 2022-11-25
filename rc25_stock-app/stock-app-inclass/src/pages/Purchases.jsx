import * as React from "react";
import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import { useSelector } from "react-redux";
import { arrowStyle, btnHoverStyle } from "../styles/globalStyle";
import useSortColumn from "../hooks/useSortColumn";
import MultiSelect from "../components/MultiSelect";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import PurchasesModal from "../components/modals/PurchasesModal";
import EditIcon from "@mui/icons-material/Edit";

const Purchases = () => {
  const {
    // getBrands,
    // getCategories,
    // getProducts,
    //todo, 3 fonksiyon birleştirildi..
    getProCatBrands,
    deleteProduct,
  } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const columnObj = {
    brand: 1,
    name: 1,
    stock: 1,
  };
  console.log(products);

  const [filteredData, setFilteredData] = useState(products);

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  console.log(filteredData);

  const { sortedData, handleSort, columns } = useSortColumn(
    filteredData,
    columnObj
  );

  useEffect(() => {
    // getBrands();
    // getCategories();
    // getProducts();
    //todo, 3 fonksiyon birleştirildi..
    getProCatBrands();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Purchases
      </Typography>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        New Purchase
      </Button>
      <MultiSelect
        products={products}
        brands={brands}
        setFilteredData={setFilteredData}
      />
      <PurchasesModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />
      {sortedData?.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("stock", "number")}
                  >
                    <div>Date</div>
                    {columns.stock === 1 && <UpgradeIcon />}
                    {columns.stock !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Firm Name</TableCell>
                <TableCell align="center">Brand Name</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("brand", "text")}
                  >
                    <div>Quantity</div>
                    {columns.brand === 1 && <UpgradeIcon />}
                    {columns.brand !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("name", "text")}
                  >
                    <div>Amount</div>
                    {columns.name === 1 && <UpgradeIcon />}
                    {columns.name !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>

                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData?.map((product, index) => (
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
                  <TableCell align="center">{product.date}</TableCell>
                  <TableCell align="center">{product.date}</TableCell>
                  <TableCell align="center">{product.date}</TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell
                    align="center"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <EditIcon sx={btnHoverStyle} />
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

export default Purchases;
