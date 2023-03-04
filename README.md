# creating-api

## Fork and clone this repo

## Start up a Docker container for your postgres db

`docker run -d --name example2 -p 5432:5432 -e POSTGRES_PASSWORD=password -v mynewvol:/app -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres:latest`

## Create database and add tables

in the docker container's terminal should see `#`
run `psql -U postgres` to use the postgres shell
create the database
`CREATE DATABASE myexample;`
go into the new database `\c myexample`
create a table
`CREATE TABLE people (id SERIAL PRIMARY KEY, first_name varchar(20), last_name varchar(20), age int CHECK (age>=0));`
insert data into table
`INSERT INTO people (first_name, last_name, age) VALUES ('John', 'Smith', 32), ('Jane', 'Doe', 54);`
Verify database has been seeded correctly by running `SELECT * FROM people;`

## Create a new package.json

from this project's root directory, 'creating-api', run commmand
`npm init -y`
the `-y` flag here will initiate the
package.json with all defaults.

## Install dependencies

install all the dependencies you know for sure you will you will be using (this step can be done at any point prior to running the application)
We will need to import express, pg, and nodemon
`npm i express pg` this installs express and pg as regular dependencies
`npm i -D nodemon` installs nodemon as a devDependency

## Ignore node_modules

so that git will not track your node_modules folder, create a .gitignore file in root directory
and add your node_modules to that file
`echo node_modules >> .gitignore`
when ran, this command will append node_modules to the .gitignore file if one already exists in the directory. If there is not one, this command will also create the .gitignore file

The purpose of this is to minimize the size of the repo. node_modules can be quite large and make the repo bloated and slow.

## Create entry point for server

I have already created this file for you so no need to run this command
`touch server.js`

## Create your api routes following the comments in server.js
