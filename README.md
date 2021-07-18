<p align="center">
  <br>
  <a href="https://nodejs.dev">
    <img src="./src/images/logos/nodejs-logo-light-mode.svg" width="200"/>
  </a>
</p>

<h1 align="center"><a href="https://nodejs.dev">Nodejs.dev</a></h1>

<p align="center">
  <a href="https://nodejs.dev">Nodejs.dev</a> site built using Gatsby.js with React.js, TypeScript, SCSS, and Remark.
</p>

<p align="center">
  <a title="MIT License" href="LICENSE">
    <img src="https://img.shields.io/github/license/gridsome/gridsome.svg?style=flat-square&label=License&colorB=6cc24a">
  </a>
  <a title="Follow on Twitter" href="https://twitter.com/Nodejs">
    <img src="https://img.shields.io/twitter/follow/Nodejs.svg?style=social&label=Follow%20@Nodejs">
  </a>
  <br>
  <br>
</p>

**You can find the latest [Figma design protype here](https://www.figma.com/file/lOxAGGg5KXb6nwie7zXkz6/NJ---Design-System?node-id=22%3A6086).**

## 🚀 Get Started

1. **Install dependencies.**

   ```bash
   # install the dependencies
   npm install
   ```

1. **Start developing.**

   ```bash
   # "start": "gatsby develop"
   npm start
   ```

1. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/part-five/#introducing-graphiql).*

## 🧐 What's inside?

A quick look at some of the top-level files and directories found in this project.

```console
.
├── .github
├── .storybook
├── meetings
├── node_modules
├── src
├── stories
├── style-guide
├── test
├── util-node
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .firebaserc
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── .remarkrc
├── cloudbuild-deploy.yaml
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── empty.env
├── firebase.json
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── LICENSE
├── ModerationPolicy.md
├── OKR.md
├── package-lock.json
├── package.json
├── README.md
├── test-preprocessor.js
├── test-setup.js
└── tsconfig.json

```

1. **`.storybook`**: This directory contains configuration files so the [storybook]("https://storybook.js.org/) package works as it should. Storybook is used to build the individual UI components in this project.

2. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

3. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. "Src" is a convention for "source code."

4. **`/stories`**: This directory contains stories for UI components used in this project. You can find out what a story is [here]("https://storybook.js.org/docs/react/get-started/whats-a-story). Also, you can run them locally using `npm run storybook`.

5. **`/test`**: Tests for this projects are stored in this directory. This project uses [Jest]("https://jestjs.io/) as it's testing framework.

6. **`/util-node`**: Custom utility functions that require nodeJs to run can be stored in files inside this directory. An example is the create-slug function in the createSlug.js file that generates unique slugs for articles.

7. **`.gitignore`**: This file tells git which files it should not track/not maintain a version history.

8. **`.nvmrc`**: nvm configuration so packages work as they should

9. **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

10. **`empty.env`**: Rename to **`.env`** and set your Contentful API key

11. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

12. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you'd like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

13. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

14. **`LICENSE`**: Gatsby is licensed under the MIT license.

15. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won't change this file directly).

16. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project's name, author, etc.). This manifest is how npm knows which packages to install for your project.

17. **`README.md`**: A text file containing useful reference information about your project.

18. **`tsconfig.json`**: Config file for TypeScript

## 📝 Data Sources

This repository contains no documentation content. Content is pulled from across the Node.js GitHub Org, Contentful, and other data sources and stitched together into a cohesive website.

### src/documentation

The `src/documentation` directory currently contains all the getting started content.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

* **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

* **To dive straight into code samples head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the "Guides", API reference, and "Advanced Tutorials" sections in the sidebar.

## 🏛 Governance

This initiative adopts the general Node.js [Code of Conduct][], as well as its
own [Contributing Guidelines][].

### Meetings

[Meeting notes][] from past meetings are maintained for later reference.
[Query issues for "Meeting"][] to find future meetings.

### Summary / Current Status

Our current focus is on site development. Development is happening in the [nodejs.dev repo](https://github.com/nodejs/nodejs.dev). This repo continues to be the hub for the redesign initiative.

### Team

Any person who wants to contribute to the initiative is welcome! Please read
[Contributing Guidelines][] and join the effort 🙌.

This repo is managed by the nodejs.dev. Members of the nodejs website team
also have commiter rights on the repo.

#### The nodejs.dev team

<!-- ncu-team-sync.team(nodejs/nodejs-dev) -->

* [@ahmadawais](https://github.com/ahmadawais) - Ahmad Awais ⚡️
* [@alexandrtovmach](https://github.com/alexandrtovmach) - Alexandr Tovmach
* [@amiller-gh](https://github.com/amiller-gh) - Adam Miller
* [@argyleink](https://github.com/argyleink) - Adam Argyle
* [@benhalverson](https://github.com/benhalverson) - Ben Halverson
* [@BeniCheni](https://github.com/BeniCheni) - Benjamin Chen
* [@codeekage](https://github.com/codeekage) - Abraham Jr. Agiri
* [@darcyclarke](https://github.com/darcyclarke) - Darcy Clarke
* [@designMoreWeb](https://github.com/designMoreWeb) - Divy Tolia
* [@imbhargav5](https://github.com/imbhargav5) - Bhargav Ponnapalli
* [@jemjam](https://github.com/jemjam) - j'em bones
* [@joesepi](https://github.com/joesepi) - Joe Sepi
* [@jonchurch](https://github.com/jonchurch) - Jonathan Church
* [@kasicka](https://github.com/kasicka) - Zuzana Svetlíková
* [@keywordnew](https://github.com/keywordnew) - Manil Chowdhury
* [@LaRuaNa](https://github.com/LaRuaNa) - Onur Laru
* [@maddhruv](https://github.com/maddhruv) - Dhruv Jain
* [@manishprivet](https://github.com/manishprivet) - Manish Kumar
* [@marcustisater](https://github.com/marcustisater) - Marcus Tisäter
* [@mbj36](https://github.com/mbj36) - Mohit kumar Bajoria
* [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
* [@ogonzal87](https://github.com/ogonzal87) - Oscar Gonzalez
* [@ollelauribostrom](https://github.com/ollelauribostrom) - Olle Lauri Boström
* [@pierreneter](https://github.com/pierreneter) - Nguyễn J Huỳnh Long
* [@rodion-arr](https://github.com/rodion-arr) - Rodion Abdurakhimov
* [@sagirk](https://github.com/sagirk) - Sagir Khan
* [@saulonunesdev](https://github.com/saulonunesdev) - Saulo Nunes
* [@skllcrn](https://github.com/skllcrn) - Christopher
* [@SMotaal](https://github.com/SMotaal) - Saleh Abdel Motaal
* [@timothyis](https://github.com/timothyis) - Timothy
* [@tstreamDOTh](https://github.com/tstreamDOTh) - T Thiyagaraj
* [@ZYSzys](https://github.com/ZYSzys) - ZYSzys

<!-- ncu-team-sync end -->

#### The Website Redesign Teams

This repo originated as "The Website Redesign" strategic initiative under
the Node.js Community Community. Below are various teams and people that
participated in that process.

##### Information Gathering

* [@amiller-gh](https://github.com/amiller-gh) - Adam Miller
* [@codeekage](https://github.com/codeekage) - Agiri Abraham JNR
* [@darcyclarke](https://github.com/darcyclarke) - Darcy Clarke
* [@maddhruv](https://github.com/maddhruv) - Dhruv Jain
* [@fhemberger](https://github.com/fhemberger) - Frederic Hemberger
* [@JonahMoses](https://github.com/JonahMoses) - Jonah Moses
* [@chowdhurian](https://github.com/chowdhurian) - Manil Chowdhury
* [@oe](https://github.com/oe) - Olivia Hugger
* [@bnb](https://github.com/bnb) - Tierney Cyren
* [@timothyis](https://github.com/timothyis) - Timothy

##### IA / UX Planning

* [@oe](https://github.com/oe) - Olivia Hugger
* [@fhemberger](https://github.com/fhemberger) - Frederic Hemberger
* [@bnb](https://github.com/bnb) - Tierney Cyren
* [@timothyis](https://github.com/timothyis) - Timothy
* [@JonahMoses](https://github.com/JonahMoses) - Jonah Moses
* [@amiller-gh](https://github.com/amiller-gh) - Adam Miller
* [@emilypmendez](https://github.com/emilypmendez) - Emily Mendez
* [@darcyclarke](https://github.com/darcyclarke) - Darcy Clarke
* [@maddhruv](https://github.com/maddhruv) - Dhruv Jain
* [@chowdhurian](https://github.com/chowdhurian) - Manil Chowdhury
* [@codeekage](https://github.com/codeekage) - Agiri Abraham JNR
* [@add1sun](https://github.com/add1sun) - Addison Berry
* [@Qard](https://github.com/Qard) - Stephen Belanger
* [@watilde](https://github.com/watilde) - Daijiro Wachi
* [@tolmasky](https://github.com/tolmasky) - Francisco Ryan Tolmasky I
* [@milapbhojak](https://github.com/milapbhojak) - Milap Bhojak
* [@devamaz](https://github.com/devamaz) - Ahmad Abdul-Aziz

##### UI Design and Content Creation

* [@amiller-gh](https://github.com/amiller-gh) - Adam Miller
* [@bnb](https://github.com/bnb) - Tierney Cyren
* [@codeekage](https://github.com/codeekage) - Agiri Abraham JNR
* [@chowdhurian](https://github.com/chowdhurian) - Manil Chowdhury
* [@maddhruv](https://github.com/maddhruv) - Dhruv Jain
* [@milapbhojak](https://github.com/milapbhojak) - Milap Bhojak
* [@tolmasky](https://github.com/tolmasky) - Francisco Ryan Tolmasky I
* [@iNidAName](https://github.com/inidaname) - Hassaan Sani
* [@abedzantout](https://github.com/abedzantout) - Abdul Rahman Zantout
* [@AliObaji](https://github.com/AliObaji) - Ali Obaji
* [@AhmadAwais](https://github.com/AhmadAwais) - AhmadAwais

##### Site Development

* [@abiclub23](https://github.com/abiclub23) - Abhi Tondepu
* [@ajay2507](https://github.com/ajay2507) - Ajaykumar
* [@connorholyday](https://github.com/connorholyday) - Connor Holyday
* [@iceagency-jakecruse](https://github.com/iceagency-jakecruse) - Jake Cruse
* [@iceagency-lukehopkins](https://github.com/iceagency-lukehopkins) - Luke Hopkins
* [@jestho](https://github.com/jestho) - Jesper Thøgersen
* [@jonahmoses](https://github.com/jonahmoses) - Jonah Moses
* [@sagirk](https://github.com/sagirk) - Sagir Khan
* [@ollelauribostrom](https://github.com/ollelauribostrom) - Olle Lauri Boström
* [@belar](https://github.com/Belar) - Paweł
* [@erichodges](https://github.com/erichodges) - Eric Hodges
* [@utkarshbhimte](https://github.com/utkarshbhimte) - Utkarsh Bhimte
* [@lidoravitan](https://github.com/lidoravitan) - Lidor Avitan
* [@mbj36](https://github.com/mbj36) - Mohit Bajoria
* [@zanmarolt](https://github.com/zanmarolt) - Zan Marolt
* [@imbhargav5](https://github.com/imbhargav5) - Bhargav Ponnapalli
* [@mikeattara](https://github.com/mikeattara) - Mike Perry Y Attara
* [@ZYSzys](https://github.com/ZYSzys) - ZYSzys
* [@mrjam2](https://github.com/mrjam2) - Jamie Burton
* [@jamesgeorge007](https://github.com/jamesgeorge007) - James George
* [@Yash-Handa](https://github.com/Yash-Handa) - Yash Handa
* [@iNidAName](https://github.com/inidaname) - Hassaan Sani
* [@abedzantout](https://github.com/abedzantout) - Abdul Rahman Zantout
* [@LaRuaNa](https://github.com/LaRuaNa) - Onur Laru
* [@AhmadAwais](https://github.com/AhmadAwais) - AhmadAwais
* [@BeniCheni](https://github.com/BeniCheni) - Benjamin Chen
* [@kevjin](https://github.com/kevjin) - Kevin Jin

## Links

[Community Committee][]
[Code of Conduct][]
[Contributing Guidelines][]
[Meeting Notes][]
[Query issues for "Meeting"][]

[community committee]: https://github.com/nodejs/community-committee
[code of conduct]: https://github.com/nodejs/admin/blob/main/CODE_OF_CONDUCT.md
[contributing guidelines]: ./CONTRIBUTING.md
[meeting notes]: ./meetings
[query issues for "meeting"]: https://github.com/nodejs/nodejs.dev/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+Meeting+in%3Atitle
