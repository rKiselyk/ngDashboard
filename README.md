# ngDashboard

## **Table of Contents**
- Team
- Description
- Setup
- Architecture
- Storage 

## **Team**
- Kiselyk Roman
 
## **Project Description**

this project is a board with information for the administrator where he can get information graphically. the whole project consists of 3 modules which are divided by purpose
- The first module shows statistics graphically for certain categories and presents it in the form of two types of graphs
- the second mogul is a page with a table in which all purchases are located and information about them is divided into pages that can be turned
- the third module shows whether all servers related to this site are alive and allows you to enable or disable it if necessary, ie monitors them

## **Setup**

**How to start Frontend solution**
You must install node.js and run npm install to download all dependencies for the project.
Then run npm run start to start up the project and navigate to http://localhost:4200/
This project was written in angular and shaved on small components that communicate with the server to obtain information and display it graphically

**How to start Backend solution**
Firstly you must run all migration by command dotnet ef database update(EF and PostrgesSql were used for migration).
After than you can start solution
This project was written on the .NET Core as WEB API With SOLID/KISS/DRY paters used.

## **Architecture**

| Part of project | Description                                               | Technologies                  |
| --------------- | --------------------------------------------------------- | ----------------------------- |
| Back end        | WEB API                                                   | .NET Core, ASP.Net Core       |
| Fron end        |                                                           | Angular, Type Script          |
| DB              |                                                           | EF, PostgresSql               |
