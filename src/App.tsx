import Navbar from "./components/navbar/navbar.tsx";
import InvoiceHeader from "./components/invoiceheader/invoiceheader.tsx";
import NoInvoices from "./components/noinvoices/noinvoices.tsx"
import InvoiceList from "./components/invoicelist/invoicelist.tsx"


import InvoiceData from "./data.json";

type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
};

const invoices: Invoice[] = InvoiceData;

function App() {
  return (
    <>
      <Navbar />
      <InvoiceHeader InvoiceAmount={InvoiceData.length} />
      {invoices.length == 0 && <NoInvoices />}
      {invoices.length > 0 && <InvoiceList data={invoices} /> }
    </>
  );
}

export default App;
