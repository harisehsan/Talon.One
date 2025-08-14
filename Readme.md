# 1. Task


### Steps to Run Tests in GitHub Actions (CI/CD)
I have configured the tests to be able to run in the GitHub Action (CI/CD). The steps to run them are as follows:

1. Go to the link: https://github.com/harisehsan/Talon.One/actions/runs/16977208497/job/48129310203
2. Login to GitHub with your account. If no account, then please sign up and login on GitHub.
3. Click on "Re-run all jobs" button on top right corner of webpage. So it will re-run the tests again in pipeline.
4. Wait for steps to complete. It will show in yellow color (circle moving) if it is in process.
5. When you see the following:
   a. Tick in Green Circle (when all the tests are passed and every thing goes as expected).
   b. Cross in red circle (when test(s) are failed or something is wrong in configuration).
6. To see the test execution in console --> expand "Run Cypress (Chrome)" section --> Scroll down to see "Login & Purchase Functionality".
7. To see the reports --> expand "Upload Mochawesome report" section --> Click on the URL link next to "Artifact download URL:" to download report.
8. Once the report is downloaded --> extract the downloaded report locally (use any .zip extractor) --> Open "index.html" file to see test report.  

### Steps to Run Tests in Locally
There are following steps to run the test locally in your computer.

1. Open terminal in (Linux or Mac OS) OR Powershell in windows. 
2. Run the the command `node -v`. if you see the node version then it's fine. Otherwise, Download and install Node.js (https://www.youtube.com/watch?v=lt5D2EWZMN0)
2. Run the command `git clone https://github.com/harisehsan/Talon.One.git`
3. goto the cloned project root directory `cd <projectName>`. Replace the <projectName> with real directory name before run command.
4. To check if you are in the correct directory. use command `dir` in windows powershell OR `ls` in Linux or mac.
   a. Must see `package.json` file. if yes, then you are in the correct directory. Otherwise, use `cd` command to goto correct directory.
5. Run the command `npm install`. Wait for it to complete.
6. Run the command `npm install cypress --save-dev`. Wait for it to complete.
7. Run the command `npm i -D cypress-mochawesome-reporter`. Wait for it to complete.
8. and then `npm i -D cypress-xpath`. Wait for it to complete.
9. Run the command to execute the tests locally `npx cypress run --browser chrome --spec "cypress/e2e/purchase.spec.cy.ts" --headed`.
10. 





1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npx http-server -p 3000
   ```
