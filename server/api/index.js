const { Router } = require('express')
const { post } = require('./connect')
const { createToken } = require('./token')

const { IDS, CHANNEL } = process.env
const router = Router()

const empty = {
  title: '',
  choiceId: 0,
  books: [],
  moreId: 0
}

const categoryArray = [{
    name: 'banner',
    count: 5,
    moreId: 0
  }, {
    name: '精品荟萃',
    count: 6,
    moreId: 2
  }, {
    name: '新书推荐',
    count: 9,
    moreId: 3
  }, {
    name: '人气推荐',
    count: 3,
    moreId: 10
  }
  , {
    name: '猜你喜欢',
    count: 8,
    moreId: 44
}]

const books = (index, id, data, imgDomain) => {
  return data ? {
    title: categoryArray[index].name,
    choiceId: id,
    moreId: categoryArray[index].moreId,
    books: data.list.slice(0, categoryArray[index].count).map(item => {
      const { id, status, title, bookcover, bookcoverPack, thumb, thumbPack, desc } = item
      const vertical = CHANNEL === 'jt' ? bookcover : bookcoverPack
      const horizontal = CHANNEL === 'jt' ? thumb : thumbPack
      return {
        id,
        status,
        vertical: (imgDomain + (vertical.replace(/jpeg|jpg|png|gif/, 'html'))), // imgDomain + bookcover,
        horizontal: (imgDomain + (horizontal.replace(/jpeg|jpg|png|gif/, 'html'))), // imgDomain + thumb,
        title,
        description: desc,
        star: randomStar(),
        read: randomRead()
      }
    })
  } : empty
}

const randomStar = () => {
  return (Math.random() * (10 - 9) + 9).toFixed(2)
}

const randomRead = () => {
  const num = Math.floor(Math.random() * (10000 - 4000)) + 40000
  const numStr = (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return numStr.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

router.post('/init', (req, res, next) => {
  const params = req.body
  const token = createToken()
  return Promise.all([
    post('/domain/getDomainByTypes', { typeString: '8,10' }, token),
		post('/recommend/lists', { ids: IDS }, token),
		post('/positionback/reback', null, token),
		post('/tempuser/login', params, token)
	]).then(results => {
    const [res_domain, res_books, res_reback] = results
    const { domain: imgDomain } = res_domain.data[0]['8'][0]
    const { domain } = res_domain.data[1]['10'][0]
    const { data } = res_books
    const { data: { chapter: { id: rebackId } } } = res_reback
    const category = Object.keys(data).map((id, index) => {
      return books(index, id, data[id], imgDomain)
    })

    return res.send({
      data: {
        category,
        domain,
        rebackId,
        token
      },
    })
  })
  .catch(next)
})

router.post('/explosion', async (req, res, next) => {
  const resData = await post('/cartoon/newRand', res.req.body, res.req.body.token)
  return res.send(Object.assign(resData))
})

module.exports = router
// module.exports = {
//   path: '/api',
//   handler: router
// }