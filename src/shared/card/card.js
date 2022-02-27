import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import exportFromJSON from "export-from-json";
import { CardStyles } from "../../styles/appStyles";

export default function MediaCard({
  name,
  image,
  price,
  currency,
  sku,
  stock,
}) {
  const classes = CardStyles();
  const handleExport = () => {
    const data = [
      { name: name },
      { price: price },
      { currency: currency },
      { sku: sku },
      { stock: stock },
    ];
    const fileName = name;
    const exportType = "xls";
    exportFromJSON({ data, fileName, exportType });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          title={name}
          className={classes.cardHeaderText}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAlign}>
        <Button size="small">
          Price:{" "}
          <strong>
            {price}
            {currency}
          </strong>
        </Button>
        <Button size="small">SKU: {sku}</Button>
        <Button size="small">Stock: {stock}</Button>
        <Button size="small" onClick={handleExport}>
          Download
        </Button>
      </CardActions>
    </Card>
  );
}
