import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeniorLayout from "../layouts/SeniorLayout";
import PurchaseRequisitionLayout from "../layouts/PurchaseRequisitionLayout";
import OrderLayout from "../layouts/OrderLayout";
import CommonLayout from "../layouts/Common Layout";
import AccountantLayout from "../layouts/AccountantLayout";
import LogOut from "../layouts/LogoutLayout";
import SupplierLayout from "../layouts/SupplierLayout";

const FrontendRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route path="/" />
          </Route>
          <Route path="purchaseRequisitionSenior" element={<SeniorLayout />}>
            <Route path="view-requisition" />
          </Route>
          <Route path="accountant" element={<AccountantLayout />}>
            <Route path="view-invoices" />
            <Route path="approved-invoices" />
            <Route path="make-payment/:id" />
          </Route>
          <Route
            path="purchaseRequisition"
            element={<PurchaseRequisitionLayout />}
          >
            <Route path="view-requisition" />
          </Route>
          <Route path="order" element={<OrderLayout />}>
            <Route path="view-order" />
            <Route path="add-order/:id" />
          </Route>
          <Route path="supplier" element={<SupplierLayout />}>
            <Route path="view-orders" />
            <Route path="approved-orders" />
            <Route path="create-invoice/:id" />
          </Route>
          <Route exact path="/logout" element={<LogOut />} />
        </Routes>
      </Router>
    </>
  );
};

export default FrontendRoutes;
