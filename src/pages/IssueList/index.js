import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getIssues, setIssue, updateIssue } from "../../store/actions/issue";
import { findIssueById, groupIssues } from "../../utils";
import "./styles.css";
const SECTIONS = ["open", "inprogress", "reopen", "close"];

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

  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = (e, section) => {
    let id = e.dataTransfer.getData("id");
    console.log(
      "the drop status is to be changed",
      "for the element",
      id,
      section
    );
    let { issues, dragUpdateIssue } = this.props;

    let newObj = findIssueById(issues, id);
    newObj.type = section;

    console.log("the updated issues arrary is", issues);
    dragUpdateIssue(newObj);
  };

  onDragStart = (e, id) => {
    console.log("inside onDragStart", id, "the section");
    e.dataTransfer.setData("id", id);
    //store the element that is being dragged
  };

  renderCards = issues => {
    return issues.map(issue => {
      return (
        <div
          className="card"
          key={issue.id}
          draggable
          onDragStart={e => this.onDragStart(e, issue.id)}
        >
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

  renderSections = (sections, result) => {
    return sections.map((section, index) => {
      return (
        <div
          className="issues"
          key={index}
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, section)}
        >
          <h1> {section.toUpperCase()} ISSUES </h1>
          {result[section] ? (
            <div className="cards">{this.renderCards(result[section])}</div>
          ) : null}
        </div>
      );
    });
  };

  render() {
    const { issues } = this.props;

    let result = null;
    if (issues) {
      result = groupIssues(issues);
    }
    return (
      <div className="issue-list-container">
        <h1>IssueList </h1>

        <div className="card-layout">
          {SECTIONS ? this.renderSections(SECTIONS, result) : null}
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
    editIssue: issue => setIssue(dispatch, issue),
    dragUpdateIssue: issue => updateIssue(dispatch, issue)
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
