# AlloyUI - Website

![AlloyUI Robo Suit](http://f.cl.ly/items/292d3K0l3j221n3m0V0D/Alloy-Robo-Suit.jpg)

This is a working in progress of [AlloyUI's](https://github.com/liferay/alloy-ui/) website. Check the [Status here](https://github.com/liferay/alloyui.com/wiki/Status).

If you are having any problem with the library, please create an issue on [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## Table of contents

* [Contribute](#contribute)
* [How it works?](#how-it-works)
* [Dependencies](#dependencies)
* [Getting started](#getting-started)
* [Structure](#structure)
* [Deploy](#deploy)

## Contribute

So you want to help us? That's pretty awesome!

We are very happy to accept external contributions in the form of feedback, bug reports or pull requests :)

For now, you can help us with the website by writing tutorials or examples for the components that we haven't added yet. [See the list of components that needs to the added](https://github.com/liferay/alloyui.com/wiki/List-of-Components).

* [How to create a new tutorial](https://github.com/liferay/alloyui.com/wiki/How-to-create-a-new-tutorial)
* [How to create a new example](https://github.com/liferay/alloyui.com/wiki/How-to-create-a-new-example)

Or go ahead and [read our main guide](http://liferay.github.com/alloyui.com/contributing).

**Remember:** Before any pull request don't forget to run: `ant jshint`. If you find any error please fix it before sending your pull request.

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Dependencies

1. [Install NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install DocPad globally: `sudo npm install -fg docpad@6.20.1`

## Getting started

Once you have dependencies installed, you just need to:

1. Clone the project: `git clone git@github.com:liferay/alloyui.com.git`

2. Then go to the project's folder: `cd alloyui.com`

3. Install plugins: `docpad install`

4. And finally run: `docpad run`

Now you can see the website running in `http://localhost:9778/` :D

## Structure

The basic structure of the project is given in the following way:

<pre>
.
|-- out/
|-- lib/
|-- src/
|   |-- documents/
|   |-- files/
|   |-- layouts/
|-- build.xml
|-- docpad.coffee
|-- package.json
</pre>

### out/

This is where the generated files are stored, once DocPad has been runned. However, this directory is unnecessary in versioning, so it is ignored ([.gitignore](https://github.com/liferay/alloyui.com/blob/master/.gitignore)).

### [lib/](https://github.com/liferay/alloyui.com/blob/master/lib)

Stores all the [Ant](http://ant.apache.org/) resources.

### [src/documents/](https://github.com/liferay/alloyui.com/blob/master/src/documents)

Contains all the pages of this website. Documentation is written in Markdown and examples in JavaScript.

### [src/files/](https://github.com/liferay/alloyui.com/tree/master/src/files)

Has all the images, CSS and JS files.

### [src/layouts/](https://github.com/liferay/alloyui.com/tree/master/src/layouts)

Contains some templates that are used in the application.

### [build.xml](https://github.com/liferay/alloyui.com/blob/master/build.xml)

Defines tasks for common steps.

### [docpad.coffee](https://github.com/liferay/alloyui.com/blob/master/docpad.coffee)

Stores most settings of the application.

### [package.json](https://github.com/liferay/alloyui.com/blob/master/package.json)

List NodeJS modules dependencies.

## Deploy

Just run `ant deploy` and then go to [liferay.github.com/alloyui.com](http://liferay.github.com/alloyui.com/).

