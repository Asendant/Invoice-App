import NoInvoicesGraphic from "../../assets/illustration-empty.svg"

const NoInvoices = () => {
 return (
    <div className="flex flex-col justify-center items-center mt-24">
        <img src={NoInvoicesGraphic} className="w-1/2 mb-6"/>
        <h1 className="font-bold text-2xl mb-4">There is nothing here</h1>
        <p className="font-base text-[#888EB0] w-[65%] text-center">Create an invoice by clicking the <em className="not-italic font-bold">New</em> button and get started</p>
    </div>
 )
}

export default NoInvoices