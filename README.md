# 3813ict Assignment 1

## Introduction
The first assignment for Software Frameworks. Requirements include building the server and front end for a chat system. For this assignment chat functionality is not required. The dashboard for the chat system will be built. The chat system must be able to allow users to communicate with each other in real time in different groups and channels. Some users will be admins and have permissions to add users to channels and groups. Some users will be super admins and have access to the entire site. The solution must be implemented using Node.js, Angular and sockets.

### Requirements
- chat dashboard
- username login/logout
- admin
- super admin
- local storage
- JSON storage

## GIT

The layout of my GIT repository is simply a private single branch repository. The approach I took for my version control was only commiting when I was happy with a newly implemented piece of code. If I got muddled up in trying to implement another feature I simply scrapped that part of code and redownloaded my previously commited code.


## Data Structures

My data structures were broken down into 2 main different groups. The client side and server side. The different groups of users were represented in the client side, each given slightly different dashboards. These groups were the General Users, Admins and Super Admins. They were represented using different components as stated previously, each with a slightly different dashbaord. 


## REST API
This application was formulated using a server(js) side and client(angular) side. 

## Angular Arcitecture 
The components within this application consisted of the following;
- Admin component - created a dashboard only admins had access too
- Chat component - created the chat section of the chat app
- Dashboard component - general user dashboard
- Login Component - lets the user login to their designated dashboard
- Sadmin Component - The super admin component for the Super admin dashboard

The services that were used were socket io services for the chat system. 



