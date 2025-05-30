// Code generated by tygo. DO NOT EDIT.

//////////
// source: directive.go
/*
This example is here to reproduce Github issue #26
Directive comments should not be output.

See https://github.com/okaris/tygo/issues/26
*/

/**
 * Comment above a directive
 */
export const SomeValue = 3;
/**
 * Empty Comment
 */
export const AnotherValue = 4;

export const DirectiveOnly = 5;
/**
 * RepoIndexerType specifies the repository indexer type
 */
export type RepoIndexerType = number /* int */;
/**
 * RepoIndexerTypeCode code indexer
 */
export const RepoIndexerTypeCode: RepoIndexerType = 0; // 0
/**
 * RepoIndexerTypeStats repository stats indexer
 */
export const RepoIndexerTypeStats: RepoIndexerType = 1; // 1
export const A = "a";
export const B = "a";
export const C = "c";
