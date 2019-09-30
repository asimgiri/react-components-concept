import React from 'react';

export default function Tabs() {
    return (
        <div className="tabs is-centered">
            <ul>
                <li className="is-active"><a>For You</a></li>
                <li><a>Top Charts</a></li>
                <li><a>Premium</a></li>
                <li><a>Categories</a></li>
                <li><a>Family</a></li>
            </ul>
        </div>
    )
}