'use strict';

require('@babel/register');
const webpackMerge = require('webpack-merge');

const common = require('./config/webpack/webpack.common.babel');

const envs = {
    development: 'dev',
    production: 'prod'
};

const getEnv = () => {
    if (!!process.env && !!process.env.NODE_ENV) return envs[process.env.NODE_ENV];
    return envs.development;
};

/* eslint-disable global-require,import/no-dynamic-require */
const env = getEnv();
const envConfig = require(`./config/webpack/webpack.${env}.babel`);
module.exports = webpackMerge(common, envConfig);
