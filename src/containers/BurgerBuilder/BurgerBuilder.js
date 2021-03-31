import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return(
            <Auxilliary>
                <Burger />
                <div>Build Control</div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;