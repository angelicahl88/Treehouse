import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// Components
import Repositories from './Repositories';
import Repository from './Repository';

const repos = [
    {
        id: 1,
        stargazers_count: 2,
        url: 'www.google.com/1',
        name: 'best_repo_ever',
        language: 'javascript'
    },
    {
        id: 2,
        stargazers_count: 17,
        url: 'www.google.com/2',
        name: 'better_repo',
        language: 'C#'
    },
    {
        id: 3,
        stargazers_count: 4,
        url: 'www.google.com/3',
        name: 'ok_repo',
        language: 'pascal'
    },
    {
        id: 4,
        stargazers_count: 0,
        url: 'www.google.com/4',
        name: 'new_repo',
        language: 'C++'
    }
];

describe('<Repositories />', () => {
    
    it('should render number of repost specified by top prop', () => {
        const wrapper = shallow(<Repositories repositories={repos} top={2} />);
        expect(wrapper.find(Repository)).to.have.length(2);
    });

    it('should display repos order by stargazers', () => {
    const sortedTestData = repos.sort((a, b) => (b.stargazers_count - a.stargazers_count));
    const wrapper = shallow(<Repositories repositories={repos} top={2} />);

    const topRepos = wrapper.find(Repository);
    topRepos.forEach((repo, index) => {
      expect(repo.prop('url')).to.equal(sortedTestData[index].url);
      expect(repo.prop('name')).to.equal(sortedTestData[index].name);
      expect(repo.prop('language')).to.equal(sortedTestData[index].language);
      expect(repo.prop('stars')).to.equal(sortedTestData[index].stargazers_count);
    });
  });

});
