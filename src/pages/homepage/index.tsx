import SimpleSlider from "./sections/banner";
import ProductCard from "@/components/ui/card/product-card";
import type { RootState } from "@/redux/root-reducer";
import type { AppDispatch } from "@/redux/store";
import { getAllProducts } from "@/redux/thunk/product.thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(getAllProducts({}));
  }, [dispatch]);
  return (
    <>
      <SimpleSlider />
      {isLoading ? (
        <div className="p-6 m-10 text-center text-gray-600">
          Waking up server… first load may take ~30s
        </div>
      ) : (
        <>
          <div className="grid p-6 m-10 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id ?? product.id} product={product} />
            ))}
          </div>

          <div className="grid p-6 m-10 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id ?? product.id} product={product} />
            ))}
            {/* <Trending /> */}
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
