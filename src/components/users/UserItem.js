import React/* ,{ Component }*/ from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//class UserItem extends Component {

/*constructor() {
    super();
    this.state = {
        id: 'id',
        login: "mojombo",
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }
}*/

/* state = {
     id: 'id',
     login: "mojombo",
     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
     html_url: 'https://github.com/mojombo'
 };*/

/*
    render() {
        //const { login, avatar_url, html_url } = this.state;
        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className='card'>
                <img src={avatar_url} alt=""
                    className="rounded-circle center"
                    style={{ width: '60px' }} />
                <h4>{login}</h4>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'>
                        More
                    </a>
                </div>
            </div>
        )
    }
}*/

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className='card'>
            <img src={avatar_url} alt=""
                className="rounded-circle center"
                style={{ width: '60px' }} />
            <h4>{login}</h4>
            <div>
                {/*} <a href={html_url} className='btn btn-dark btn-sm my-1'>
                    More
                </a>*/}
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                    More
                </Link>

            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
