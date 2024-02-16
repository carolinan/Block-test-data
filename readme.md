## How to use this repository

Download the theme and xml file.

Install and activate the theme.

Import the block test data xml file to your WordPress installation.

Set permalinks to post name.

In the playwright.config.js file, change the baseURL to match your environment.
baseURL: 'http://localhost:8080'

Install the dependencies. Enter the following command in the terminal:
```npm install```

To generate the first set of images, enter the following command in the terminal:
```npx playwright test```

Next, make your changes and run the test again. Enter the following command in the terminal:
```npx playwright test```

The reports are printed in the terminal.
