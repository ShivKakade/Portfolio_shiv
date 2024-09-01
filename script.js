document.addEventListener('DOMContentLoaded', function() {
    const companyListItems = document.querySelectorAll('#company-list li');
    const jobDetails = document.querySelectorAll('.job-details');

    companyListItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            companyListItems.forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            this.classList.add('active');

            // Hide all job details
            jobDetails.forEach(detail => detail.style.display = 'none');

            // Show the relevant job details
            const company = this.getAttribute('data-company');
            document.getElementById(company).style.display = 'block';
        });
    });
});
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('flipped');
    });
});
