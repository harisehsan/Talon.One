import { defineConfig } from 'cypress'
import { rmSync } from 'fs'

export default defineConfig({
    e2e: {
        baseUrl: 'https://www.demoblaze.com',
        testIsolation: false,
        video: false,
        defaultCommandTimeout: 6000,
        pageLoadTimeout: 10000,
        specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
        supportFile: 'cypress/support/e2e.ts',
        videosFolder: 'cypress/videos',
        screenshotsFolder: 'cypress/screenshots',
        screenshotOnRunFailure: true,
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: true,
            html: true,
            json: false,
            embeddedScreenshots: true,
        },
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on)
        },
    },
})
