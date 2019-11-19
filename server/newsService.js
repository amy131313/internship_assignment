const NewsAPI = require('newsapi');
//Generate your api key from newsapi.org
const newsapi = new NewsAPI('YOUR-API-KEY');

class NewsService {

    static getNewsItemsByCategory(category) {
        try {
            return  newsapi.v2.topHeadlines({
                category: category,
                language: 'en',
                country: 'gb',
                text: null
            }).then(data => {
                return this._transformData(data)
            }).catch(error => {console.log(error.message);})
        }
        catch (error) {
            console.log(error.message);
        }
    }

    static _transformData(data) {
        const filtered = data.articles.filter(article => {
            const incompleteData = article.description == null || article.description == '' || article.urlToImage == null
            return !incompleteData
        });

        const titlesArticles = filtered.map(articles => {
            return articles.title
        });

        return filtered.map(({urlToImage, title, description, content}, i) => {
            return {
                src: urlToImage,
                title: title,
                text: description,
                contentCard: content,
                id: i,
                button: {
                    size: "s",
                    href: "/../content/" + i
                },
                linkContent: {
                    href: "/../content/" + (i + 1),
                    titleLink: titlesArticles[i + 1]
                }
            }
        })
    }

    static getContentByID(category, id) {
        const singleCard = category.filter(card => {
            return card.id == id;
        });

        return singleCard ? singleCard[0] : null;
    }
}

module.exports = NewsService
