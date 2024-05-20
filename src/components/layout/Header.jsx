import React from 'react'

const Header = () => {
    return (
      <header style={headerStyle}>
        <h1>My To Do List</h1>
      </header>
    )
}

const headerStyle = {
  background: 'teal',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold'
}

export default Header