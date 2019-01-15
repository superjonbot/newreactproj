const app = require('./app')

// CHECK FOR TRUTHY & FALSY VALUES *
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('001 exports.hello', () => {
  expect(app.hello()).toBe('hello')
})

// test('001 exports.feedURI', () => {
//     expect(app.feedURI('aetv')).toBe('https://feeds.video.aetnd.com/api/aetv/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500')
// })
//
// test('get results has at least a hundred entries', () => {
//     expect.assertions(1);
// return app.getResults('aetv').then(data => expect(data.length).toBeGreaterThan(100));
// });
//
