import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getIssues, setIssue } from "../../store/actions/issue";
import { findIssueById } from "../../utils";
import "./styles.css";

class IssueList extends PureComponent {
  componentDidMount() {
    this.props.loadIssues();
  }
  renderEmptyMessage = () => {
    return <div> No Issues Created Yet</div>;
  };
  onEdit = id => {
    console.log("Id is:" + id);
    const { issues, editIssue } = this.props;
    const issue = findIssueById(issues, id);
    editIssue(issue);
  };

  renderCards = issues => {
    return issues.map(issue => {
      return (
        <div className="card" key={issue.id}>
          <div className="content">
            <div className="header">{issue.title}</div>
            <div>{issue.description}</div>
          </div>

          <div className="action-group">
            <button onClick={() => this.onEdit(issue.id)}>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      );
    });
  };
  render() {
    const { issues } = this.props;
    console.log(issues);
    return (
      <div className="issue-list-container">
        <h1>IssueList </h1>
        <div className="cards">
          {issues.length === 0
            ? this.renderEmptyMessage()
            : this.renderCards(issues)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("inside map state", state.issue);
  return {
    issues: state.issue.issues
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadIssues: () => getIssues(dispatch),
    editIssue: issue => setIssue(dispatch, issue)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueList);
