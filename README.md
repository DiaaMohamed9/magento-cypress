
# Magento Cypress Automation Framework

## 🔧 Setup

```bash
git clone <repo_url>
cd magento-cypress
npm install
```

## 🔑 Environment Variables
Create a `.env` file with:

```
BASE_URL=https://magento.softwaretestingboard.com
TEST_EMAIL=john.doe@example.com
TEST_PASSWORD=Password123
```

## 🚀 Run Tests
```bash
npx cypress open         # For interactive
npx cypress run          # Headless
```

## 📊 Test Report
After running tests:
```bash
npx mochawesome-merge reports/*.json > report.json
npx marge report.json -f report -o reports
```
