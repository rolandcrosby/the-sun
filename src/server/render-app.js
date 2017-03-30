import { STATIC_PATH, APP_CONTAINER_CLASSNAME, FAVICON_URL } from '../shared/config';

const renderApp = () =>
`<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to Glitch!</title>
    <meta name="description" content="A cool thing made with Glitch">
    <link id="favicon" rel="icon" href="${FAVICON_URL}" type="image/x-icon">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${STATIC_PATH}/style.css">
  </head>
  <body>
    <header>
      <h1>
        let's stare at the sun
      </h1>
    </header>

    <main>
      <div class="${APP_CONTAINER_CLASSNAME}"></div>
    </main>

    <footer>
    </footer>

    <script src="${STATIC_PATH}/js/bundle.js"></script>

  </body>
</html>
`;

export default renderApp;
