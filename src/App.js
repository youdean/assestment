// src/App.js
import React, { useState } from "react";
import InvoiceList from "./components/InvoiceList";
import InvoiceDetail from "./components/InvoiceDetail";
import { trinvoice } from "./mockData";

const App = () => {
  const [invoices, setInvoices] = useState(trinvoice);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleDelete = (id) => {
    setInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice.InvoiceNo !== id));
    setSelectedInvoice(null);
  };

  // const handleUpdateInvoice = (updatedInvoice) => {
  //   setInvoices((prevInvoices) =>
  //     prevInvoices.map((invoice) =>
  //       invoice.id === updatedInvoice.id ? updatedInvoice : invoice
  //     )
  //   );
  //   setSelectedInvoice(null);
  // };

  return (
    <div>
      <h1>Invoice App</h1>
      <InvoiceList invoices={invoices} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedInvoice && (
        <InvoiceDetail invoice={selectedInvoice} />
      )}
      {/* Render an update/edit form component here and pass handleUpdateInvoice */}
    </div>
  );
};

export default App;
