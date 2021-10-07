const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {
    const data = {
        greeting: 'Hello, Welcome to my Portfolio!',
        introduction: 'I am a self taught junior web developer from the Puget Sound area.'
    }
    
    
    
    res.render('landing', data)

})


module.exports = router