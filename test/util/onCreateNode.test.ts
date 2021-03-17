import { onCreateNode } from '../../gatsby-node';
import createSlug from '../../util-node/createSlug';

jest.mock('../../util-node/createSlug', () => jest.fn(() => 'slug'));

function createMockNodeOfType(type) {
  return {
    actions: { createNodeField: jest.fn() },
    getNode: jest.fn(),
    node: {
      internal: { type },
      frontmatter: { title: 'Test title' },
    },
  };
}

describe('Tests for onCreateNode', () => {
  beforeEach(() => {
    createSlug.mockClear();
  });
  it('generates a slug for MarkdownRemark nodes', () => {
    const { node, getNode, actions } = createMockNodeOfType('MarkdownRemark');
    onCreateNode({ node, getNode, actions });
    expect(createSlug).toHaveBeenCalledWith('Test title');
    expect(actions.createNodeField).toHaveBeenCalledWith({
      node,
      name: 'slug',
      value: 'slug',
    });
  });
  it('only generates a slug for MarkdownRemark nodes', () => {
    const { node, getNode, actions } = createMockNodeOfType('SomeOtherType');
    onCreateNode({ node, getNode, actions });
    expect(createSlug).not.toHaveBeenCalled();
  });
});
