# Local development

## Allure2

1. Install Java
2. Install allure2 commandline utility
3. Run your tests
4. Generate and open
5. or serve the report

### Install Java

```shell
sdk install java 21.0.9-amzn
```

### Install allure2 commandline utility

Using brew or directly installing the binary files from github repo of the project.

```shell
brew install allure
```

### Run tests

```shell
pnpm test
```

### Generate report

```shell
allure2 generate ./allure-results && allure2 open ./allure-report
```

or

```shell
allure2 serve ./allure-results
```

## Allure3

1. No need to install Java :)
2. We need node
3. Run your tests
4. Generate and open
5. or serve the report

### We need nodejs

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