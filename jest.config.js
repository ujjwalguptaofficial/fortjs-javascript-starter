module.exports = {
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    testEnvironment: 'node',
    testRegex: '/test|e2e/.*\\.(test|spec)?\\.(ts|tsx|js)$',
    moduleFileExtensions: ['js'],

};