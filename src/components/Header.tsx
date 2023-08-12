import React from 'react';

interface HeaderProps {
  welcomeText: string;
}

const Header: React.FC<HeaderProps> = ({ welcomeText }) => {
  return <h1 className="header">{welcomeText}</h1>;
};

export default Header;
