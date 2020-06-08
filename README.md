## Team-267

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b13777f5d669412cb02635a66b5de4a8)](https://app.codacy.com/gh/BuildForSDG/farmrail?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDG/farmrail&utm_campaign=Badge_Grade_Dashboard)

Build for SDG project repo
## **Project Name: Farm Rail**

PRODUCT DESCRIPTION

Farm rail is a web-based application that connects farmers to produce buyers/offtakers ranging from small scale produce buyers to large-scale produce buyers like companies, enabling buying and selling of farm inputs online and providing farmers with access to a chat forum where they can share information regarding various matters that could be challenging them.
The product is to connect the entire agricultural sector ecosystem bringing the main drivers of the industry together in one platform.

## **Architecture**

|   Name        |   Service   |  Container  |    Tech                    |
|:-------------:|:-----------:|:-----------:|:--------------------------:|
| Web           | Web         | web         | React, Redux, React-Router |
| Produce API   | Produce     | produce     | Django Rest framework      |
| Farm API      | Farms       | farms       | Node, Express, Auth0       |
| User API      | Membership  | membership  | Node, Express, Auth0       |
| Cart API      | Shopping    | shopping    | Django Rest framework      |

 
 ## **Overall project structure**
 ```
├── src
│   ├── services
│   │   ├── cart_api
|   |   |   |   ├── cartAPI
│   │   |   │   └── sqlite
│   │   |   └── swagger
|   |   |
│   │   ├── produce_api
|   |   |   |   ├── produceAPI
│   │   |   │   └── sqlite
│   │   |   └── swagger
|   |   |
│   │   ├── user_api
|   |   |   |   └── src
│   │   |   └── mongodb
|   |   |
│   │   └── farm_api
|   |
│   └── web
│   │   └── src
└── tests
 ```

## **Contribute 🐱‍🏍**
Follow these steps to contribute;
- Clone the repository to your local machine
- Install the needed dependencies
- Create a new branch and checkout to that branch
- Create your contribution 
- Push the changes to the remote repository
- Create a pull request to the main branch
- Wait for code preview and approval ✔

> **Your contribution will make a difference.** 😎

## **Credits** 🙌
- [**Kevin**](https://github.com/kmwamasali) </br> 
- [**Paul**](https://github.com/LadPaule) </br>
- [**Maria Angella**](https://github.com/MariaAngella) </br>
- [**Asiimwe Arnold**](https://github.com/asiimwearnold) </br>
- [**Kayondo Edward**](https://github.com/amkayondo) </br>
- [**Rogers Lubanga**](https://github.com/swimking) </br>
- [**Bekalaze Joseph**](https://github.com/bekeplar) </br>
- [**Andela SDG**](https://github.com/BuildForSDG) </br>