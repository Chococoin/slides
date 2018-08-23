import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


class Slide1 extends Component {
  constructor(props){
    super(props);

  this.state = {
    root: {
      width: '100%',
      maxWidth: 500,
  },
};

  }


  render() {
    return (
      <div className={this.state.root}>
      <Typography variant="display3" gutterBottom align="center">
        Remix & Solidity
      </Typography>
      <Typography gutterBottom Wrap align="justify">
        {`
          Como integrantes del equipo Bit&Nibs tenemos pràcticamente la obligaciòn de estar lo mas actualizados en tecnologìas.
          Sobre todo aquellas relacionadas con la tecnologia de la cadena de bloques y los contratos inteligentes.

          Este tutorial pretende ensegnar lo mas basico de Remix y Solidity. Que son dos tecnologias que sirven para la introduccion de este
          maravilloso y basto universo de posibilidades que llegaron para ayudarnos a revolucionar el mundo.

        `}
      </Typography>
      </div>
    );
  }
}

export default Slide1;
