import React from 'react';
import Search from '../components/Search';
import Tabs from '../components/Tabs';
import Category from '../components/Category';
import CategoryLg from '../components/CategoryLg';

export default function Home() {
    return (
        <div className="columns">
            <div className="column is-5 wrapper">
                <Search />
                <Tabs />
                <Category />
                <CategoryLg />
                <Category />
                <CategoryLg />
            </div>
        </div>
    )
}