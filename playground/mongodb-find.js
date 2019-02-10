// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MondoDB server');

	// db.collection('Todos')
	// 	.find({
	// 		_id: new ObjectID('5c60a8dc94ea2202094e6f7c')
	// 	})
	// 	.toArray()
	// 	.then(
	// 		docs => {
	// 			console.log('Todos');
	// 			console.log(JSON.stringify(docs, undefined, 2));
	// 		},
	// 		err => {
	// 			console.log('Unable to fetch todos', err);
	// 		}
	// 	);

	// db.collection('Todos')
	// 	.find()
	// 	.count()
	// 	.then(
	// 		counts => {
	// 			console.log(`Todos count: ${counts}`);
	// 		},
	// 		err => {
	// 			console.log('Unable to fetch todos', err);
	// 		}
	//  );

	db.collection('Users')
		.find({
			name: 'Andrew'
		})
		.toArray()
		.then(
			docs => {
				console.log('Users');
				console.log(JSON.stringify(docs, undefined, 2));
			},
			err => {
				console.log('Unable to fetch users', err);
			}
		);

	//db.close();
});
