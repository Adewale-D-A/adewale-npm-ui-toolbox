# Custom NPM packages for reusable and useful UI

##### To test locally before deployment

> run `npm run bundle`
> use `npm link` on the package you want to test
> use it in your project with `require('adewale-ui-toolbox')` in the project where you want to use it for server projects and run `npm link adewale-ui-toolbox` in the project where you want to use it by importing `import { DragToReOrder } from "adewale-ui-toolbox"` for UI usecases. This installs the dependency locally for you to test with

##### Deployment command

> `npm publish --access public` to deploy to npmjs.com
