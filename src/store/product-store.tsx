import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import type { Product } from "../types";

type StoreState = {
  products: Product[];
};

type StoreAction = {
  type: "UPDATE_PRODUCT" | "ADD_PRODUCT" | "REMOVE_PRODUCT";
  payload?: unknown;
};

type StoreContextType = {
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
};

const getInitialState = () => {
  const inventory = localStorage.getItem("inventory");

  return inventory ? JSON.parse(inventory) : [];
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const product = action.payload as Product;
      let newList;

      if (state.products) {
        newList = [...state.products, product];
      }

      return {
        ...state,
        products: newList ? newList : state.products,
      };
    }

    case "REMOVE_PRODUCT": {
      const { id } = action.payload as Product;

      const newList = state.products.filter((item) => item.id !== id);

      return {
        ...state,
        products: newList,
      };
    }

    default:
      return state;
  }
}

type Props = {
  children: React.ReactNode;
};

export function ProductStoreProvider({ children }: Props) {
  const initialState: StoreState = {
    products: getInitialState(),
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(state.products));
  }, [state]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductStore() {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error("useProductStore must be used within a StoreProvider");
  }

  return context;
}
