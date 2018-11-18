import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveIssue, getIssues, updateIssue } from "../../store/actions/issue";
import "./styles.css";
import { issueTypes } from "./issueTypes";

class Issue extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: this.props.issue ? this.props.issue.title : "",
        description: this.props.issue ? this.props.issue.description : "",
        type: this.props.issue ? this.props.issue.type : issueTypes[0],
        id: this.props.issue ? this.props.issue.id : ""
      },
      loading: false,
      errors: {}
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      data: {
        id: nextProps.issue.id,
        description: nextProps.issue.description,
        type: nextProps.issue.type,
        title: nextProps.issue.title
      }
    });
  };

  onChange = e => {
    const { errors } = this.state;

    if (errors) {
      delete errors[e.target.name]; // fir for create Issue form validation
    }

    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    const issueObj = this.state.data;
    e.preventDefault();
    const { update, save, refreshList } = this.props;
    const errors = this.validate(issueObj);
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      });
      if (issueObj.id) {
        update(issueObj);
      } else {
        save(issueObj);
      }
      refreshList();
      this.clearForm();
    }
  };

  clearForm = () => {
    this.setState({
      data: {
        title: "",
        description: "",
        type: issueTypes[0].value,
        id: ""
      },
      errors: {}
    });
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Title Can't be blank";
    if (!data.description) errors.description = "Description Can't be blank";
    this.setState({
      errors: errors
    });
    return errors;
  };

  render() {
    const { errors, data } = this.state;
    return (
      <div>
        <h1> {data.id ? "Edit Issue" : "Create Issue"} </h1>
        <form className="form-container" onSubmit={this.onSubmit}>
          <div className="form-el-margin">
            <label htmlFor="title">Title</label>
            <input
              placeholder="please enter title"
              id="title"
              name="title"
              onChange={this.onChange}
              value={data.title}
            />
            {errors && errors.title ? (
              <span className="error-msg">{errors.title}</span>
            ) : null}
          </div>
          <div className="form-el-margin">
            <label htmlFor="type"> Type </label>
            <select
              value={data.type}
              name="type"
              id="type"
              onChange={this.onChange}
            >
              {issueTypes &&
                issueTypes.map((option, index) => {
                  return (
                    <option value={option.value} key={index}>
                      {option.value}
                    </option>
                  );
                })}
            </select>
            {errors && errors.type ? (
              <span className="error-msg">{errors.type}</span>
            ) : null}
          </div>
          <div className="form-el-margin">
            <label htmlFor="description"> Description </label>
            <textarea
              placeholder="please enter description"
              value={data.description}
              onChange={this.onChange}
              name="description"
              id="description"
            />
            {errors && errors.description ? (
              <span className="error-msg">{errors.description}</span>
            ) : null}
          </div>
          <div className="form-el-margin">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issue: state.issue.issue
  };
}
function mapDispatchToProps(dispatch) {
  return {
    save: issue => saveIssue(dispatch, issue),
    refreshList: () => getIssues(dispatch),
    update: issue => updateIssue(dispatch, issue)
  };
}

Issue.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue);
