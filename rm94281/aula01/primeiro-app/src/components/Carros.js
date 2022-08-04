import React from 'react';
import carImg from '../img/car.jpg';
export default function Carros() {
    return (
        <>
        <img src={carImg} alt='car'></img>
        <ul>
            <li>Wolkswagen Gol</li>
            <li>Chevrolet Onix</li>
            <li>Hyundai HB20</li>
            <li>Honda Fit</li>
            <li>Fiat Palio</li>
        </ul>
        </>
    );
}