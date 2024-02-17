# HackCUNY
project for hack cuny - the name is WIP

building an app that helps students / new grads find gigs with small to mid-size businesses in the area

problem - tough to find work in the field right now amid mass layoffs and hiring freezes, especially for new grads

solution - connect students with small to mid-size businesses in the area that are looking for help with small projects or internships to help them get experience and build their resume at companies they otherwise might not have heard of or considered

the goal is to be able to give users recommendations based on their skills and interests and to be able to connect them with businesses that are looking for help in those areas as well as company culture and values that align with the user's own

## Layout (WIP)
home page - roughly like linkedin- should have a feed and a mini profile overview and a recommended gigs section
jobs page - should have a list of all the gigs available and a search bar and filter menu
profile page - should have a more detailed profile overview and a list of the gigs the user has applied to and a list of the gigs the user has been accepted to etc


## Team Members

## Tech Stack
================
# FrontEnd
  To run in development mode:
    1. Install dependencies with `npm install`
    2. Run with `npm run dev` or `npm start` (dev runs with nodemon)
    3. Use tailwind inline styling (tailwind css)
================
# BackEnd
  To run in development mode
    1) `cd backend_core`
    2) Create a virtual environment:
      `python3 -m venv env`
    3) Install everything in requirements.txt:
      `pip install > requirements.txt`
    4) Migrate the database schema:
      `python manage.py makemigrations`
      `python manage.py migrate`
    5) Run Development Server:
      `python manage.py runserver`
