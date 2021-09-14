import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}