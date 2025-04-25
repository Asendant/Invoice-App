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

interface Props {
    data : Invoice[]
}

const months: { [key:string]: string} = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

const InvoiceList = (props : Props) => {
    return (
        <div>
            <ul>
                {props.data.map(invoice => {
                    const splitPaymentDueDate = invoice.paymentDue.split("-")
                    const monthName = months[splitPaymentDueDate[1]]
                    return (
                        <li className="bg-gray-500 mb-10">
                            <h2>#{invoice.id}</h2>
                            <p>{invoice.clientName}</p>
                            <p>Due {splitPaymentDueDate[2]} {monthName} {splitPaymentDueDate[0]}</p>
                            <h2>{invoice.total}</h2>
                            <h2>{invoice.status}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default InvoiceList