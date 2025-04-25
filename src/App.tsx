import Navbar from "./components/navbar/navbar.tsx";
import InvoiceHeader from "./components/invoiceheader/invoiceheader.tsx";

import InvoiceData from "./data.json";

function App() {
  return (
    <>
      <Navbar />
      <InvoiceHeader InvoiceAmount={InvoiceData.length} />
    </>
  );
}

export default App;
