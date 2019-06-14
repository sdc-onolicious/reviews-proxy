const app = require('./serverroutes.js');
const port = 3011;

app.listen(port, () => console.log(`I am serverrun.js and I am listening on port ${port}`))
