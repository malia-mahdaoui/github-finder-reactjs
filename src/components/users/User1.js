import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    };

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = this.props.user;

        const { loading, repos } = this.props;

        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    Back to search
                 </Link>
                <h1>
                    Hireable: {' '}
                    {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
                </h1>

                <div className='card grid-2'>
                    <div className='all-center'>
                        <img
                            src={avatar_url}
                            className='rounded-circle center'
                            alt=""
                            style={imgStyle} />
                        <h1>{name}</h1>
                        <p><b>Location:</b> {location}</p>
                    </div>
                    <div className="mx-3">
                        {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>)}
                        <a
                            href={html_url}
                            target='_blank'
                            className='btn btn-dark my-3'>
                            Visit GitHub profil
                             </a>
                        <ul type='none'>
                            <li>
                                {login && (
                                    <Fragment>
                                        <strong>Username :</strong> {login}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {company && (
                                    <Fragment>
                                        <strong>Company:</strong> {company}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {blog && (
                                    <Fragment>
                                        <strong>Website :</strong> {blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="card text-center my-5">

                    <div className="badge badge-danger py-3 my-2"> Followers : {followers}  </div>

                    <div className="badge badge-primary py-3 my-2"> Following : {following}  </div>

                    <div className="badge badge-success py-3 my-2"> Public Repos : {public_repos}  </div>

                    <div className="badge badge-dark py-3 my-2"> Public Gists: {public_gists}  </div>

                </div>

                <Repos repos={repos} />

            </Fragment>
        )

    }
}

const imgStyle = {
    width: '150px'
}

export default User;
