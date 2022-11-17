import * as React from 'react'

var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Toggle Password Visibility</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
                <link rel="stylesheet" href="css/style.css" />
                <div className="container">
                    <h1>Your Credentials</h1>
                    <form>
                        <label htmlFor="username">Client ID:</label><br />
                        <input type="text" name="username" id="username" defaultValue={1233222} readOnly />
                        <label htmlFor="password">Client Secret:</label>
                        <input type="password" name="password" id="password" defaultValue={1234} readOnly />
                        <i className="bi bi-eye-slash" id="togglePassword" />
                    </form>
                </div>
            </div>
        );
    }
});
