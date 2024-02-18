import {useEffect, useState} from "react";


type LocalStorageValues = {
  [x: string]: number
}

export const useArrValuesBlock = (block: string) => {
  const keys = [`${block}X`, `${block}Y`, `${block}O`, `${block}B`]
  const [values, setValues] = useState<LocalStorageValues>({});

  useEffect(() => {
    const localStorageValues: LocalStorageValues = {};

    keys.forEach(key => {
      let localStorageKey = `${block}-${key[key.length - 1].toLowerCase()}`;
      localStorageValues[key] = Number(localStorage.getItem(localStorageKey));
    });
    setValues(localStorageValues);
  }, [block]);
  return values;
}