WEEKEND SALARY CALCULATOR 

In this project, I created an app that would capture employee salaries and track the monthly budget status. The app allows us to enter input employee first and last name, employee ID, title and annual salary. Further, the app allows for tracking total annual salaries aganist monthly salary budget goals. At the end, it provides us with a tool to determine if the employee annual salaries meet or excees monthly budget goals.

I built input fields that pushed data to a table and summed the salaries. Afterwards, I created a function that calculates the annual salaries in a monthly salary format and compares it to the monthly budget goals.
In addition, I created a function that displays that indicates whether the monthly salary meets or exceeds the monthly budget goals by incorporating graphics that alert the user when the monthly budget is exceeded. 

DURATION: 1 WEEK

SCREEN SHOT

Include one or two screen shots of your project here (optional). Remove if unused.


PREREQUISITES

Node.js: Download and install Node.js from Node.js
VS Code: Download and install Visual Studio Code from VS Code
Google Chrome: Download and install Google Chrome from Google Chrome

INSTALLATION


Follow these steps to get the Salary Calculator application up and running:

INSTALLATION 

1: Clone the Repository
2: Navigate to the Project Directory
3: Open the Project in VS Code
4:Run `npm install` to install the libraries that the automated tests rely on. Then, at any point, you can execute the test suite by running: `npm test`
4: Start the Live Server (This will automatically open your application in Google Chrome and refresh the browser whenever you make changes to your code.)
4: Run Tests using "npm rest"


USER STORY

As a User, I want to use the Salary Calculator application to easily manage and track the salaries of my employees, so I can calculate the total monthly salary expenses and stay within my budget.

USER STEPS TO FOLLOW

Opening the Application:

As a user, I open the Salary Calculator application in my web browser.
I see a page with a header titled "Salary Calculator," a form to add employee details, a table to display employee information, and a footer showing the total monthly cost.

Adding a New Employee:

I start by filling out the form labeled "Add Employee."
In the form, I enter the following details for a new employee:
First Name: "Isaac"
Last Name: "Amano"
ID: "12345"
Title: "Software Engineer"
Annual Salary: "60000"
After filling in all the fields, I click the "Submit" button.

Viewing the Employee in the Table:

Upon clicking "Submit," I see a new row added to the "Employees" table below the form.
The row displays the following information:
First Name: "Isaac"
Last Name: "Amano"
ID Number: "12345"
Job Title: "Software Engineer"
Annual Salary: "$60,000"
An "Actions" column with a "Delete" button.

Updating the Total Monthly Cost:

I should see that the "Total Monthly" cost displayed in the page has been updated.
The total monthly cost now includes John Doe's monthly salary, which is $5000 (calculated as $60000/12).

Adding More Employees:

I repeat the same process to add more employees by filling out the form with their details and clicking "Submit."
Each time I click "submit" and add a new employee, a new row is added to the table, and the total monthly cost in the page is updated accordingly.

When "Over - Budget" occurs:

If the total monthly cost exceeds $20,000, I see an alert that I am over budget.
The text in the footer turns red, and an alert "Over Budget!" is displayed in red volor writing. 

Deleting an Employee:

If I need to delete an employee from the list, I click the "Delete" button in the indicated row.
The row is removed from the table, and the total monthly cost is updated to show the deleted employee's salary.

BUILT WITH:

HTML: The standard markup language used to create the structure of the web pages.
CSS: Used for styling the HTML elements to create a visually appealing layout.
JavaScript: The programming language used to add interactivity and functionality to the web pages.
DOM Manipulation: Techniques used in JavaScript to dynamically update the content and structure of the HTML document.
Event Listeners: Used to handle user interactions like form submissions and button clicks.
Basic Regular Expressions: Used for formatting numbers with thousand separators.

Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. I also want to thank my study partner Tracy Smith for working on this with me.

Support
If you have suggestions or issues, please email me at lostandfound651@gmail.com