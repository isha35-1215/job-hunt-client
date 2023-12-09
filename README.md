Website name: JobHunt

live-site link: https://proud-beef.surge.sh

if possible, try to use microsoft edge to avoid dangerous restrictions. 

JobHunt project is explained here:

**User Authentication:**
    -Users can register and log in to the website using their email and password.
    -Google Sign-in is available as an authentication option.
    -Authentication status is tracked, and certain features are accessible only to logged-in users.
    -User profiles, including names and profile pictures, are displayed when users are logged in.

**Job Listings and Categories:**
    -Jobs are categorized into four types: On Site, Remote, Hybrid, and PartTime.
    -The website allows users to browse job listings by category, and there is a "All Jobs" tab to view all job listings.
    -Each job card displays important details, such as the job poster's name, title, posting date, application deadline, salary range, and the number of applicants.
    -Users can click "View Details" to access more information about a specific job.

**Apply for Jobs:**
    -Users can apply for jobs by clicking the "Apply" button on job details pages.
    -A modal opens to provide a seamless application process.
    -The modal auto-fills the applicant's name and email, and they can submit their resume link.
    -Job applicants are prevented from applying to their own job listings.
    -Applications are saved in a MongoDB collection.

**User-Added Job Listings:**
    -Logged-in users can create and manage their job listings through the "Add A Job" page.
    -They can provide details about the job, including the job banner, title, category, salary range, description, posting date, and application deadline.
    -Users can view and manage their job listings on the "My Jobs" page, with options to update or delete them.

**Applied Jobs and Search:**
    -Logged-in users can access a list of jobs they have applied for on the "Applied Jobs" page.
    -The page allows users to filter applied jobs by category using a select field.
    -A search system is implemented on the "All Jobs" page based on job titles.
    -Error messages and notifications are displayed when necessary, providing a smooth user experience.
