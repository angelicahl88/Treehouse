// Libs
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

// Components
import GithubWidget from './GithubWidget';
import UserDetails from './UserDetails';
import UserStats from './UserStats';
import Repositories from './Repositories';
import Footer from './Footer';

describe('<GithubWidget />', () => {
  it('should render all sub-components', () => {
    const wrapper = mount(<GithubWidget username="test" />);
    // console.log(wrapper.debug());
    expect(wrapper.containsAllMatchingElements([
      <UserDetails />,
      <UserStats />,
      <hr />,
      <Repositories />,
      <Footer />
    ])).to.equal(true);
  });

  it('should call componentDidMount once', () => {
    sinon.spy(GithubWidget.prototype, 'componentDidMount');
    mount(<GithubWidget username="test" />);
    expect(GithubWidget.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
