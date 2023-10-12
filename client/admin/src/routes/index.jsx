import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeniorLayout from "../layouts/SeniorLayout";
import PurchaseRequisitionLayout from "../layouts/PurchaseRequisitionLayout";
import OrderLayout from "../layouts/OrderLayout";
import CommonLayout from "../layouts/Common Layout"; 

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
          <Route path="purchaseRequisition" element={<PurchaseRequisitionLayout />}>
            <Route path="view-requisition" />
          </Route>
          <Route path="order" element={<OrderLayout />}>
            <Route path="view-order" />
            <Route path="add-order" />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default FrontendRoutes;
