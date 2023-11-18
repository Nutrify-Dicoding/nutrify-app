/* eslint-disable react/prop-types */
import React from 'react';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="p-4 ps-0" aria-label="Breadcrumb">
            <ol className="list-reset flex text-grey-dark space-x-2">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <a href={item.url} className="text-gray-400 hover:text-gray-600 transition">
                            {item.label}
                        </a>
                        {index < items.length - 1 && <span className="text-gray-400">&gt;</span>}
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb