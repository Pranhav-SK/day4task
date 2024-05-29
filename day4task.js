const resumeData = {
    "name": "Pranhav SK",
    "age": 22,
    "email": "pranhav@example.com",
    "phone": "8649575623",
    "address": {
        "street": "Main Street",
        "city": "Los Lagos",
        "state": "Madrid"
        "zipcode": "458624"
    },
    "education": [
        {
            "degree": "Bachelor of Science",
            "major": "Computer Science",
            "university": "Indian Institute of Technology",
            "year": 2014
        },
        {
            "degree": "Master of Business Administration",
            "major": "Finance",
            "university": "Business School",
            "year": 2017
        }
    ],
    "experience": [
        {
            "title": "Software Engineer",
            "company": "Tech Company",
            "location": "Tech City",
            "year": "2015 - Present",
            "responsibilities": ["Developed new features", "Maintained existing codebase"]
        },
        {
            "title": "Financial Analyst",
            "company": "Finance Firm",
            "location": "Financial District",
            "year": "2013 - 2015",
            "responsibilities": ["Analyzed financial data", "Prepared financial reports"]
        }
    ]
};



// Using regular for loop
console.log("Using regular for loop:");
for (let i = 0; i < resumeData.education.length; i++) {
    console.log(resumeData.education[i]);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in resumeData.address) {
    console.log(key + ": " + resumeData.address[key]);
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let exp of resumeData.experience) {
    console.log(exp);
}

// Using forEach method
console.log("\nUsing forEach method:");
resumeData.experience.forEach(exp => {
    console.log(exp);
});