import { useRef, useEffect } from 'react';

// https://stackoverflow.com/a/53180013/8589328

var useUpdate = (fn, inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
};

var index = { useUpdate };

export { index as hooks };
