interface Props {
  InvoiceAmount: number;
}

const InvoiceHeader = (props: Props) => {
  return (
    <div>
      <div>
        <h1>Invoices</h1>
        <p>
          {props.InvoiceAmount == 0
            ? "No Invoices"
            : props.InvoiceAmount + " invoices"}
        </p>
      </div>
      <div>
        <div></div>
        <button></button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
