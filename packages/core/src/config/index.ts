interface IConfig {
  allowFontScaling: boolean;
}

let config: IConfig = {
  allowFontScaling: true,
};

export const setConfig = (newConfig: typeof config) => {
  config = newConfig;
};
export const getConfig = () => config;
