import React from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import PostUser from "./PostUser";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <h3><PostUser userId={post.userId}/></h3>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mstp = state => {
  return { posts: state.posts };
};

export default connect(mstp, { fetchPosts })(PostList);
