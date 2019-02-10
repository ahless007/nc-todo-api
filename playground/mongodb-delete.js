// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MondoDB server');

	//deleteMany
	// db.collection('Todos')
	// 	.deleteMany({ text: 'Each Lunch' })
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	//deleteOne
	// db.collection('Todos')
	// 	.deleteOne({ text: 'Eat Lunch' })
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	//findOneAndDelete
	// db.collection('Todos')
	// 	.findOneAndDelete({ completed: false })
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	// db.collection('Users')
	// 	.deleteMany({ name: 'Andrew' })
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	db.collection('Users')
		.findOneAndDelete({
			_id: new ObjectID('5c60b25394ea2202094e7387')
		})
		.then(results => {
			console.log(JSON.stringify(results, undefined, 2));
		});

	//db.close();
});
