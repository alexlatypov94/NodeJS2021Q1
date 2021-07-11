# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

local run

``` npm run start:nest ```

```
docker compose up

```

## Artillery

``` npm run artillery ```

## Express                                  | Fasify

```
Report @ 21:54:14(+0300) 2021-07-11         |  Report @ 21:57:12(+0300) 2021-07-11
Elapsed time: 10 seconds                    |  Elapsed time: 10 seconds
  Scenarios launched:  49                   |    Scenarios launched:  49
  Scenarios completed: 0                    |    Scenarios completed: 0
  Requests completed:  49                   |    Requests completed:  49
  Mean response/sec: 5.01                   |    Mean response/sec: 5.01
  Response time (msec):                     |    Response time (msec):
    min: 68                                 |      min: 68
    max: 86                                 |      max: 163
    median: 69                              |      median: 70
    p95: 75.2                               |      p95: 149.3
    p99: 86                                 |      p99: 163
  Codes:                                    |    Codes:
    200: 49                                 |      200: 49

Report @ 21:54:24(+0300) 2021-07-11         |  Report @ 21:57:22(+0300) 2021-07-11
Elapsed time: 20 seconds                    |  Elapsed time: 20 seconds
  Scenarios launched:  50                   |    Scenarios launched:  50
  Scenarios completed: 0                    |    Scenarios completed: 0
  Requests completed:  50                   |    Requests completed:  50
  Mean response/sec: 5.01                   |    Mean response/sec: 5.01
  Response time (msec):                     |    Response time (msec):
    min: 68                                 |      min: 68
    max: 96                                 |      max: 103
    median: 70                              |      median: 70
    p95: 76                                 |      p95: 77
    p99: 96                                 |      p99: 103
  Codes:                                    |    Codes:
    200: 50                                 |      200: 50

Report @ 21:54:34(+0300) 2021-07-11         |  Report @ 21:57:32(+0300) 2021-07-11
Elapsed time: 30 seconds                    |  Elapsed time: 30 seconds
  Scenarios launched:  50                   |    Scenarios launched:  50
  Scenarios completed: 0                    |    Scenarios completed: 0
  Requests completed:  50                   |    Requests completed:  50
  Mean response/sec: 5.01                   |    Mean response/sec: 5.01
  Response time (msec):                     |    Response time (msec):
    min: 67                                 |      min: 68
    max: 85                                 |      max: 151
    median: 70                              |      median: 70
    p95: 77                                 |      p95: 149
    p99: 85                                 |      p99: 151
  Codes:                                    |    Codes:
    200: 50                                 |      200: 50


Report @ 21:54:34(+0300) 2021-07-11         |  Report @ 21:57:32(+0300) 2021-07-11
Elapsed time: 30 seconds                    |  Elapsed time: 30 seconds
  Scenarios launched:  1                    |    Scenarios launched:  1
  Scenarios completed: 0                    |    Scenarios completed: 0
  Requests completed:  1                    |    Requests completed:  1
  Mean response/sec: 2                      |    Mean response/sec: 2
  Response time (msec):                     |    Response time (msec):
    min: 71                                 |      min: 153
    max: 71                                 |      max: 153
    median: 71                              |      median: 153
    p95: 71                                 |      p95: 153
    p99: 71                                 |      p99: 153
  Codes:                                    |    Codes:
    200: 1                                  |      200: 1

All virtual users finished                  |  All virtual users finished           
Summary report @ 21:54:34(+0300) 2021-07-11 |  Summary report @ 21:57:32(+0300) 2021-07-11       
  Scenarios launched:  150                  |    Scenarios launched:  150
  Scenarios completed: 0                    |    Scenarios completed: 0
  Requests completed:  150                  |    Requests completed:  150
  Mean response/sec: 4.95                   |    Mean response/sec: 4.95
  Response time (msec):                     |    Response time (msec):
    min: 67                                 |      min: 68
    max: 96                                 |      max: 163
    median: 70                              |      median: 70
    p95: 76                                 |      p95: 149
    p99: 86                                 |      p99: 156
  Scenario counts:                          |    Scenario counts:
    0: 150 (100%)                           |      0: 150 (100%)
  Codes:                                    |    Codes:
    200: 150                                |      200: 150

```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

## Get jsDoc

```
npm run doc
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
