import spacing from 'material-ui/styles/spacing';
import { typography, colors } from 'material-ui/styles';

export const rootStyles = {
  appBar: {
    backgroundColor: colors.deepPurpleA200,
    top: 0,
  },
  appBarTitle: {
    fontSize: 24,
    color: typography.textFullWhite,
    fontWeight: typography.fontWeightLight,
  },
  contents: {
    // float: 'right',
    marginLeft: '270px',
    backgroundColor: '#f8f8f8',
  },
};

export const naviStyles = {
  frame: {
    backgroundColor: colors.fullWhite,
    width: '269px',
    marginRight: '-270px',
    borderRight: `1px solid ${colors.grey300}`,
    display: 'block',
    float: 'left',
    overflow: 'auto',
    position: 'relative',
    zIndex: 1500,
  },
  groupStyle: {
    marginBottom: '15px',
  },
  activeParentList: {
    color: colors.deepPurpleA200,
    fontWeight: 'bold',
    fontSize: '14px',
    paddingLeft: '15px',
  },
  parentList: {
    fontSize: '14px',
    paddingLeft: '15px',
  },
  activeChildList: {
    color: colors.deepPurpleA200,
    fontWeight: 'bold',
    paddingLeft: '30px',
    fontSize: '14px',
  },
  childList: {
    paddingLeft: '30px',
    fontSize: '14px',
  },
  innerDivStyle: {
    padding: '10px',
  },
  subHeaderStyle: {
    padding: '0 25px',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#333',
    height: '38px',
    lineHeight: '38px',
  },
};

export const breadcrumbsStyles = {
  frame: {
    backgroundColor: '#545454',
    color: '#fff',
    display: 'flex',
    height: '57px',
    paddingLeft: spacing.desktopGutter / 2,
    paddingRight: spacing.desktopGutter,
    position: 'relative',
    width: '100%',
    zIndex: 1000,
  },
};

export const apiContentStyles = {
  frame: {
    margin: '40px auto',
    textAlign: 'left',
    width: '78%',
    minWidth: '650px',
  },
  title: {
    fontSize: '40px',
    lineHeight: '50px',
    marginTop: '-5px',
    marginBottom: '25px',
    color: '#333',
    fontWeight: 'normal',
    fontFamily: 'Roboto light,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  desc: {
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: '-6px',
    fontFamily: 'Roboto light,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  document: {
    paddingBottom: '35px',
  },
  active: {
    backgroundColor: colors.grey700,
  },
  inactive: {
    backgroundColor: colors.grey500,
  },
};

export const apiDocumentationStyles = {
  frame: {
    padding: '0 20px',
  },
  headline: {
    fontSize: 24,
    margin: '35px 0 12px 0',
    fontWeight: 400,
  },
  tableRow: {
    borderBottom: '2px solid',
    borderColor: colors.deepPurpleA200,
  },
  baseHeaderColumn: {
    color: colors.darkBlack,
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'left',
  },
  baseRowColumn: {
    fontSize: 15,
    whiteSpace: 'normal',
    textOverflow: 'clip',
  },
};

export const apiTesterStyles = {
  frame: {
    padding: '0 20px',
  },
  headline: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export const apiFooterStyles = {
  frame: {
    backgroundColor: '#545454',
    color: '#fff',
    display: 'flex',
    height: '120px',
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    zIndex: 1000,
  },
  a: {
    color: colors.darkWhite,
  },
  p: {
    margin: '0 auto',
    padding: '50px 0',
    color: colors.lightWhite,
  },
  iconButton: {
    color: colors.darkWhite,
  },
};

export const overviewStyles = {
  frame: {
    margin: '40px auto',
    textAlign: 'left',
    width: '78%',
    minWidth: '650px',
  },
  title: {
    fontSize: '40px',
    lineHeight: '50px',
    marginTop: '-5px',
    marginBottom: '25px',
    color: '#333',
    fontWeight: 'normal',
    fontFamily: 'Roboto light,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  desc: {
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: '-6px',
    fontFamily: 'Roboto light,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
};
