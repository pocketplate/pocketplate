import React, { Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Loading } from '../components/loading/Loading';
import { PageNotFound } from '../components/page-not-found/PageNotFound';

const PoundBar = (
  lazy(() => (
    import('../../pound-calculator/components/PoundBar')
  ))
);

export class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/loadbar' component={PoundBar} />
          <Redirect exact from='/' to='/loadbar' />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    );
  }
}
