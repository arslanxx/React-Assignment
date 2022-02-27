import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { dropDown } from "../../styles/appStyles";
import data from "../../services/items.json";

export default function BasicSelect({ category, items, handleFiletredItems }) {
  const classes = dropDown();
  const [selected, setSelected] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    category.collection.filter(
      (elem) => elem.id == parentCategory && setSelected(elem)
    );
    parentCategory == 2 && handleFiletredItems(data.items);
  }, [parentCategory]);

  useEffect(() => {
    if (
      subCategory !== "" &&
      subCategory !== null &&
      subCategory !== undefined
    ) {
      let filterItems = [];
      data.items.forEach((item) =>
        item?.categories?.forEach((element) => {
          element?.category_id == subCategory && filterItems.push(item);
        })
      );
      handleFiletredItems(filterItems);
    }
  }, [subCategory]);

  const handleCategoryChange = (event) => {
    setParentCategory(event.target.value);
  };

  const handleSubCategory = (event) => {
    setSubCategory(event.target.value);
  };

  return (
    <Box className={classes.dropDownContainer} sx={{ minWidth: 120 }}>
      <FormControl className={classes.dropbox}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={parentCategory}
          label="Category"
          onChange={(event) => handleCategoryChange(event)}
        >
          {category.collection.map((value) => {
            return (
              <MenuItem key={value.id} value={value.id} label={value.name}>
                {value.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.dropbox}>
        <InputLabel id="demo-simple-select-label-sub">Sub Category</InputLabel>
        <Select
          labelId="demo-simple-select-label-sub"
          id="demo-simple-select-sub"
          value={subCategory}
          label="Sub Category"
          disabled={selected?.sub_categories?.length > 0 ? false : true}
          onChange={handleSubCategory}
        >
          {selected?.sub_categories?.map((value) => {
            return (
              <MenuItem key={value.id} value={value.id} label={value.name}>
                {value.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
