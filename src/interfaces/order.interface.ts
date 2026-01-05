import type { baseInitialStateI } from "./baseInitialState.interface";
import type { productI } from "./product.interface";

export interface orderI extends baseInitialStateI {
  product: productI;
}
