import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { headerBtmText, componentStyles } from "../../styles/appStyles";
import Dropdown from "../../shared/dropdown";
import data from "../../services/items.json";
import Card from "../../shared/card";

export default function MainComponent() {
  const classes = headerBtmText();
  const styles = componentStyles();
  const [items, setItems] = useState([...data.items]);

  useEffect(() => {
    console.log(items);
  }, []);

  const handleClick = (flag) => {
    if (flag == "high") {
      const itemAscSort = data.items.sort(function (a, b) {
        return b.price_rounded - a.price_rounded;
      });
      setItems([...itemAscSort]);
    } else {
      const itemsDescSort = data.items.sort(function (a, b) {
        return a.price_rounded - b.price_rounded;
      });
      setItems([...itemsDescSort]);
    }
  };

  const handleChange = (e) => {
    let filterItems = data.items.filter(
      (el) => el.price_rounded >= 0 && el.price_rounded <= e.target.value
    );
    setItems([...filterItems]);
  };

  const filteredItems = (updatedItems) => {
    setItems([...updatedItems]);
  };
  return (
    <>
      <Container className={classes.heading}>
        <Stack className={styles.priceFilter} direction="row" spacing={1}>
          <Typography
            className={styles.priceFilterText}
            gutterBottom
            variant="h4"
          >
            Price Filter
          </Typography>
          <Chip label="High to Low" onClick={() => handleClick("high")} />
          <Chip label="Low to High" onClick={() => handleClick("low")} />
        </Stack>
        <Stack className={styles.rangeFilter} direction="row">
          <Typography
            className={styles.rangeFilterText}
            gutterBottom
            variant="h4"
          >
            Range Filter
          </Typography>
          <Slider
            className={styles.rangeFilterSlider}
            min={0}
            max={5}
            step={1}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleChange}
          />
        </Stack>

        <Dropdown
          category={data.facets.category}
          handleFiletredItems={filteredItems}
        />
        <Grid container>
          {items.length > 0 ? (
            items?.map((item) => {
              return (
                <Grid
                  sx={{ padding: "25px" }}
                  key={item.name}
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                >
                  <Card
                    name={item.name}
                    price={item.price_rounded}
                    currency={item.currency}
                    sku={item.sku}
                    stock={item.stock}
                    image={item.baseImage}
                  />
                </Grid>
              );
            })
          ) : (
            <Container sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h4">
                No Products To Show
              </Typography>
            </Container>
          )}
        </Grid>
      </Container>
    </>
  );
}
