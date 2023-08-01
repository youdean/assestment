// src/components/InvoiceDetail.js
import { mssales, mscourier, mspayment, trinvoicedetail, msproduct } from "./../mockData";
import "./../InvoiceTable.css";

const InvoiceDetail = ({ invoice, handleInputChange }) => {
    return (
        <div>
            <h2>Invoice Details</h2>
            <p>
                <strong>Invoice Date:</strong>{" "}
                <input
                    type="datetime-local"
                    name="invoiceDate"
                    value={invoice.InvoiceDate}
                    onChange={handleInputChange}
                />
            </p>
            <p>
                <strong>To:</strong>{" "}
                <textarea
                    value={invoice.InvoiceTo}
                    onChange={handleInputChange}
                    rows={4} // Specify the number of rows (lines) visible in the text area
                    cols={40} // Specify the number of columns (characters) visible in the text area
                    placeholder="Enter your text here..."
                />
            </p>
            <p>
                <strong>Sales Name:</strong>{" "}
                <select
                    name="salesName"
                    value={invoice ? invoice.SalesID : ""}
                    onChange={handleInputChange}
                >
                    <option value="">Select Sales Name</option>
                    {mssales.map((sales) => (
                        <option key={sales.SalesID} value={sales.SalesID}>
                            {sales.SalesName}
                        </option>
                    ))}
                </select>
            </p>
            <p>
                <strong>Courier:</strong>{" "}
                <select
                    name="courier"
                    value={invoice ? invoice.CourierID : ""}
                    onChange={handleInputChange}
                >
                    <option value="">Select Courier</option>
                    {mscourier.map((courier) => (
                        <option key={courier.CourierID} value={courier.CourierID}>
                            {courier.CourierName}
                        </option>
                    ))}
                </select>
            </p>
            <p>
                <strong>Ship To:</strong>{" "}
                <textarea
                    value={invoice.ShipTo}
                    onChange={handleInputChange}
                    rows={4} // Specify the number of rows (lines) visible in the text area
                    cols={40} // Specify the number of columns (characters) visible in the text area
                    placeholder="Enter your text here..."
                />
            </p>
            <p>
                <strong>Payment Type:</strong>{" "}
                <select
                    name="paymentType"
                    value={invoice ? invoice.PaymentType : ""}
                    onChange={handleInputChange}
                >
                    <option value="">Select Payment Type</option>
                    {mspayment.map((payment) => (
                        <option key={payment.PaymentID} value={payment.PaymentID}>
                            {payment.PaymentName}
                        </option>
                    ))}
                </select>
            </p>

            <div>
                <h2>Invoice Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Weight</th>
                            <th>QTY</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trinvoicedetail.map((invoiceDetail) => {
                            const {ProductID, Weight, Qty, Price} = invoiceDetail;
                            const product = msproduct.find((product) => product.ProductID === ProductID);
                            const { ProductName } = product;

                            return (
                                <tr key={ProductID}>
                                    <td>{ProductName}</td>
                                    <td>{Weight}</td>
                                    <td>{Qty}</td>
                                    <td>{Price}</td>
                                    <td>{Qty * Price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceDetail;
