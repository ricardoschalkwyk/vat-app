import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { FormProvider, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import {
  addProductSchema,
  type AddProductSchema,
} from "@/schemas/addProductSchema";
import { useProductStore } from "@/store/product-store";
import { calcVat } from "../lib/utils";
import Button from "../ui/button";
import { Input } from "./input";
import Select from "./select";

const categories = [
  { id: 1, value: "Dairy product", label: "Dairy product" },
  { id: 2, value: "Fruits", label: "Fruits" },
  { id: 3, value: "Cereal", label: "Cereal" },
  { id: 4, value: "Snacks", label: "Snacks" },
  { id: 5, value: "Vegetables", label: "Vegetables" },
  { id: 6, value: "Beverages", label: "Beverages" },
];

export default function AddItemForm() {
  const { dispatch } = useProductStore();

  const methods = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      id: 0,
      name: "",
      category: "",
      quantity: "1",
      priceExclVat: "0",
      priceInclVat: "0",
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    const priceExclVat = parseFloat(data.priceExclVat);
    const priceInclVat = calcVat(priceExclVat, 15) + priceExclVat;
    const quantity = parseFloat(data.quantity);

    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: uuidv4(),
        name: data.name,
        category: data.category,
        quantity: quantity,
        priceExclVat: quantity > 1 ? priceExclVat * quantity : priceExclVat,
        priceInclVat: quantity > 1 ? priceInclVat * quantity : priceInclVat,
        createdAt: new Date(),
      },
    });

    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <motion.form
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="space-y-5"
        onSubmit={onSubmit}
      >
        <div className="flex w-full flex-col justify-between gap-5 md:flex-row">
          <Input name="name" label="Product Name" />

          <Input name="priceExclVat" label="Price" />

          <Input name="quantity" label="Quantity" />

          <Select
            name="category"
            label="Categories"
            value="defaultValue"
            options={categories}
          />
        </div>

        <div className="text-right">
          <Button type="submit" className="w-full md:w-fit">
            Submit
          </Button>
        </div>
      </motion.form>
    </FormProvider>
  );
}
