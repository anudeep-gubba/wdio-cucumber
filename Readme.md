# Instructions to Run Tests

### 1. **Running All Tests**

To execute all tests, use:

```bash
npm run wdio
```

### 2. **Clearing Results and Running Tests**

To clean up previous results before running the tests, run:

```bash
rm -rf allure-results/* && npm run wdio
```

### 3. **Viewing Test Reports**

To view results run:

```bash
allure serve allure-results
```
