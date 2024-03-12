/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ylno0xmtzq9k0t")

  collection.name = "notes"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pevcsa9w",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ylno0xmtzq9k0t")

  collection.name = "Notes"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pevcsa9w",
    "name": "Name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
