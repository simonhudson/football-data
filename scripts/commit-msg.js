'use strict';

const fs = require('fs');

const TICKET_PREFIX = 'XXX-';
const REGEX = new RegExp(`^${TICKET_PREFIX}\\d+`, 'i');

const getIssueTagFromBranchName = str => {
	const strToMatch = str.split('/')[0];
	if (!strToMatch) return null;
	const matched = strToMatch.match(REGEX);
	return matched && matched[0];
};

const branchName = require('child_process').execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).split('\n')[0];
const issueTag = getIssueTagFromBranchName(branchName);

if (issueTag) {
	const messageFile = process.env.HUSKY_GIT_PARAMS;
	const message = fs.readFileSync(messageFile, { encoding: 'utf-8' });
	const messageTitle = message.split('\n')[0];
	const messageLines = message.split('\n');
	messageLines[0] = `[${issueTag}] ${messageTitle}`;
	fs.writeFileSync(messageFile, messageLines.join('\n'), { encoding: 'utf-8' });
}
