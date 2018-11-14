export const findIssueById = (issues, id) => {
  if (issues.length > 0) {
    return issues.find(issue => issue.id === id);
  }
  return null;
};
