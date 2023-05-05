import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Termes = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur minima blanditiis aut delectus cupiditate ea vitae dolore at laborum, minus eius fugit! Omnis iusto ducimus non magnam accusamus! Quaerat, obcaecati!</p>
            <p>Go back to <Link to= "/register">Register</Link> </p>
        </Container>
    );
};

export default Termes;