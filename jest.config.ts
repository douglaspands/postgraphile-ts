import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['./src/**'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: ['json', 'html', 'text'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    preset: 'ts-jest',
    roots: ['<rootDir>/tests'],
    modulePaths: [compilerOptions.baseUrl],
    verbose: true,
};
