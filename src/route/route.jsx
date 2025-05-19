import { Route, Routes } from "react-router-dom";

import { ProductManeger } from "../components/maneger/products/product";
import { CustomersManeger } from "../components/maneger/customers/customers";
import SuppliersManeger, {
  Supplier,
} from "../components/maneger/suppliers/suppliers";
import { Menu } from "../components/customers/menu/menu";
import { LogOn } from "../components/customers/logOn/logOn";
import { Registration } from "../components/customers/registration/registation";
import { Order } from "../components/customers/order/order";
import { ShoppingBasket } from "../components/customers/shopping basket/shoppingBasket";
import CollapsibleTable, {
  PrevOrders,
} from "../components/customers/prev orders/prevOrders";
import { Product } from "../components/customers/product/product";
import { MenuManeger } from "../components/maneger/menu/menu";
import Home from "../components/customers/home/home";
import { Login } from "@mui/icons-material";
import OrdersToBeMade from "../components/maneger/OrdersToBeMade/ordersToBeMade";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />}>
        {/* כל הדפים האחרים מוגדרים כנתיבים מקוננים בתוך Menu */}
        <Route index element={<Home />} />
        <Route path="login" element={<LogOn />} />
        <Route path="registration" element={<Registration />} />
        <Route path="order" element={<Order />} />
        <Route path="order/:id" element={<Order />} />
        <Route path="shoppingBasket" element={<ShoppingBasket />} />
        <Route path="prevOrder" element={<CollapsibleTable />} />
        {/* נתיבים נוספים... */}
      </Route>

      <Route path="managerMenu" element={<MenuManeger />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductManeger />}></Route>
        <Route path="customers" element={<CustomersManeger />}></Route>
        <Route path="suppliers" element={<SuppliersManeger />}></Route>
        <Route path="orders" element={<OrdersToBeMade />}></Route>
      </Route>
    </Routes>
  );
};
