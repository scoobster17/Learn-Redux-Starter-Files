import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';

// maps the state to react props
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

// maps the dispatch and action creators to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// connects the above to the Main (presentational) component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;