// src/mockData.js
export const trinvoice = [
    { InvoiceNo: "IN0001", InvoiceDate: "2015-06-23 00:00:00", InvoiceTo: "Invoice Orang 1", ShipTo: "Ship Orang 1", SalesID: 1, CourierID: 1, PaymentType: 1, CourierFee: 0 },
    { InvoiceNo: "IN0002", InvoiceDate: "2019-02-27 00:00:00", InvoiceTo: "Invoice Orang 2", ShipTo: "Ship Orang 2", SalesID: 2, CourierID: 2, PaymentType: 2, CourierFee: 0 },
];

export const trinvoicedetail = [
    { InvoiceNo: "IN001", ProductID: 1, Weight: 1.5, Qty: 3, Price: 10000 },
    { InvoiceNo: "IN001", ProductID: 7, Weight: 0.25, Qty: 1, Price: 8000 },
    { InvoiceNo: "IN001", ProductID: 9, Weight: 2, Qty: 3, Price: 64000 },
    { InvoiceNo: "IN002", ProductID: 7, Weight: 0.25, Qty: 1, Price: 8000 },
    { InvoiceNo: "IN002", ProductID: 10, Weight: 0.5, Qty: 3, Price: 20000 },
    { InvoiceNo: "IN002", ProductID: 9, Weight: 2, Qty: 2, Price: 64000 },
];

export const msproduct = [
    { ProductID: 1, ProductName: "Tepung", Weight: 1.5, Price: 10000 },
    { ProductID: 7, ProductName: "Bluband", Weight: 0.25, Price: 8000 },
    { ProductID: 9, ProductName: "Beras", Weight: 1, Price: 64000 },
    { ProductID: 10, ProductName: "Eskrim", Weight: 0.5, Price: 20000 },
    { ProductID: 11, ProductName: "Kentang", Weight: 1, Price: 15000 },
];

export const mssales = [
    { SalesID: 1, SalesName: "Andy" },
    { SalesID: 2, SalesName: "Jessica" }
];

export const mscourier = [
    { CourierID: 1, CourierName: "JNE" },
    { CourierID: 2, CourierName: "J&T" },
    { CourierID: 3, CourierName: "Wahana" },
];

export const mspayment = [
    { PaymentID: 1, PaymentName: "Cash" },
    { PaymentID: 2, PaymentName: "COD" },
];