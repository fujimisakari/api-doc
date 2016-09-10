import React from 'react';

import { apiTesterStyles as styles } from '../styles';

const Tester = () => (
  <div style={styles.main}>
    <h2 style={styles.headline}>Controllable Tab B</h2>
    <p>
      This is another example of a controllable tab. Remember, if you
      use controllable Tabs, you need to give all of your tabs values or else
      you wont be able to select them.
    </p>
  </div>
);

export default Tester;
