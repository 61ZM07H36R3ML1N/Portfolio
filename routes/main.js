const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = express.Router()

router.get('/', (req, res) => {

    res.send('Hello!')

})


module.exports = router