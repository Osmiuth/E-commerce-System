# Project Proposal for the Development of Products and Services Catalog Website for Oro Hi-Q Industries, Inc.

This is the final project for GroupJ, this showcases various products and services, along with a built-in Chatbot to facilitate with the user's needs.

## Table of Contents

- [Features](#features)
- [Acknowledgements](#acknowledgements)


## Acknowledgements

Special thanks to Smartsupp service for providing a month-free subscription onto their chatbot api. This wouldn't be possible without their help.

## Features

The following features are of the following:

Chatbot - This serves as one of the core features in this project, this facilitates with helping the users navigate the products and connect them to an actual customer support.
Product Management - An administrator has the privilege to add, edit, and delete products, which is readily available for the users to see in the website.
Admin Authentication - This serves as a security that separates the user from the administrator. Having an authentication that only people with correct credentials can prevent any mishaps from happening from the website due to unauthorized personnels.
Search Functionality - This feature allows for easy navigation and searching of products.

## Detailed Update Logs
v0.6.5-alpha.1
* Fixed validation holes on staging

v0.6.5
* Deployed project to vercel, render, and choreo

v0.6.4
* Fixed problem on creating products

v0.6.3
* Fixed feature admin editproduct 

v0.6.2
* Added testing for the views authentication

v0.6.1
* Added test cases for authentication testing
* Enabled authentication from API
* Fixed Chatbot appearing in Admin page

v0.6.0
* Cleaned Database for pulling the new schema
* Integrated chatbot in the website
* Unit test using Jest

v0.5.19
* Initialized validation for adding products in database
* Enabled image storing in database

v0.5.18
* Optimized Docker

v0.5.17
* Added HealthCheck on backend to prevent bug issue relating to django

v0.5.16
* Fixed POST request error when adding a category

v0.5.15
* Fixed Database issues when merging

v0.5.14
* Added Category table, metric attribute, foreign key category for multi-category creation in the database
* Fixed database breaking upon modification

v0.5.13
* Added delete function in the admin page

v0.5.12
* Can GET products from the database

v0.5.11
* Fixed Product Table to not synce with the Database
* Removed an idb file to fixed the problem
* Fixed database error and connected addproduct to the Database

v0.5.10
* Added an OffCanvas design for adding products in Admin page

v0.5.9
* Added Products as a database schema
* Created superuser access for database
* Created JSON encoder for the product database to be interpreted by the frontend for further use
* Fixed conflict in pulling develop branch

v0.5.8
* Made Admin pages to a protected route

v0.5.7
* Optimized Dockerfile and docker-compose to run in every device

v0.5.6
* Added watch polling for active live reloading
* Fixed a bug when logging in

v0.5.5
* Resolved conflicts on Database and App.jsx

v0.5.4
* Fixed Docker to run ViteReact on local machine
* Changed port from 5173 to 8000
* Removed network bridge on docker-compose.yml to prevent any future network-related problems

v0.5.3
* Resolved App.jsx to include sidebar and admin page
* Resolved Conflicting files in Frontend

v0.5.2
* Created Sidebar and multiple pages in Admin view

v0.5.1
* Styled Login form
* Modified Routing in App.jsx

v0.5.0
* Classified admin and customer pages through folders
* Deleted previous setup that was merged

v0.4.13
* Successfully passed product info from product page into product details page
* Adjusted Product Item component to work both sides (Admin and Customer)

v0.4.12
* Converted Footer into component to fix overlap issue
* Made Hover design in Navbar
* Fixed card border issues

v0.4.11
* Added new design to product item component
* Added search functionality

v0.4.10
* Made Search bar in Products Page
* Added Product Item

v0.4.9
* Fixed background position in About Us Page to show company name

v0.4.8
* Setup About us Page
* Added contents and layout in About us Page
* Fixed conflicting designs in Service and About us Page

v0.4.7
* Made Services page

v0.4.6
* Changed VITE_API_URL to correct IP
* Fixed hero background sizing on Home page

v0.4.5
* Imported react dependencies

v0.4.4
* Improved products page
* Made new components
* Added live reloading
* Fixed some responsive issues on Home page

v0.4.3
* Made the homepage responsive for small and medium screens

v0.4.2
* Added information into the homepage

v0.4.1
* Resolved conflicts on jsx and css files
* Added designs to the footer

v0.4.0
* Setup of Homepage routings

v0.3.1
* Added several dockerfiles and modifications to the configurations in the settings

v0.3.0
* Second iteration of the initial setup of docker for a more organized look in the directory. Separated backend from the frontend.

v0.2.0
* Backend (Django) has been connected to the frontend (react)
* Created JSON Encoder to file requests to the front end
* Initialized the database

v0.1.1
* Fixed error on settings.py

v0.1.0
* Initial Setup of Docker for the group project


v0.3.1
* Added several dockerfiles and modifications to the configurations in the settings

v0.3.0
* Second iteration of the initial setup of docker for a more organized look in the directory. Separated backend from the frontend.

v0.2.0
* Backend (Django) has been connected to the frontend (react)
* Created JSON Encoder to file requests to the front end
* Initialized the database

v0.1.0
* Initial Setup of Docker for the group project

