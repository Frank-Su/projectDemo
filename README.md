# ekas_survey_design_demo

## Installation

This project is survey design project. This projcet will mainly display the logic of the survey design.

**Clone Project to you local**

`git clone https://github.com/Frank-Su/ekas_survey_design_demo.git`

or you can use github desktop to clone the project to your local computer

**Install node_modules**

`npm install`

the node_modules is necessary to run your project, first things is to install node_modules in the project.


## Usage

**component folder**

place all the resuable component in components folder

**staticPages folder**

place all the page files into staticPages folder

**store folder**

`store` folder is to contain all the redux files. when you need to add a new reducer for a new page. you need to add a new folder into your `store` folder, and export the `reducer` than combine the reducer into `rootReducer.ts` files.

**style folder**

style folder is to contain all the `scss` files. you need to add different `scss` file into diffenet folder according to your needs.

**router folder**

router folder will manage the project route, if you need to add a new route, please read the documentation of react-router-dom to learn how to use it.

## Coporator

Michael(Liu), Frank(Su), Andy
