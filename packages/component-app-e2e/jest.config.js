module.exports = {
  displayName: 'component-app-e2e',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$':  'ts-jest' 
  },
    moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/component-app-e2e'
};
