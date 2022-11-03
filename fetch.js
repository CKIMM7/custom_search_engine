const fetch = require('node-fetch');

async function callGoogle (q) {

    let youngApiKey = 'AIzaSyBg77XjHNeflTC57BDwNiSNvJjGHQMH6H0'
    let dayoApiKey = 'AIzaSyCZyGyW_no5i82zNYV-_sYyz7GLSjqvrQc'

    let url = `https://www.googleapis.com/customsearch/v1?key=${dayoApiKey}&cx=e5d862fcf3cff4a4f&gl=uk&q=${q}`
    
    const res =  await fetch(url);
    const data = await res.json();
    return data;
}


module.exports = { callGoogle }
