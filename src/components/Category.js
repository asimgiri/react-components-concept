import React from 'react';
import Card from './Card';

export default function Category() {
    return (
        <section>
            <h2 className="subtitle is-5">Popular Downloads <i className="fas fa-arrow-right is-pulled-right"></i></h2>
            <div className="columns">
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
            </div>
        </section>
    )
}