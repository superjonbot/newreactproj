const fetch = require('node-fetch'); // let settings={
//     _feedURL:'https://feeds.video.aetnd.com/api/${brand}/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500',
//     _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=',
//     _sessionID: Date.now() + String(Math.random() * 1000000 >> 0),
//     _brands:['aetv','history','lifetime','fyi']
// }


module.exports = {
  defaults: {
    _feedURL: 'https://feeds.video.aetnd.com/api/${brand}/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500',
    _endPoint: 'http://sandbox-cloudapi.imrworldwide.com/nmapi/v2/{{appid}}/{{sessionID}}/a?b=',
    _sessionID: Date.now() + String(Math.random() * 1000000 >> 0),
    _brands: ['aetv', 'history', 'lifetime', 'fyi']
  },
  hello: () => {
    return 'hello';
  },
  feedURI: brand => {
    return eval('`' + module.exports.defaults._feedURL + '`');
  },
  getResults: async function (brand) {
    try {
      const uri = this.feedURI(brand);
      const response = await fetch(uri);
      const post = await response.json();
      const results = post.results; //console.log(results.length)

      return results;
    } catch (error) {
      console.error(error);
    }
  }
};