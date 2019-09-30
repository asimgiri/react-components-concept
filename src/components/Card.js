import React from 'react';
import CardImg from './CardImg';

export default function Card() {
    return (
        <div className="card">
            <CardImg />
            <div className="card-content">
                <div className="content">
                    <p className="has-text-grey-dark">Walk Master Beta</p>
                    <small className="has-text-grey">64MB</small>
                </div>
            </div>
        </div>
    )
}