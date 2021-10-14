import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';


export const ImageLogo = styled.div`
  width: 104px;
  height: 58px;
  object-fit: contain;
  padding-top: 88px;
  padding-bottom: 28px;
  margin: 0 auto;
`;

export const FontEnter = styled.div`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
