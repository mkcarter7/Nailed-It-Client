import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#5C350C' }} variant="dark">
      <Container>
        <Link passHref href="/" className="navbar-brand" style={{ color: '#FFFFFF' }}>
          Nailed In
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" href="/" style={{ color: '#FFFFFF' }}>
              Rooms
            </Link>
            <Link className="nav-link" href="/materials" style={{ color: '#FFFFFF' }}>
              Materials
            </Link>
            <Link className="nav-link" href="/tools" style={{ color: '#FFFFFF' }}>
              Tools
            </Link>
            <Link className="nav-link" href="/projects" style={{ color: '#FFFFFF' }}>
              Projects
            </Link>
          </Nav>
          <Button
            onClick={signOut}
            style={{
              backgroundColor: '#5C350C',
              borderColor: '#5C350C',
              color: '#FFFFFF', // Text color changed to white
            }}
          >
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
