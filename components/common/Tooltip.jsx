import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ children, content }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  return (
    <>
      {children}
      <ReactTooltip place="bottom" effect="solid">
        {content}
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
