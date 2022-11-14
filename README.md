# ZIDAutomatFrontend

This Repository ist split into four parts. The UserFrontend, AdminFrontend, APIAutomat and the automat-shared. The UserFrontend is the frontend for the users of the automat. The AdminFrontend is the frontend for the admins of the automat. The automat-shared library is a library that is used by both frontends. The reason for that is, if a component needs to be used in both project, it is placed in the shared project. After that, the component can be imported in both projects.

The APIAutomat project is used to communicate with the backend. The the API Client is generated via the ng-openapi-gen package. Anything written in this project is overwritten when the API Client is regenerated.
at

## Setup

Installs all node packages

```bash
npm install
npm install -g ng-openapi-gen
npm run generate-api-client-File
```

## Start Developing

If you want to develop in the UserFrontend project, you have to run the following command:

```bash
ng serve UserFrontend
```

If you want to develop in the AdminFrontend project, you have to run the following command:

```bash
ng serve AdminFrontend
```

If you want to develop in the shared project, you have to run the following command:

```bash
ng build AutomatShared --watch
```

If you want to develop in two or more projects at the same time, you have to run the commands in different terminal sessions

## Generate API Client

If you want to generate the API Client, you have to run one of the two following commands. The difference of each is the datasource.

The first one uses the local Swagger.json file
#### `npm run generate-api-client-File`

The second one downloads the Swagger.json file from the local Swagger instance and runs then the generate api-client-File Command.

#### `npm run generate-api-client-Swagger`

## Generate Component, Pipes, Services, Directives ...

If you want to generate a component, pipe... you can use the ng generate command, like always. But you have to specify the project(`--project=AutomatShared`), where you want to generate something. For example, if you want to generate a component in the AutomatShared project, you have to run the following command:

`ng generate component <Componentname> --project=AutomatShared`

### Generating Something in the AutomatenShared Project

If a new Compoent ... is created in the AutomatenShared project, it has to be added to the public_api.ts file. Otherwise, the component can't be used in the other projects. To add a component to the public_api.ts file, you have to add the following line to the file:

#### `export * from './lib/<added file>';`

####  `The Element has to be added to the export in the Angular module!`


## Information

### Theming

The Themeing was made with the following website:
https://materialtheme.arcsine.dev/

The current Style of the User and Admin Page

[theme](https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48I2UyMDAzOSIsIj9lcjwjZjZiM2M0IiwiO2VyPCNkNjAwMjR$LCIlPmBePCNmYjAwM2YiLCI~ZXI8I2ZlYjNjNSIsIjtlcjwjZjkwMDI5fiwid2Fybj5gXjwjZmYwMDAwIiwiP2VyPCNmZmIzYjMiLCI7ZXI8I2ZmMDAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmFmYWZhIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMyYzJjMmN$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxTaGFycCIsIj9uZXNzPnRydWUsInZlcnNpb24$MTF9)

If changes are made it has to be manually downloaded.

### Other Information

## Using Icons
Use the Icon Component(If you are using a Icon was never used before, is has to be added to the Map in the IConService )