const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const app = express();
const  PORT = process.env.PORT || 3000 ;

const sitepage = require('./routes/sitepage.js');

//use to know the direct path of a file before adding it fo your code --- console.log(__dirname);

app.use('/', sitepage);


app.all('*',(req,res) => {
	res.status(404).send('Sorry page does not exist');
});


app.listen(PORT, () => {
	console.log(`server is live on port ${PORT}`);
});
