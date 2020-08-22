import { connect } from 'react-redux';
import Login from './login';
import { doLogin } from '../../actions/login';

const mapStateToProps = ({ login: { username } }) => ({
  username,
});

export default connect(mapStateToProps, { onLoginButtonPressed: doLogin })(Login);
