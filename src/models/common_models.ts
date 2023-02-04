export interface ModificationNote {
	modified_on: Date;
	modified_by: String;
	modification_note: String;
}

export const ModificationNote = {
	modified_on: Date,
	modified_by: String,
	modification_note: String
}

export enum response_status_codes {
	success = 200,
	bad_request = 400,
	internal_server_error = 500
}



export interface AttributeElement {
	column: string,
	type?: string,
	attribute?: string,
	selected: string,
	related?: string[]
}

export interface TypeConfig {
	type?: string,
	attribute?: string,
	separator?: boolean,
	self?: {
		to: string,
		relation: string,
		informationFlow?: InformationFlowAdd
	}[]
}

export type Direction = "NO_DIRECTION" | "FIRST_TO_SECOND" | "SECOND_TO_FIRST" | "BOTH_DIRECTIONS"

export interface InformationFlowAdd {
	name: string
	direction?: Direction,
	businessObjects?: { bName?: string, bDirect?: Direction }[],
	technicalComponent?: string[]
}

export interface RelationConfig {
	column: string[],
	selected: string[],
	direction?: Direction
}


/**
 * file Extension für das importieren von Dateien
 */

export type FileExtension = "ecore" | "xlsx" | "json" | "xmi"

/**
 * Icons für das Unterscheiden der verschiedenen File (excel, json, etc.)
 */

export type BadgeIcon = "table_view" | "article" | "plagiarism" | "summarize"

/**
 * Hier werden alle Interfaces definiert, einfach zur Übersicht
 */


/**
 * TODO
 */
export interface FileExport {
	name: string,
	extension: FileExtension
}

/**
 * Zum Updaten von Upload Files
 *
 * @interface Badge
 * @param type - Ecore | Excel | Config | undefined
 * @param name - string | undefined
 * @param value - ✗ | ✓ | ↺ | undefined
 * @param color - primary | accent | warn | undefined
 */
export interface Badge {
	type?: FileExtension
	name?: string,
	value?: "✗" | "✓" | "↺",
	icon: BadgeIcon,
	color: "#FF0000"
}

/**
 * Configschema
 *
 * @interface Config
 * @param stepper - number
 * @param headIndex - number
 * @param useColumn - string[]
 */
export interface Config {
	characterSplit?: string[],
	stepper?: number,
	headIndex?: number,
	useColumn?: string[],
	headRow?: string[],
	types?: { [key: string]: TypeConfig }
	attribute?: AttributeElement[],
	parent?: ParentConfig,
	relation?: RelationConfig[]
}

/**
 * @interface EnvConfig
 */
export interface EnvConfig {
	radio: { [key: string]: any }[],
	option: { name: string, value: number, letter: string }[],
	selectPosition: number[],
	selectName: string[]
}

export interface TypeConfig {
	type?: string,
	attribute?: string,
	separator?: boolean,
	self?: {
		to: string,
		relation: string,
		informationFlow?: InformationFlowAdd
	}[]
}

/**
 *
 * @interface ObjectStringArray
 * @param [key:string] : string[]
 */
export interface ObjectStringArray {
	[key: string]: string[]
}

/**
 * @interface ObjectString
 * @param [key:string] : string
 */
export interface ObjectString {
	[key: string]: string
}

/**
 * @interface AttributeElement
 */
export interface AttributeElement {
	column: string,
	type?: string,
	attribute?: string,
	selected: string,
	related?: string[]
}

/**
 * @interface ComboElement
 */
export interface ComboElement {
	name: Array<string>
	relation: Array<string>
}

/**
 * @interface RelationElement
 */
export interface RelationElement {
	column: string[]
	relation: any
	types: string[],
	selected: string[],
	masterSel: string[],
}

/**
 * @interface RelationConfig
 */
export interface RelationConfig {
	column: string[],
	selected: string[],
	direction?: Direction
}

export interface RelationObject {
	[associations: string]: ObjectNumberArrayArray[]
}

export interface ObjectNumberArrayArray {
	[key: string]: number[][]
}

/**
 * @interface ParentConfig
 */
export interface ParentConfig {
	[key: string]: {
		checked: boolean,
		type: string
	}
}

/**
 * @interface SelfRelTable
 */
export interface SelfRelTable {
	type?: string,
	from?: string,
	to?: string,
	relation?: string,
	informationFlow?: InformationFlowAdd
}

/**
 * @interface InformationFlowAdd
 */
export interface InformationFlowAdd {
	name: string
	direction?: Direction,
	businessObjects?: { bName?: string, bDirect?: Direction }[],
	technicalComponent?: string[]
}

/**
 * @interface SelfRelation
 */
export interface SelfRelation {
	value?: string,
	display?: string,
	const?: number
}

/**
 * @interface InformationFlowRelation
 */
export interface InformationFlowRelation {
	icon?: string,
	description?: Direction
}

/**
 * @interface QueryPattern
 */
export interface QueryPattern {
	query: string | undefined,
	result: Array<any>
}

