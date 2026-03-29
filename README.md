# QA Home Assignment

Ez a repository a QA & Test Engineer próbafeladat megoldását tartalmazza.

  ## Tartalom

  A megoldás az alábbi részekből áll:

  - UI automatizált tesztek Cypress + TypeScript használatával
  - API automatizált tesztek a `GET https://reqres.in/api/users` végpontra
  - rövid tesztelési stratégia
  - release notes dokumentum

  ## Használt technológiák

  - Node.js
  - Cypress
  - TypeScript

  ## Előfeltételek

  - Node.js telepítve
  - npm elérhető

  ## Telepítés

  npm install

  ## Környezeti változók

  A projekt futtatásához szükséges egy `.env` fájl a projekt gyökerében.

  A repository tartalmaz egy `.env.example` fájlt, amely a szükséges változókat tartalmazza.

  ### Gyors indításhoz

  Másold át az `.env.example` fájl tartalmát az újonnan létrehozott `.env` fájl-ba

  ### Fontos megjegyzés

  Normál körülmények között az .env fájl tartalmát minden fejlesztő/tesztelő egyénileg állítja be (pl. saját credential-ök, API kulcsok) és érzékeny adatokat nem tárolunk verziókövetésben.

  Ebben a feladatban azonban elegendő az .env.example tartalmát átmásolni a .env fájlba.

  ## Tesztek futtatása

  ### Cypress UI megnyitása

  ```bash
  npm run cypress:open
  ```

  ### Összes teszt futtatása (headless)

  ```bash
  npm test
  ```
  ### Csak UI tesztek futtatása

  ```bash
  npm run test:ui
  ```

  ### Csak API tesztek futtatása

  ```bash
  npm run test:api
  ```

  ## Megjegyzések

  - A UI tesztek a SauceDemo publikus tesztoldalát használják.
  - Az API tesztek a ReqRes publikus teszt API-ját használják.
  - A ReqRes végpont használatához API kulcs szükséges, ezt a .env fájlban kell megadni.