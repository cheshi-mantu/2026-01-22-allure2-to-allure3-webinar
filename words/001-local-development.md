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


