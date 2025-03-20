import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#5C350C' }} variant="dark">
      <Container>
        <Link href="/" className="navbar-brand" style={{ color: '#D9C49A' }}>
          Nailed It Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/rooms" className="nav-link" style={{ color: '#FFFFFF' }}>
              Rooms
            </Link>
            <Link href="/materials" className="nav-link" style={{ color: '#FFFFFF' }}>
              Materials
            </Link>
            <Link href="/tools" className="nav-link" style={{ color: '#FFFFFF' }}>
              Tools
            </Link>
            <Link href="/projects" className="nav-link" style={{ color: '#FFFFFF' }}>
              Projects
            </Link>
          </Nav>
          <Button onClick={signOut} className="custom-btn">
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
