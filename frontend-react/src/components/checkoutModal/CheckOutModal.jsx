import React from 'react';
import './CheckOutModal.css'

function CheckOutModal({timeOfDay, language, groupSize, date, price}) {
    return (
        <div className={"checkout-modal"}>
            <div className={"checkout-modal-content"}>
                            <span className={"checkout-modal-exit"}>
                                &#10060;
                            </span>
                <h1>Thank you for the Order!</h1>
                <p>
                    An email will shortly be sent to you! The Email will consist of information of you're order.
                    We appreciate everyone and wants to make sure every customer gets the best services from us.
                </p>
                <table className={"modal-table"}>
                    <caption className={"modal-table-title"}>ORDER SUMMARY</caption>
                    <tr>
                        <th>Time of day</th>
                        <th>Language</th>
                        <th>Group size</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>{timeOfDay}</td>
                        <td>{language}</td>
                        <td>{groupSize}</td>
                        <td>{date}</td>
                    </tr>
                </table>
                <h2>{price},-</h2>
            </div>
        </div>
    );
}

export default CheckOutModal;