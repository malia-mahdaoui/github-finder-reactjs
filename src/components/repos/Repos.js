import React from 'react';
import ReposItem from './ReposItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
    return (
        repos.map(repo => <ReposItem repo={repo} ke={repo.id} y />)
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;