// server.js
//Configure for es6
require('@babel/register')({
  "presets": [
    ["@babel/env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
})

// Express basic configuration
const express = require('express'),
    app = express();
const path = require('path');
const NewsService = require('./newsService');
const nunjucks = require("./njkConfiguration");
nunjucks.nunj(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Running on PORT: ' + port));
app.use('/static', express.static(path.resolve(__dirname, '../dist/static')));

//store data per category
let categoryData = [];
let data = {
    cardsData: {
        cards:
            {
                src: "",
                title: "",
                text: "",
                contentCard: "",
                id: "",
                button: {
                    size: "",
                    href: ""
                },
                linkContent: {
                    href: "" ,
                    titleLink: ""
                }
            }
    }
}

//redirect to General news feed
app.all('/', async (req, res) => {
    res.redirect('/category/general');
})

//News feed per category
app.use('/category/:category', async (req, res) => {
    data.cardsData.cards = await NewsService.getNewsItemsByCategory(req.params.category)
    res.render('home', data);

    categoryData = data.cardsData.cards
    return categoryData
});

//Single content page
app.use('/content/:id', async (req, res) => {
    data.cardsData = await NewsService.getContentByID(categoryData, req.params.id)
    res.render('content', data)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
