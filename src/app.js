const {app} = require('./bin/routes')

app.listen(3000, () => {
    console.log('Server on port 3000')
})