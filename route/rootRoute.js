const express = require('express')
const app = express.Router()

//faker
const { random } = require("faker");
const faker = require("faker");
const newsArr = [
  {
    title: faker.lorem.sentence(),
    date: [
      faker.date.weekday(),
      faker.random.number({ min: 1, max: 28 }),
      faker.date.month(),
      2020,
    ],
    image: [
      faker.image.food(),
      faker.image.technics(),
      faker.image.transport(),
      faker.image.abstract(),
    ],
    pharagraph: [
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
    ],
    name: [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
  },
  {
    title: faker.lorem.sentences(),
    date: [
      faker.date.weekday(),
      faker.random.number({ min: 1, max: 28 }),
      faker.date.month(),
      2020,
    ],
    image: [
      faker.image.abstract(),
      faker.image.abstract(),
      faker.image.abstract(),
    ],
    pharagraph: [
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
    ],
    name: [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
  },
  {
    title: faker.lorem.sentence(),
    date: [
      faker.date.weekday(),
      faker.random.number({ min: 1, max: 28 }),
      faker.date.month(),
      2020,
    ],
    image: [
      faker.image.abstract(),
      faker.image.abstract(),
      faker.image.abstract(),
    ],
    pharagraph: [
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
    ],
    name: [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
  },
  {
    title: faker.lorem.sentence(),
    date: [
      faker.date.weekday(),
      faker.random.number({ min: 1, max: 28 }),
      faker.date.month(),
      2020,
    ],
    image: [
      faker.image.abstract(),
      faker.image.abstract(),
      faker.image.abstract(),
    ],
    pharagraph: [
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
      faker.lorem.paragraphs(),
    ],
    name: [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
  },
];

const about = {
  history: faker.lorem.paragraphs(),
  image: [
    faker.image.people(),
    faker.image.business(),
    faker.image.fashion(),
    faker.image.nature(),
  ],
  name: [
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
  ],
  jobType: [
    faker.name.jobType(),
    faker.name.jobType(),
    faker.name.jobType(),
    faker.name.jobType(),
  ],
  jobDescriptor: [
    faker.name.jobDescriptor(),
    faker.name.jobType(),
    faker.name.jobType(),
    faker.name.jobType(),
  ],
  from: [
    faker.address.city(),
    faker.address.city(),
    faker.address.city(),
    faker.address.city(),
  ],
  office: faker.address.streetAddress(),
};

app.get('/', (req, res) => {
  res.render('index', { newsArr: newsArr })
})

app.get("/newsPage1", (req, res) => {
  res.render("newsPage/newsPage1", { newsArr: newsArr });
});

app.get("/newsPage2", (req, res) => {
  res.render("newsPage/newsPage2", { newsArr: newsArr });
});

app.get("/newsPage3", (req, res) => {
  res.render("newsPage/newsPage3", { newsArr: newsArr });
});

app.get("/newsPage4", (req, res) => {
  res.render("newsPage/newsPage4", { newsArr: newsArr });
});

app.get("/about", (req, res) => {
  res.render("about", { about: about });
});


app.get('/:path', (req, res) => {
  res.render(req.params.path, {}, (err, html) => {
    if (err) {
      res.render('404')
    } else {
      res.send(html)
    }
  })
})

module.exports = app;

