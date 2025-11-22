import { InfoIcon } from "lucide-react";
import { motion } from "motion/react";

import Calculations from "@/components/Calculations";
import AddItemForm from "@/components/forms/add-item-form";
import MotionWrapper from "@/components/MotionWrapper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { columns } from "@/components/products/columns";
import { DataTable } from "@/components/products/data-table";
import { useProductStore } from "@/store/product-store";

export default function Page() {
  const { state } = useProductStore();

  return (
    <div className="my-5 px-5 xl:px-0">
      <MotionWrapper>
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
          className="mb-2.5 space-y-5"
        >
          <div className="mb-1.5 flex items-center gap-2.5">
            <h2 className="text-lg font-medium">Add a Product</h2>

            <Popover>
              <PopoverTrigger>
                <InfoIcon size={20} />
              </PopoverTrigger>

              <PopoverContent>
                <p>Use this section to quickly add an item to your list</p>

                <ol className="mt-1.5 list-disc px-3.5">
                  <li>
                    Type the <strong>product name</strong>
                  </li>
                  <li>
                    Enter the <strong>price (before VAT)</strong>
                  </li>
                  <li>
                    Enter the <strong>quantity</strong>
                  </li>
                  <li>
                    Pick a <strong>category</strong>
                  </li>
                  <li>
                    Hit <strong>Submit</strong> to add it to the product
                    overview
                  </li>
                </ol>
              </PopoverContent>
            </Popover>
          </div>

          <div className="overflow-hidden rounded-sm border p-5 shadow-sm">
            <AddItemForm />
          </div>
        </motion.div>

        <div className="flex flex-col-reverse gap-2.5 lg:flex-row lg:gap-5">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            className="mt-2.5 w-full"
          >
            <div className="mb-1.5 flex items-center gap-2.5">
              <h2 className="text-lg font-medium">Product Overview</h2>

              <Popover>
                <PopoverTrigger>
                  <InfoIcon size={20} />
                </PopoverTrigger>

                <PopoverContent>
                  <p>Each card here represents a product you’ve added</p>

                  <ol className="mt-1.5 list-disc px-3.5">
                    <li>
                      Shows the name, category, price details, and quantity
                    </li>
                    <li>Displays the net value and VAT added for that item</li>
                    <li>Press the trash icon to remove it from the list</li>
                  </ol>
                </PopoverContent>
              </Popover>
            </div>

            <DataTable columns={columns} data={state.products} />
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            className="mt-2.5 w-full max-w-full space-y-5 lg:max-w-48"
          >
            <div className="mb-1.5 flex items-center gap-2.5">
              <h2 className="text-lg font-medium">VAT Summary</h2>

              <Popover>
                <PopoverTrigger>
                  <InfoIcon size={20} />
                </PopoverTrigger>
                <PopoverContent>
                  <p>
                    This box shows the totals for everything you’ve added so far
                  </p>

                  <ol className="mt-1.5 list-disc px-3.5">
                    <li>Net Amount – total before VAT</li>
                    <li>VAT – total VAT added</li>
                    <li>Gross Amount – final total including VAT</li>
                  </ol>
                </PopoverContent>
              </Popover>
            </div>

            <div className="overflow-hidden rounded-sm border p-5 shadow-sm">
              <Calculations />
            </div>
          </motion.div>
        </div>
      </MotionWrapper>
    </div>
  );
}
