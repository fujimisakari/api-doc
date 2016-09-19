import { connect } from 'react-redux';

import NaviMenu from '../components/NaviMenu';

// const stab = [
//   { methodGroup: 'channels',
//     methodItems: [
//       'archive',
//       'create',
//       'history',
//       'info',
//       'invite',
//       'join',
//       'kick',
//       'leave',
//     ],
//   },
//   { methodGroup: 'chat',
//     methodItems: [
//       'delete',
//       'meMessage',
//       'postMessage',
//       'update',
//     ],
//   },
//   { methodGroup: 'users',
//     methodItems: [
//       'getPresence',
//       'identity',
//       'info',
//       'list',
//       'setActive',
//       'setPresence',
//     ],
//   },
// ];

const mapStateToProps = (state) => {
  console.log(state.document);
  if (Object.keys(state.document.data).length === 0) {
    return { methodInfoList: [{ group: '', methods: [] }] };
  }
  return { methodInfoList: state.document.data.apiMethods };
};

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaviMenu);
