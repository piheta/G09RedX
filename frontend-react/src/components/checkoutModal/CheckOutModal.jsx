import React from 'react';
import './CheckOutModal.css'
import { BsSuitHeartFill } from "react-icons/bs";

function CheckOutModal({timeOfDay, language, groupSize, date, price}) {
    return (
        <div className={"checkout-modal"}>
            <div className={"checkout-modal-content"}>
                            <span className={"checkout-modal-exit"}>
                                &#10060;
                            </span>
                <h1>Successful Order! <BsSuitHeartFill color={"ec361e"} /></h1>
                <p>
                    An email will shortly be sent to you! The email will consist of information of you're order.
                    We appreciate everyone and wants to make sure every customer gets the best services from us.
                </p>
                <table className={"modal-table"}>
                    <caption className={"modal-table-title"}>ORDER SUMMARY</caption>
                    <thead>
                    <tr>
                        <th>Time of day</th>
                        <th>Language</th>
                        <th>Group size</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{timeOfDay}</td>
                        <td>{language}</td>
                        <td>{groupSize}</td>
                        <td>{date}</td>
                    </tr>
                    </tbody>
                </table>
                <h2>{price},-</h2>
            </div>
        </div>
    );
}

export default CheckOutModal;
