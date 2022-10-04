# ZIDAutomatFrontend

This Repository ist split into thee parts. The UserFrontend, AdminFrontend and the automat-shared library. The UserFrontend is the frontend for the users of the automat. The AdminFrontend is the frontend for the admins of the automat. The automat-shared library is a library that is used by both frontends. The reason for that is, if a component needs to be used in both project, it is placed in the shared project. After that, the component can be imported in both projects.

## Setup

`npm install`

## Start Developing

If you want to develop in the UserFrontend project, you have to run the following command:
#### `ng serve UserFrontend`

If you want to develop in the AdminFrontend project, you have to run the following command:
#### `ng serve AdminFrontend`

If you want to develop in the shared project, you have to run the following command:

#### `ng build AutomatShared --watch`
<br>
If you want to develop in two or more projects at the same time, you have to run the commands in different terminal sessions


## Generate Component, Pipes, Services, Directives ...

If you want to generate a component, pipe... you can use the ng generate command, like always. But you have to specify the project(`--project=AutomatShared`), where you want to generate something. For example, if you want to generate a component in the AutomatShared project, you have to run the following command:

`ng generate component <Componentname> --project=AutomatShared`

### Generating Something in the AutomatenShared Project

If a new Compoent ... is created in the AutomatenShared project, it has to be added to the public_api.ts file. Otherwise, the component can't be used in the other projects. To add a component to the public_api.ts file, you have to add the following line to the file:

`export * from './lib/<added file>';`
