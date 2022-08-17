# new.chat-sdk

⚒️ An SDK for building applications on top of NewChat

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm install @newchat/new.chat-sdk
```

### Initialize

Web library can be found in the [dist] folder

```javascript
// standard import
const { ActionGenerator, HyperionApi } = require("@newchat/new.chat-sdk");

// ES6 import
import { ActionGenerator, HyperionApi } from "@newchat/new.chat-sdk"
```

## Documentation

### ChainApi

Uses only native nodeos calls to chain api plugin.

### ActionGenerator

Helper class to construct contract actions which can be signed and pushed to chain with eosjs. 

Detailed information about each action can be found [here](docs/actions.md).