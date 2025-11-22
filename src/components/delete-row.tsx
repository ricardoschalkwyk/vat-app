import { Trash2 } from "lucide-react";

import { useProductStore } from "@/store/product-store";
import type { Product } from "@/types";
import Button from "./ui/button";

interface Props {
  product: Product;
}

export default function DeleteRow({ product }: Props) {
  const { dispatch } = useProductStore();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => {
        dispatch({
          type: "REMOVE_PRODUCT",
          payload: product,
        });
      }}
    >
      <Trash2 className="size-5" />
    </Button>
  );
}
