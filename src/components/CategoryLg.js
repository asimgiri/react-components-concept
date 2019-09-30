import React from 'react';
import CardImg from './CardImg';

export default function CategoryLg() {
    return (
        <section className="category_lg">
            <h2 className="subtitle is-5">Featured Videos<i className="fas fa-arrow-right is-pulled-right"></i></h2>
            <div className="columns">
                <div className="column">
                    <div className="content_lg">
                        <div className="card-image"></div>
                        <div className="content">
                            <h2 className="subtitle has-text-white is-6">The big mystery unfolds.</h2>
                            <a class="button is-black is-inverted is-outlined is-small"><i className="fas fa-play"></i> Watch Now</a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="content_lg">
                        <div className="card-image"></div>
                        <div className="content">
                            <h2 className="subtitle has-text-white is-6">The big mystery unfolds.</h2>
                            <a class="button is-black is-inverted is-outlined is-small"><i className="fas fa-play"></i> Watch Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}