module.exports = {
  roots: ['<rootDir>/test'],
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/applications/$1',
    '@business/(.*)': '<rootDir>/src/business/$1',
    '@infra/(.*)': '<rootDir>/src/infrastructure/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1'

  }
}
