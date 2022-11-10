var express = require('express')
const articleCollection = require('./db')
const path = require('path')

const router = express.Router()

router.get('/',(req,res)=>{
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
            console.log(results);
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
    var uploadDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " "
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    console.log(uploadDate)

    article['uploadDate'] = uploadDate
    console.log(article);
    articleCollection.create(article)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err);
        })
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


module.exports = router
