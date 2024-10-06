Running the Project

Task 1:
Running the Frontend:
Open the contact.html file in your browser. You can simply double-click it or serve it using an HTTP server (e.g., Live Server in VSCode).


Task 2:

Running the Backend:
1.To start the backend server (Node.js/Express), run:
    node server.js
2.The backend will be available at http://localhost:3000


Endpoints:
Create a Course (POST):
API Endpoint: http://localhost:3000/courses

Request Body:
{
  "title": "JavaScript Basics",
  "description": "Learn the basics of JavaScript.",
  "duration": "3 hours"
}


Response:
Returns the created course with a unique ID.

2. Retrieve All Courses (GET):
API Endpoint: http://localhost:3000/courses/
Response:
Returns a list of all courses.

3.Update a Course by ID (PUT):
API Endpoint: http://localhost:3000/courses/1
Request Body:
{
  "title": "JavaScript Advanced"
}


4. Delete a Course by ID (DELETE):
API Endpoint: http://localhost:3000/courses/1

Response:
Returns a success message confirming the deletion.
