// exports.handler = function(event, context, callback) {
//   // callback(null, {
//   //  statusCode: 200,
//   //  body: 'Hello World'
//   // })
//   return {
//     statusCode: 200,
//     body: 'Hello World',
//   }
//  }

exports.handler = async () => {
  return {
    statusCode: 200,
    body: 'Hello'
  }
}
