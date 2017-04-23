# cc-graphql
A  Serverless GraphQL Backend for my resume/ portfolio site

GraphQL endpoint:
[https://rlk7p3dxd8.execute-api.us-west-1.amazonaws.com/production/graphql](https://rlk7p3dxd8.execute-api.us-west-1.amazonaws.com/production/graphql)

It's deployed as an AWS Lambda function using the [Serverless Framework](https://serverless.com/)

You can interact with the API at [http://www.cameroncarlyle.com/graphiql](http://www.cameroncarlyle.com/graphiql) or you could use [GraphiQL App](https://github.com/skevy/graphiql-app) or the Chrome extension [ChromeiQL](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en).


## Getting Started
1. `git clone https://github.com/carlyleec/cc-graphql.git`
2. `yarn`
3. `npm start`

This will start a dev server running GraphiQL at [http://localhost:3000](http://localhost:3000/ggraphiql).


## To deploy

1. You need to install the [Serverless CLI](https://serverless.com/framework/docs/providers/aws/guide/installation/)
2. You'll also need to set up your AWS credentials for Severless using the Serveless CLI `config` command, instructions are [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
3. Then run `serverless deploy` to deploy to the default AWS `us-east-1 `region with the default state of `dev`. To deploy to production or to a different AWS region use `serverless deploy --stage production --region us-west-1` for example. More on Serverless for AWS [here](https://serverless.com/framework/docs/providers/aws/guide/)
