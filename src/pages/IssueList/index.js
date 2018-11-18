import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    const { issues, editIssue } = this.props;
    const issue = findIssueById(issues, id);
    editIssue(issue);
  };

  renderCards = issues => {
    return issues.map(issue => {
      return (
        <div className="card" key={issue.id}>
          <div className="content">
            <div className="header">
              {issue.title}
              <span className={"status " + issue.type}>{issue.type}</span>
            </div>
            <div>{issue.description}</div>
          </div>

          <div className="action-group">
            <button className="edit-btn" onClick={() => this.onEdit(issue.id)}>
              Edit
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    const { issues } = this.props;
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

IssueList.propTypes = {
  issues: PropTypes.array.isRequired,
  editIssue: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueList);
