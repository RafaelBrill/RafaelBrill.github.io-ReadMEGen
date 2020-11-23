/*const { fstat } = require("fs")
    // Function to generate mark down

const { title } = require("process")*/

function generateMarkDown(response) {
    return `

    # ${response, title} 
    ![badmath] (https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
    ## Table of contents
    * [Description] (#description)
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributors] (#contributors)
    * [Test] (#test)
    * [Questions] (#questions)
    
    ${response.Description}
    ${response.Install}
    ${response.Usage}
    ${response.License}
    ${response.Contributors}
    ${response.Test}


    If you like to contact me:
    Github:[${response.Github}] (https://github.com/${response.username})
    Email:[${response.Email}] (https://github.com/${response.username})
    
        `
}

module.exports = generateMarkDown