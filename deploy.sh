#!/bin/bash

# Colors
red='\033[0;31m'
blue='\033[0;34m'
green='\033[0;32m'
orange='\033[0;33m'
nc='\033[0m'

env="prod"
currentBranch=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)
branch="master"

fileName="deploy"
outErr=">>$fileName.log"
out=">>$fileName.log 2>&1"

function update {
  echo -e "${orange}Updating application...${red}"
  if [[ "$branch" == "$currentBranch" ]] ; then
    echo -e "No need to change branches" >> $fileName.log
  else
    git checkout $branch 2>&1 >>$fileName.log | tee --append $fileName.log
  fi
  git pull 2>&1 >>$fileName.log | tee --append $fileName.log
  echo
}

function install {
  echo -e "${orange}Installing assets and components...${red}"
  bower install 2>&1 >>$fileName.log | tee --append $fileName.log
  npm install 2>&1 >>$fileName.log | tee --append $fileName.log
  echo
}

function compile {
  echo -e "${orange}Compiling website files...${red}"
  gulp build --env=$env 2>&1 >>$fileName.log | tee --append $fileName.log
  echo
}

if [ ! -z "$1" ]; then
  branch=$1
  if [ ! -z "$2" ]; then
    env=$2
  fi
else
  branch=$currentBranch
fi

rm $fileName.log 2> /dev/null

update
install
compile

echo -e ${green}
echo "Deploy completed"
