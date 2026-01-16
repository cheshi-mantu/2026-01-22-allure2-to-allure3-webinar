./clean-results.sh

# pnpm allure run --config=./allurerc.mjs -- pnpm test

pnpm test
pnpm allure generate --config=./allurerc.mjs ./allure-results
pnpm allure open --config=./allurerc.mjs