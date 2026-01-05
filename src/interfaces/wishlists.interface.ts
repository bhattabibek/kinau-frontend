import type { productI } from "./product.interface";
import type { userI } from "./user.interface";

export interface wishlistI {
  id: string | number;
  product: productI;
  user?: userI;
}
