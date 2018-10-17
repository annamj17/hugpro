[![CircleCI](https://circleci.com/gh/arnlaugsson/hugpro.svg?style=svg)](https://circleci.com/gh/arnlaugsson/hugpro)

# Hugb - Week 10 - 2018
This is an example Express.js API project with static file serving.

## Getting started
1. Run `npm install`
2. Run `npm test` for tests and `npm start` for booting the server.

## API
The API is running on port 3000 or the system's environment port (`process.env.port`). It currently has a single endpoint for `GET`  requests only;

`/api/greeting/<name>`

## "Client"
The "client" is a simple HTML static file, plus a Javascript form listener, that takes the submitted value from a form, and uses `fetch` to communicate to the API and return a message, which is then used to update the HTML page.

## Next steps
1. Move the public Javascript files into a "client" folder in the src folder.
2. Add tests and functionality to the Javascript client.
3. Introduce Webpack to bundle and build the artifacts.
4. Add build targets for distribution (Azure, AWS?).
5. Profit.
