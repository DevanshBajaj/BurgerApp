import React from 'react';
import Aux from '../../hoc/Auxilliary';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;