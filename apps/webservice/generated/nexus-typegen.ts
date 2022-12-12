/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Chunk: { // root type
    id?: string | null; // String
    new?: number | null; // Int
  }
  Cond: { // root type
    id?: string | null; // String
    nbgStates?: number | null; // Int
    nbr?: Array<number | null> | null; // [Int]
    states?: Array<number | null> | null; // [Int]
  }
  Mutation: {};
  Post: { // root type
    content?: string | null; // String
    id?: number | null; // Int
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  Query: {};
  Rule: { // root type
    description?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    others?: number | null; // Int
    stateNames?: Array<string | null> | null; // [String]
  }
  User: { // root type
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Chunk: { // field return type
    conds: Array<NexusGenRootTypes['Cond'] | null> | null; // [Cond]
    id: string | null; // String
    new: number | null; // Int
    rule: NexusGenRootTypes['Rule'] | null; // Rule
  }
  Cond: { // field return type
    chunk: NexusGenRootTypes['Chunk'] | null; // Chunk
    id: string | null; // String
    nbgStates: number | null; // Int
    nbr: Array<number | null> | null; // [Int]
    states: Array<number | null> | null; // [Int]
  }
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post'] | null; // Post
    deletePost: NexusGenRootTypes['Post'] | null; // Post
    publish: NexusGenRootTypes['Post'] | null; // Post
    signupUser: NexusGenRootTypes['User'] | null; // User
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    id: number | null; // Int
    published: boolean | null; // Boolean
    title: string | null; // String
  }
  Query: { // field return type
    allRules: Array<NexusGenRootTypes['Rule'] | null> | null; // [Rule]
    chunk: NexusGenRootTypes['Chunk'] | null; // Chunk
    cond: NexusGenRootTypes['Cond'] | null; // Cond
    drafts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    feed: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    filterPosts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    post: NexusGenRootTypes['Post'] | null; // Post
    uniqueRule: NexusGenRootTypes['Rule'] | null; // Rule
  }
  Rule: { // field return type
    chunks: Array<NexusGenRootTypes['Chunk'] | null> | null; // [Chunk]
    description: string | null; // String
    id: string | null; // String
    name: string | null; // String
    others: number | null; // Int
    stateNames: Array<string | null> | null; // [String]
  }
  User: { // field return type
    email: string | null; // String
    id: number | null; // Int
    name: string | null; // String
    posts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
  }
}

export interface NexusGenFieldTypeNames {
  Chunk: { // field return type name
    conds: 'Cond'
    id: 'String'
    new: 'Int'
    rule: 'Rule'
  }
  Cond: { // field return type name
    chunk: 'Chunk'
    id: 'String'
    nbgStates: 'Int'
    nbr: 'Int'
    states: 'Int'
  }
  Mutation: { // field return type name
    createDraft: 'Post'
    deletePost: 'Post'
    publish: 'Post'
    signupUser: 'User'
  }
  Post: { // field return type name
    author: 'User'
    content: 'String'
    id: 'Int'
    published: 'Boolean'
    title: 'String'
  }
  Query: { // field return type name
    allRules: 'Rule'
    chunk: 'Chunk'
    cond: 'Cond'
    drafts: 'Post'
    feed: 'Post'
    filterPosts: 'Post'
    post: 'Post'
    uniqueRule: 'Rule'
  }
  Rule: { // field return type name
    chunks: 'Chunk'
    description: 'String'
    id: 'String'
    name: 'String'
    others: 'Int'
    stateNames: 'String'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    name: 'String'
    posts: 'Post'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title: string; // String!
    }
    deletePost: { // args
      postId?: string | null; // String
    }
    publish: { // args
      postId?: string | null; // String
    }
    signupUser: { // args
      email: string; // String!
      name?: string | null; // String
    }
  }
  Query: {
    chunk: { // args
      chunkId: string; // String!
    }
    cond: { // args
      condId: string; // String!
    }
    filterPosts: { // args
      searchString?: string | null; // String
    }
    post: { // args
      postId: string; // String!
    }
    uniqueRule: { // args
      ruleId: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}