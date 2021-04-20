import React from 'react';

const BookingDataDetail = ({ listDetails }) => {
    console.log({ listDetails })
    return (
        <tbody class="table-dark">
            <tr>
                <th scope="row">{listDetails?.serviceName}</th>
                <td>{listDetails?.servicePrice}</td>
                <td>{listDetails?.paymentId}</td>
            </tr>
        </tbody>
    );
};

export default BookingDataDetail;