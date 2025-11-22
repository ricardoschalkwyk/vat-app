import { useProductStore } from "@/store/product-store";
import { calculateTotals } from "./lib/utils";
import { NumberCounter } from "./number-counter";

export default function Calculations() {
  const { state } = useProductStore();

  const { netAmount, totalVat, grossAmount } = calculateTotals(
    state.products,
    15,
  );

  return (
    <div className="flex flex-col gap-2.5 md:flex-row lg:flex-col">
      <div className="flex w-full flex-col gap-1">
        <p className="font-medium text-muted-foreground">Net Amount</p>

        <div className="flex w-full gap-1 text-2xl">
          R <NumberCounter number={netAmount} />
        </div>
      </div>

      <div className="flex w-full flex-col gap-1">
        <p className="font-medium text-muted-foreground">VAT</p>

        <div className="flex w-full gap-1 text-2xl">
          R <NumberCounter number={totalVat} />
        </div>
      </div>

      <div className="flex w-full flex-col gap-1">
        <p className="font-medium text-muted-foreground">Gross Amount</p>

        <div className="flex w-full gap-1 text-2xl">
          R <NumberCounter number={grossAmount} />
        </div>
      </div>
    </div>
  );
}
