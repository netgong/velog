// @flow
import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import HeaderContainer from 'containers/base/HeaderContainer';
import PostViewer from 'containers/post/PostViewer';
import { type Match } from 'react-router-dom';

type Props = {
  match: Match,
};

const Post = ({ match }: Props) => {
  const { username, urlSlug } = match.params;

  return <PostViewer username={username} urlSlug={urlSlug} />;
};

export default Post;
