var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('resume', {
    name: "Travis Hunt",
    skills: {
      "Python": "80%",
      "Linux": "80%",
      "SQL": "70%",
      "JavaScript": "65%",
    },
    jobs: [
      {
        position: "Software Engineer Intern",
        company: "Fourth Dimension Engineering",
        start: "May 2015",
        current: true,
        end: "",
        description: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
      }
    ],
    education: [
      {
        university: "University of Maryland, Baltimore County",
        start: "August 2013",
        current: false,
        end: "December 2016",
        major: "Computer Science",
        degree: "B.S."
      },
      {
        university: "Carroll County Community College",
        start: "August 2011",
        current: false,
        end: "May 2013",
        major: "General Studies",
        degree: "A.A."
      }
    ]
  });
});

module.exports = router;
