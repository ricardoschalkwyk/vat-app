import { Trash2 } from "lucide-react";

import { useProductStore } from "@/store/product-store";
import type { Product } from "@/types";
import { currenyFormatter } from "./lib/utils";
import Badge from "./ui/badge";
import Button from "./ui/button";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { dispatch } = useProductStore();

  return (
    <div className="h-full w-full overflow-hidden rounded-sm border border-gray-200">
      <div className="flex flex-col">
        <div className="flex justify-between bg-[#7816E9]/40 p-1.5 px-5 text-xl font-semibold">
          <p>{product.name}</p> <Badge>{product.category}</Badge>
        </div>

        <hr />

        <div className="mt-2.5 grid grid-cols-3 gap-y-2.5 p-5">
          <div>
            <p className="font-medium text-muted-foreground">Net Value</p>

            <p className="flex w-full gap-1 text-2xl">
              {currenyFormatter(product.priceExclVat)}
            </p>
          </div>

          <div>
            <p className="font-medium text-muted-foreground">Vat Added</p>

            <p className="flex w-full gap-1 text-2xl">
              {currenyFormatter(product.priceInclVat)}
            </p>
          </div>

          <div>
            <p className="font-medium text-muted-foreground">Quantity</p>

            <p className="flex w-full gap-1 text-2xl">{product.quantity}</p>
          </div>
        </div>

        <Button
          size="icon"
          variant="destructive"
          className="rounded-none rounded-tl-sm hover:bg-destructive hover:text-white"
          onClick={() => {
            dispatch({
              type: "REMOVE_PRODUCT",
              payload: product,
            });
          }}
        >
          <Trash2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
