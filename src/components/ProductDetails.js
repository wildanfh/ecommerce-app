import { useParams } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import products from "../utils/products";
import NotFound from "./NotFound";

function ProductDetails() {
  const { id } = useParams();
  const num = +id;
  // Find the product with the matching ID
  const product = products.find((p) => p.id === num);

  // Render 404 page if product is not found
  if (!product) {
    return <NotFound />;
  }

  return <ProductPage product={product} />;
}

export default ProductDetails;
