import React from 'react';

export default function Search() {
    return (
        <div className="control has-icons-left has-icons-right">
            <input className="input" type="search" placeholder="Search" />
            <span className="icon is-small is-left">
                <i className="fas fa-bars"></i>
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-microphone"></i>
            </span>
        </div>
    )
}