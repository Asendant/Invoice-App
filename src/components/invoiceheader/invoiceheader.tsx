import DownArrow from "../../assets/icon-arrow-down.svg"
import Plus from "../../assets/icon-plus.svg"

interface Props {
  InvoiceAmount: number;
}

const InvoiceHeader = (props: Props) => {
  return (
    <div className="flex flex-row justify-between mt-10">
      <div className="ml-10">
        <h1 className="font-bold text-2xl">Invoices</h1>
        <p className="text-[#888EB0] font-medium text-base">
          {props.InvoiceAmount == 0
            ? "No Invoices"
            : props.InvoiceAmount + " invoices"}
        </p>
      </div>
      <div className=" mr-10 ml-10 flex flex-row items-center">
        <button className="flex flex-row justify-center items-center mr-4">
          <h2 className="mr-3 font-bold">Filter</h2>
          <img src={DownArrow} />
        </button>
        <button className="flex flex-row justify-center items-center bg-[#7C5DFA] rounded-4xl px-4 py-2">
          <div  className="mr-2 bg-white h-8 w-8 rounded-full flex justify-center items-center">
            <img src={Plus} className="h-4"/>
          </div>
          <h2 className="text-white font-bold">New</h2>
        </button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
