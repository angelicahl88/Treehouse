// Libs
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import get from './api';

// Components
import UserDetails from './UserDetails';
import UserStats from './UserStats';
import Repositories from './Repositories';
import Footer from './Footer';

const baseUserUrl = 'https://api.github.com/users/';

const getLastPushDate = (repositories = []) => {
  if (repositories.length === 0) {
    return moment();
  }

  const pushDates = repositories.map(repo => (moment(repo.pushed_at)));

  return moment.max(pushDates);
};

class GithubWidget extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  state = {
    userDetails: {},
    repositories: [],
  };

  componentDidMount() {
    const { username } = this.props;

    get(`${baseUserUrl}${username}`).then(response => {
      const userDetails = JSON.parse(response);
      this.setState({
        ...this.state,
        userDetails,
      });

      return get(userDetails.repos_url);
    }).then(response => {
      const userRepos = JSON.parse(response);
      this.setState({
        ...this.state,
        repositories: userRepos,
      });
    });
  }

  render() {
    const { userDetails, repositories } = this.state;

    if (userDetails === null) {
      return <div>Doing stuff</div>;
    }

    return (
      <div className="github-widget">
        <UserDetails
          imageUrl={userDetails.avatar_url}
          username={userDetails.login}
          name={userDetails.name}
          bio={userDetails.bio}
          location={userDetails.location}
        />
        <UserStats
          following={userDetails.following}
          followers={userDetails.followers}
          repositories={userDetails.public_repos}
        />
        <hr className="gh-widget-hr" />
        <Repositories repositories={repositories} top={3} />
        <Footer userUrl={userDetails.html_url} lastActiveDate={getLastPushDate(repositories)} />
      </div>
    );
  }
 }

export default GithubWidget;
