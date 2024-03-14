/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Notes = "notes",
	Projets = "projets",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type NotesRecord = {
	name?: string
	image?: string
}

export type ProjetsRecord = {
	image_hero?: string
	image_loop?: string
	name?: string
	page_name?: string
	work_type?: string
	type?: string
	categorie?: string
	date?: string
	description1?: string
	description2?: string
	image1_1?: string
	image1_2?: string
	image1_3?: string
	image1_4?: string
	image1_5?: string
	description3?: string
	image2_1?: string
	image2_2?: string
	image2_3?: string
	image2_4?: string
	image2_5?: string
	image2_6?: string
	description4?: string
	image3_1?: string
	image3_2?: string
	image3_3?: string
	image_banner?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type NotesResponse = Required<NotesRecord> & BaseSystemFields
export type ProjetsResponse = Required<ProjetsRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	notes: NotesRecord
	projets: ProjetsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	notes: NotesResponse
	projets: ProjetsResponse
	users: UsersResponse
}