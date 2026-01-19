# Local development

## Allure3

1. No need to install Java :)
2. We need nodejs.
3. We need to install allure3.
4. Run your tests.
5. Generate and open
6. or serve the report

### We need nodejs

```shell
nvm install something
#then
nvm use something
```

### We need Allure3

```shell
npm install -g allure
```

#### Transition time

Add this to the config of the used shell.

```text
alias allure2="/opt/homebrew/Cellar/allure/2.36.0/bin/allure"
alias allure3="/Users/${USER}/.nvm/versions/node/v22.21.0/bin/allure"
```

### Run your tests

```shell
pnpm test
```

**OR**

### Run your tests by allure3

```shell
allure3 run -- pnpm test
```

**OR** with the reference to the config file

```shell
allure3 run --config=./allurerc.mjs -- pnpm test && allure3 open --config=./allurerc.mjs
```

[TOC](./!toc.md)