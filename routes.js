var express = require('express')
const articleCollection = require('./db')
var md = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true
})

const router = express.Router()

router.get('/', (req, res) => {
    res.status(202).send("welcome")
})

router.get('/articles', async (req, res) => {
    await articleCollection.find()
        .then((articles) => {
            var results = articles.map((article) => (
                {
                    id: article._id,
                    articleName: article.articleName,
                    content: article.content,
                    uploadDate: article.uploadDate
                    /*  writer: article.writer,
                     ,
                     lastUpdate: article.lastUpdate,
                     tags: article.tags,
                     visibility: article.visibility,  */
                }
            ))
            // console.log(results)
            res.send(results)
        })
        .catch(
            (err) => {
                res.status(504).send(err)
            })
})

router.get('/articles/:id', async (req, res) => {
    const articleId = req.params.id
    console.log(articleId)
    articleCollection.findById(articleId, (err, data) => {
        if (err) {
            res.status(504).send(err)
        }
        else {
            res.json(data)
            console.log(data);

        }
    })
})

router.post('/new/article', (req, res) => {
    const article = req.body

    var date = new Date();
    var uploadDate = new Date().toDateString()
    /*  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " "
     + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() */
    console.log(uploadDate)

    article['uploadDate'] = uploadDate
    console.log(article);
    articleCollection.findOne({ articleName: article.articleName }, function (err, data) {
        if (!data) {
            console.log("create");
            var htmlConverted = md.render(article.content)
            article.content = htmlConverted
            articleCollection.create(article, function (err, data) {
                if (err) {
                    res.json({ 'message': 'Failed' })
                    console.log("error");
                }
                else {
                    res.json({ 'message': 'FIle Created' })
                    console.log(article);
                }
            })
        }
        else {
            console.log(data);
            articleCollection.updateMany({ articleName: article.articleName }, article,
                function (err, data) {
                    if (err) {
                        res.json({ 'message': 'Error' })
                    }
                    else {
                        res.json({ 'message': 'Update Success' })
                        console.log("update Successful");
                    }
                }
            )

        }
    })

    /* (article)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err);
        }) */
})

router.post('/getID', (req, res) => {
    const articleName = req.body.articleName
    const query =
    {
        articleName: articleName
    }
    articleCollection.findOne(query)
        .then((article) => {
            res.send(article._id)
        })
        .catch((error) => {
            res.status(504).send(error)
        })
})

router.post('/convert', (req, res) => {
    try {
        mdFile = req.body.markdown
        var htmlConverted = md.render(mdFile)
        res.send(htmlConverted)
    } catch (error) {
        res.send(error)
    }

})

module.exports = router
