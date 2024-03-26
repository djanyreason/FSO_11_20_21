Repo for exercises 20 and 21 in Full Stack Open pt. 11
(https://fullstackopen.com/en/part11/expanding_further#exercises-11-19-11-21),
using the Bloglist application developed in parts 4 and 5 of Full
Stack Open


This repository is for exercises 11.20-11.21 in Part 11 of Full Stack Open (FSO), "CI/CD" - https://fullstackopen.com/en/part11 , https://fullstackopen.com/en/part11/expanding_further#exercises-11-19-11-21

This part of FSO focuses on Continuous Integration / Continuous Delivery ("CI/CD") systems, and is implemented through GitHub Actions. This project is built from the Bloglist application developed in parts 4 and 5 of FSO, and contained in my repositories FSO_04 and FSO_05.

All GitHub Actions workflows are stored in /.github/workflows:
* healthCheck.yml - set up to run periodic health checks on the app deployment, and alert if there is an issue
* pipeline.yml - the primary CI/CD pipeline; it checks for appropriate linting, checks jest tests in both front-end and back-end, builds the code, and checks end-to-end Cypress tests; depending on options in the commit, it will deploy to Fly.io, increment and tag version numbers

The deployment is configured to require approved pull requests with approval from a reviewer and successful completion of all status checks before merging.
