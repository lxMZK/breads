const React = require('react')
const Default = require('./layouts/default')

function error() {
    return (
        <Default>
            <h1>Error 404</h1>
            <form action="/breads"><input type="submit" value="Take Me Back!"/></form>
        </Default>
    )
}

module.exports = error