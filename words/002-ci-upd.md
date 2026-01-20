# Updating GH workflows to use Allure3

## GH Example

### Working with Allure 3

[allure3 report pipeline example](https://github.com/cheshi-mantu/2026-01-22-allure2-to-allure3-webinar/blob/allure3/.github/workflows/allure3.yml)

Main actions

|N|Action|Why?|
|--|-----|----|
|1.|~~Install Java~~|~~need for allure report ver 2 generation~~|
|2.|Enable pnpm|need for tests|
|3.|Setup node|need for tests|
|4.|Install dependencies and required libs like playwright.|need for tests|
|5.|Install Allure 3.|need for allure report ver 3 generation|
|6.|~~Download Allure 2 files (allurecommandline).~~|~~need for allure report ver 2 generation~~|
|7.|Run tests **AND** generate report|'cause we need to run them!|
|8.|~~Generate report~~| |
|9.|Publish report to GH pages|'cause boss wants link|

[And check, how it's working](https://github.com/cheshi-mantu/2026-01-22-allure2-to-allure3-webinar/actions/workflows/allure3.yml)

