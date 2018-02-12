###### MongoDB
1. Create a container called mongo, the mirror is mongo as well.__
If there is no mirror, docker will download the mirror for you on your machine.__
`docker run -d --name mongo mongo`
2. Go into the container__
`docker exec -it mongo bash`


###### Mongo Shell
1. Go into the mongo DB__
`mongo`
2. Switch to specific DB. If the DB doesn't exist, it will create for you.__
`use {DB name}`

###### Connect to MongoDB
1. From MongoDB official website:
node-mongodb-native
2. Way 2, use mongoose
`npm install mongoose`

###### CRUD
1. Insert
Use insertOne() method can insert the collection to the DB.
`db.albums.insertOne({title: "Blue Sky"})`
`db.albums.find()`
Insert many
`db.collection.insertMany([
  { title: "Like The Way You Are" },
  { title: "This Love" },
  { title: "Shake" }
  ])`
`db.collection.insert([
  { title: "Like The Way You Are" },
  { title: "This Love" },
  { title: "Shake" }
])`
But when use .insert to insert many collections, it returns the insert BulkWriteResult/summery.

`db.collection.find()`

2. Update
`db.albums.updateMany(
  {},
  {
    $set: { artist: "Test artist" }
  }
)`
`db.albums.update(
  { title: "Shake" },
  {
    $set: { artist: "Taylor Swift" }
  }
)`

3. Remove
`db.albums.deleteOne(
  { artist: "Test artist" }
);`

`db.albums.deleteMany(
  { artist: "Test artist" }
);`

`.remove()` can remove more, but set the second param as true, it's same as `.deleteOne()`
`db.albums.remove(
  { artist: "Test artist" }, true
);`

`db.albums.remove({});`
Give the empty object to .remove(), it will remove all items from the collection.

###### Query
`db.movie.find({ year: "1994" }, { title: 1, year: 1})`
The default will display id.
`db.movie.find({ year: "1994" }, { title: 1, year: 1, _id: 0})`
Now there is no _id column display.

`db.movie.find({ year: "1994" }, { title: 1, year: 1, _id: 0}).size()`
This will return the number of the item.

`db.movie.find({ year: "1994" }, { title: 1, year: 1, _id: 0}).skip(10)`

`db.movie.find({ year: "1994" }, { title: 1, year: 1, _id: 0}).limit(3)`

`db.movie.find({ year: "1994" }, { title: 1, year: 1, _id: 0}).limit(3).skip(10)`

`db.movie.find({ year: "1994" }, { title: 1, year: 1, _id: 0}).sort({ rating.average: -1})`
This will display the sorted list, sort by rating.average

To find the rating.average > 9.5
`db.movies.find({ rating.average: { $gt: 9.5 } }, { title: 1, rating.average: 1, _id: 0})`

To find the rating.average < 9.5
`db.movies.find({ rating.average: { $lt: 9.5 } }, { title: 1, rating.average: 1, _id: 0})`

$in
`db.movies.find({ genres: { $in: ["犯罪", "剧情"] }}, { title: 1, genres: 1, _id: 0})`

$nin
`db.movies.find({ genres: { $nin: ["犯罪", "剧情"] }}, { title: 1, genres: 1, _id: 0})`
