// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MondoDB server');

	// db.collection('Todos')
	// 	.findOneAndUpdate(
	// 		{
	// 			_id: new ObjectID('5c60b0ae94ea2202094e7246')
	// 		},
	// 		{
	// 			$set: {
	// 				completed: true
	// 			}
	// 		},
	// 		{
	// 			returnOriginal: false
	// 		}
	// 	)
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	db.collection('Users')
		.findOneAndUpdate(
			{
				_id: new ObjectID('5c6419dc9f510049672de3f6')
			},
			{
				$set: {
					name: 'Andrew Mead'
				},
				$inc: {
					age: 1
				}
			},
			{
				returnOriginal: false
			}
		)
		.then(result => {
			console.log(result);
		});

	//db.close();
});
