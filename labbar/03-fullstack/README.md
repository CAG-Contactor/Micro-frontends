Labb 7, Fullstack Micro FE
==========================
Här har vi ett exempel på Micro FE:s med backend.

Vi har två applikationer
- [Image Randomizer](../../facit/03-fullstack/image-randomizer)
- [Springboot with React](../../facit/03-fullstack/springboot-with-react)

OBS, de ligger i [facit](../../facit)-katalogen!

Den här labben är lite mer TV-kock, allt är färdigt i facit.

Starta applikationerna i varsin terminal:

**Angular MFE**
```
$ cd facit/02-frameworks/angular-mfe
$ npm install
$ npm run start:prod
```

**React MFE**
```
$ cd facit/02-frameworks/react-mfe
$ npm install
$ npm run start:prod
```

**Image Randomizer**
```
$ cd facit/03-fullstack/image-randomizer
$ mvn install spring-boot:run
```

**Springboot with React**
```
$ cd facit/03-fullstack/springboot-with-react
$ mvn install
$ cd backend
$ mvn spring-boot:run
```

**App Shell**
```
$ cd facit/02-frameworks/app-shell
$ npm install
$ npm start
```

Öppna sedan [http://localhost:3000](http://localhost:3000).

