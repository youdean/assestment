// src/components/InvoiceList.js
import React from "react";

const InvoiceList = ({ invoices, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Invoice List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Penerima</th>
                        <th>Total</th>
                        <th>Courier Fee</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.InvoiceNo}>
                            <td>{invoice.InvoiceNo}</td>
                            <td>{invoice.InvoiceTo}</td>
                            <td>{invoice.PaymentType}</td>
                            <td>{invoice.CourierFee}</td>
                            <td>
                                <button onClick={() => handleEdit(invoice)}>Edit</button>
                                <button onClick={() => handleDelete(invoice.InvoiceNo)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceList;
