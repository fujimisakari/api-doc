import React from 'react';

const styles = {
  main: {
    padding: '0 20px',
  },
  headline: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: 400,
  },
};

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
