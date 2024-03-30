import React from 'react';

class LoginButton extends React.Component {
    login = () => {
        fetch('http://localhost:3001/login')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.url;
            })
            .then(url => {
                window.location.href = url;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };

    render() {
        return <button onClick={this.login}>Log in</button>;
    }
}

export default LoginButton;