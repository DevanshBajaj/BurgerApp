import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
//   constructor(props) {
//      super (props);
//    this.state = {}
// }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render () {
        return(
            <Auxilliary>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Control</div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;