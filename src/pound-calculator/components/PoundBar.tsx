import * as React from 'react';
import '../dependencies';
import './PoundBar.scss';
import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment, Icon } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { BarStore, IBarStore } from '../stores/BarStore';
import { resolve } from 'inversify-react';
import { observer } from 'mobx-react';

@observer
export class PoundBar extends React.Component {
  @resolve(BarStore)
  private barStore: IBarStore;

  public onCompute(): void {
    this.barStore.compute();
  }

  render() {
    return (
      <div className="pound-bar">
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} sm={9}>
            <TextField
              id='weight'
              label='Weight'
              type='number'
              defaultValue={0}
              value={this.barStore.barConfiguration.weight}
              onChange={event => this.barStore.barConfiguration.weight = parseInt(event.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position='end'>Pounds</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button onClick={() => this.onCompute()}><Icon>touch_app</Icon></Button>
          </Grid>
        </Grid>
        <div>{this.barStore.barLoad.toString()}</div>
      </div>
    );
  }
}

export default PoundBar;
