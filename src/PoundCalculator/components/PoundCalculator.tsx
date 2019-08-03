import * as React from 'react';
import { PoundCalculatorStore } from './stores/PoundCalculatorStore';
import { inject, observer } from "mobx-react";

interface PoundCalculatorProps {
  poundCalculatorStore?: PoundCalculatorStore
}

@inject('poundCalculatorStore')
@observer
export class PoundCalculator extends React.Component<PoundCalculatorProps> {

  constructor(props: PoundCalculatorProps) {
    super(props);
  }

  public handleCompute() {
    console.log(this);
  }

  public handleChange() {
    console.log(this);
  }

  public handleValue() {
    console.log(this);
  }

  render() {
    return (
      <div className="calculator">
        <div className="configuration">
          <input type="number" value={this.handleValue()} onChange={() => this.handleChange()}/>
          <button onClick={() => this.handleCompute()}>Go !</button>
        </div>
        <div className="barLoad">
        </div>
      </div>
    );
  }
}

export default PoundCalculator;