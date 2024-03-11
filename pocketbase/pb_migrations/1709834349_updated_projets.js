/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("va2ji39jc9y1rnu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dglorzyy",
    "name": "page_name",
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
    "id": "jwx8p5uz",
    "name": "work_type",
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
  collection.schema.removeField("dglorzyy")

  // remove
  collection.schema.removeField("jwx8p5uz")

  return dao.saveCollection(collection)
})
