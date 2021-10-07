const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {
    const data = {
        image_profile: 'https://photos.google.com/photo/AF1QipNhxLlY69_fN_wpPiZzYxahxumABm_oxI7HHk7m',
        greeting: 'Hello, Welcome to my Portfolio!',
        introduction: 'I am a self taught junior web developer from the Puget Sound area.',
        languages: [
            {name:'Javascript', years:1},
            {name:'Node.js', years:1},
            {name:'Express', years:1},
            {name:'HTML5', years:1},
            {name:'Mustache', years:1},
            {name:'CSS', years:1},
        ]
    }
    
    
    
    res.render('landing', data)

})


module.exports = router