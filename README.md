<br />
<p align="center">
  <a href="./public/intropic.png">
    <img width="60%" src="./public/intropic.png" alt="mystudy-space logo">
  </a>
  <p align="center">
<!--     <a href="https://github.com/gitlab-analyzer/gitlabanalyzer/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg" alt="License">
    </a>   
     <a href="https://github.com/gitlab-analyzer/gitlabanalyzer/graphs/contributors" target="_blank">
        <img src="https://img.shields.io/github/contributors/gitlab-analyzer/gitlabanalyzer" alt="Contributers">
    </a>   
    <a href="https://github.com/gitlab-analyzer/gitlabanalyzer/graphs/commit-activity" target="_blank">
        <img src="https://img.shields.io/github/last-commit/gitlab-analyzer/gitlabanalyzer" alt="Last Commit">
    </a>
    <a href="https://github.com/gitlab-analyzer/gitlabanalyzer/issues" target="_blank">
        <img src="https://img.shields.io/github/issues/gitlab-analyzer/gitlabanalyzer" alt="Issues">
    </a> -->
</p>
  <h3 align="center">A cozy space for quiet studies and collecting plushies.</h3>

  <p align="center">
    Built for <a href="https://stormhacks.com/" target="_blank">Stormhack 2022</a>.
    <br />
    <a href="https://github.com/quarterblue/mystudy-space/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/quarterblue/mystudy-space/">View Demo</a>
    ·
    <a href="https://github.com/quarterblue/mystudy-space/">Report Bug</a>
    ·
    <a href="https://github.com/quarterblue/mystudy-space/">Request Feature</a>
  </p>
</p>

## ⚡️ Quick start

First of all, [download](https://nodejs.org/en/) and install **Node.js**. Version `14.7.0 LTS` or higher is recommended.

Then, [download](https://www.python.org/downloads/) and install **Python 3**. Version `3.6` or higher is recommended.

**Clone directory:**
```bash
$ git clone git@github.com:quarterblue/mystudy-space.git
```

**Frontend:**
```bash
# Change directory:
$ cd mystudy-space/frontend/

# Installation:
$ npm install

# Start client server:
$ npm run dev
```

**Backend:**
```bash
# Change directory:
$ cd mystudy-space/backend/

# Installation:
$ pip3 install -r requirements.txt

# Start backend server:
$ python3 main.py
```

Then navigate to **[http://localhost:3000/](http://localhost:3000/)** on your browser.


## 🐳 Docker-way to quick start

Make sure you have [installed docker and docker-compose](https://docs.docker.com/compose/install/) on your computer

**Clone directory:**
```bash
$ git clone git@github.com:quarterblue/mystudy-space.git
```

**Run:**
```bash
# Change directory:
$ cd mystudy-space/

# Run:
$ docker-compose build

# Then Run:
$ docker-compose up -d
```

Then navigate to **[http://localhost:3000/](http://localhost:3000/)** on your browser.

You might need to wait a couple minutes for everything in docker to be loaded.


## Features

- [x] Login & Authentication
- [x] Plushie Inventory (Personal Room)
- [x] Timeline for tracking activities
- [x] Dynamic timer and interval setter
- [x] Send plushie to friends!
- [x] Browse friends personal room
- [x] Self-help & mood tracker

## Directory Structure
- backend (Where the backend code is stored, python flask is used as the backend server)
  - interface (Contains all the interface files)
  - manager (Contains all the manager files)
  - model (Contains our data class for commits, mergre requests etc.)
  - test (Contains all the test and unittest files)
  - main.py (Main server file)
- frontend (Where the front-end client code is stored, reactjs is used)
  - public
  - src
    - components
    - context
    - pages
    - public
    - various files
- various docker files for building and deploying

## Credits
This software uses the following open source packages:

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [PostgreSQL](https://www.postgresql.org/)

## License

<a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank">AGPL v3.0</a>

