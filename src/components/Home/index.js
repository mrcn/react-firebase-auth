import React from 'react';
import Card from '../Card';

const HomePage = () => (
    <div>
        <h1>Home</h1>
        <div className="ui three stackable doubling cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
);

export default HomePage;
