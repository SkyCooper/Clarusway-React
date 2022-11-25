import React, { useEffect, useState } from "react";
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import { flexCenter } from "../styles/globalStyle";
import Box from "@mui/material/Box";
import useSortColumn from "../hooks/useSortColumn";

const MultiSelect = ({
  products,
  brands,
  setFilteredData,
  filteredData,
  sortedData,
}) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const isBrandSelected = (item) =>
    selectedBrands.includes(item.brand) || selectedBrands.length === 0;

  const isProductSelected = (item) =>
    selectedProducts.includes(item.name) || selectedProducts.length === 0;

  const filteredProducts = products
    ?.filter((item) => selectedBrands.includes(item.brand))
    .map((item) => item.name);

  const filterFunction = () => {
    setFilteredData(
      products
        ?.filter((item) => isBrandSelected(item))
        .filter((item) => isProductSelected(item))
    );
  };

  useEffect(() => {
    filterFunction();
    console.log(filteredData);
    console.log("first");
    // eslint-disable-next-line
  }, [selectedBrands, selectedProducts]);

  console.log(filteredData);
  console.log("second");

  return (
    <Box sx={flexCenter} mt={3}>
      <MultiSelectBox
        handleSelect={(item) => {
          setSelectedBrands(item);
        }}
        placeholder="Select Brand"
      >
        {brands?.map((item) => (
          <MultiSelectBoxItem
            key={item.name}
            value={item.name}
            text={item.name}
          />
        ))}
      </MultiSelectBox>
      <MultiSelectBox
        handleSelect={(item) => {
          setSelectedProducts(item);
        }}
        placeholder="Select Product"
      >
        {filteredProducts?.map((item) => (
          <MultiSelectBoxItem key={item} value={item} text={item} />
        ))}
      </MultiSelectBox>
    </Box>
  );
};

export default MultiSelect;
