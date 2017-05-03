'use strict';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import fs from 'fs';
import path from 'path';

import resolverMap from './resolverMap';

const baseSchema = fs.readFileSync(path.join(__dirname, './schema.graphql')).toString();

const schemaExec = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolverMap
});

const app = express();
const PORT = 8000;

// graphiql 

aapp.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
