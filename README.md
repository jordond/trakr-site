


## Gulp tasks
- Run `gulp build` to compile assets
 # trakr Website

I built this website using [AngularJS](https://angular.io/) bootstrapped with [ng-poly](https://github.com/dustinspecker/generator-ng-poly).

This website is meant to showcase a few of the features built into my Android trakR application, which you can check out [here](http://github.com/jordond/trakr).

Feel free to use any of the code, or don't up to you.  Check out the [Yeoman](http://yeoman.io/) generator [ng-poly](https://github.com/dustinspecker/generator-ng-poly) though, they are both really convenient.

## Setup
1. Run `npm install -g bower gulp yo generator-ng-poly`
1. Run `bower install && npm install` to install this project's dependencies

## Deploy
1. Make sure you ran the setup ie. `bower install && npm install`
2. Rename `rdeploy-build.sh.example` to `redeploy-build.sh`
3. Fill in the following variables: `user`, `server`, `web_root`, `site`, and you can change the other variables like build/serve directory, log name, etc.
4. Run `./rdeploy-build.sh <branch> <dev|prod>` or simply `./rdeploy-build.sh` which defaults to the production mode on the current branch.

### Gulp tasks
- Run `gulp` to compile for dev and launch server
- Run `gulp build` to compile for dev
- Flags `--env=prod` to compile for production
-       `--env=prod --pretty` to compile for production without minification

## Check it out

This project is active and running at http://trakr.hoogit.ca, so check it out!
