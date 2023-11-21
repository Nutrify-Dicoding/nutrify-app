/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
    return (
        <nav className="p-4 ps-0" aria-label="Breadcrumb">
            <ol className="list-reset flex text-grey-dark space-x-2">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={item.url} className='text-gray-400 hover:text-gray-600 transition'>{item.label}</Link>
                        {index < items.length - 1 && <span className="text-gray-400">&gt;</span>}
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb