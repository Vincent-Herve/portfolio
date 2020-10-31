import React from 'react';
import { Container } from 'react-bootstrap';

const Page = ({ children }) => (
    <Container style={{padding: 0}} fluid>
        {children}
    </Container>
);

export default Page;