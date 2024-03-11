/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("va2ji39jc9y1rnu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpxccw30",
    "name": "image_loop",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("va2ji39jc9y1rnu")

  // remove
  collection.schema.removeField("hpxccw30")

  return dao.saveCollection(collection)
})
