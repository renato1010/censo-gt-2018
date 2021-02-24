<div>
  <h1 align="center">GraphQL API data de el censo de Guatemala 🇬🇹 2018</h1>
  <strong>
    GraphQL API para el censo de poblacion de Guatemala año 2018.
  </strong>
  <p>
    A partir de una coleccion de <a href="https://www.censopoblacion.gt/explorador">hojas en excel</a>
    creamos un <a href="https://graphql.org/">GraphQL</a> API como middleware de <a href="https://www.apollographql.com/docs/apollo-server/">Apollo Server</a><br>
    Sobre <a href="https://nodejs.org/en/">Node.js</a> con <a href="https://www.typescriptlang.org/">Typescript</a> 
  </p>

  <a href="https://epicreact.dev">
    <img
      alt="de CSV a GraphQL"
      src="https://icons-images.s3.us-east-2.amazonaws.com/censo-gt-2018/main_pic_censo_header1.png"
    />
  </a>
</div>

<hr />

## Prerequisitos

- Conocimientos de `JavaScript` moderno y `Node.js`.
- Conocimiento de `Express.js` es util pero no indispensable
- Planeamos impartir mentorias de `Typescript`, `GraphQL`, `MongoDB`

## Base de datos Cloud
 - El proyecto implementa como base de datos una instancia 'gratis' de MongoDB Atlas
Aqui un recurso de como se puede acceder a MongoDB atlas instancia gratuita  
[Getting your free MongoDB atlas cluster](https://www.youtube-nocookie.com/embed/rPqRyYJmx2g)
 - Al tener un cluster de Atlas podra formar un esquema de coneccion semejante a el siguiente:
```typescript
const user = process.env.DB_USER;
const password = process.env.DB_USER_PASSWORD;
const dbName = process.env.DB_NAME;
const clusterName = process.env.CLUSTER_NAME;

const dbConnectionURL = `mongodb+srv://${user}:${password}@${clusterName}.h8rwn.mongodb.net/${dbName}?retryWrites=true&w=majority`;
```
donde `process.env.DB_USER` son variables de ambiente (env vars) que se registran en un archivo .env

## Stack del proyecto

![stack-image](https://icons-images.s3.us-east-2.amazonaws.com/censo-gt-2018/censo-gt-2018_stack1.png)

## Requerimientos del sistema

- [git][git] v2.13 or greater
- [NodeJS][node] `14 || 15`
- [npm][npm] v6 o mas reciente

## Arrancar el proyecto en dev

```bash
git clone https://github.com/renato1010/censo-gt-2018
cd censo-gt-2018
npm start
```

## Extras
 - [Procesamiento de data .csv => MongoDB collection](data-piping.md)
 - [Testing](testing.md)

<h2><mark>Este documento es una obra en proceso </mark>🤙🏼</h2>

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
<!-- prettier-ignore-end -->
