const React = require('react')
const bread = require('../models/bread')
const { lastIndexOf } = require('../models/bread')
const Default = require('./layouts/default')

function Index({ breads }) {
    return (
        <Default>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {
                    breads.map(function (breads, index) {
                        return (<li key={index}>
                            <a href={`/breads/${index}`}>
                                {breads.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index