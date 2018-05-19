import React from 'react';

// creating the header component
const Header = ({ message }) => {
    return (
        <h2 className="text-center">
            {message}
        </h2>
    )
}
// validating the type of content that goes in message
Header.propTypes = {
    message: React.PropTypes.string
};

export default Header;
