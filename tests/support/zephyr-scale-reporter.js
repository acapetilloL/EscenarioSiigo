const fs = require('fs');
const path = require('path');
const axios = require('axios');

const ZEPHYR_BASE_URL = 'https://siigo.atlassian.net';
const API_TOKEN = 'setToken';

async function reportTestResult(testKey, status, comment = '', executedBy = 'your_username') {
  const executionData = {
    projectKey: 'RCA',
    testCaseKey: testKey,
    status, 
    comment,
    executedBy,  
    executionTime: 180000, 
    actualEndDate: new Date().toISOString(),
  };

  try {
    const response = await axios.post(
      `${ZEPHYR_BASE_URL}/rest/atm/1.0/testresult`,
      executionData,
      {
        headers: {
          Authorization: `Basic ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`Reported result for ${testKey}:`, response.data);
  } catch (error) {
    console.error(`Failed to report result for ${testKey}:`, error.response?.data || error.message);
  }
}

async function processCucumberResults(resultsFile) {
  try {
    const resultsPath = path.resolve(resultsFile);
    if (!fs.existsSync(resultsPath)) {
      throw new Error(`Results file ${resultsPath} not found.`);
    }

    const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
    for (const feature of results) {
      for (const scenario of feature.elements) {
        const testKey = scenario.tags.find(tag => tag.name.startsWith('@'))?.name.substring(1); // @TS-001 -> TS-001
        const status = scenario.steps.every(step => step.result.status === 'passed') ? 'Pass' : 'Fail';
        const comment = scenario.steps
          .filter(step => step.result.status !== 'passed')
          .map(step => `${step.name}: ${step.result.error_message || 'No error message'}`)
          .join('\n');

        if (testKey) {
          await reportTestResult(testKey, status, comment);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing Cucumber results: ${error.message}`);
  }
}

(async () => {
  const resultsFile = 'tests/reports/test-results.json';
  await processCucumberResults(resultsFile);
})();