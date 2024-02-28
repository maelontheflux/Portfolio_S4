/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("va2ji39jc9y1rnu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jxhvf15b",
    "name": "categorie",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oaaiqr6x",
    "name": "date",
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
  const collection = dao.findCollectionByNameOrId("va2ji39jc9y1rnu")

  // remove
  collection.schema.removeField("jxhvf15b")

  // remove
  collection.schema.removeField("oaaiqr6x")

  return dao.saveCollection(collection)
})
