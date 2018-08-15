import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two butttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('The Text Area', () => {
  beforeEach(() => {
    // enter in fake text in to textarea
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    // Force update so that component can re-render
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    // Check if text area recieved correct value
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('empties the text area when form is submitted', () => {
    // Add check to make sure area does update
    // expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    // Sim submit on form element
    wrapped.find('form').simulate('submit');
    // Force update so that component can re-render
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
