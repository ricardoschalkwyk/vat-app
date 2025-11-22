import { useProductStore } from "@/store/product-store";
import ProductCard from "./ProductCard";

// import Table from "./products/table";

export default function Inventory() {
  const { state } = useProductStore();
  console.log(state.products);

  if (state.products.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold">No Products...</p>
      </div>
    );
  }

  return (
    <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
      {state.products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
