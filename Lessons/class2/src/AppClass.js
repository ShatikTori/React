import React from 'react';
import { PlaceClass } from './PlaceClass';

export class AppClass extends React.Component{
    render() {
        return (
            <div>
                <h1>This is a class component</h1>
                <PlaceClass />
            </div>
        )
    }
}