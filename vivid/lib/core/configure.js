var debug = require('debug')('vivid:core:init');
var _ = require('lodash');
var express = require('express');

function configure(config) {

    debug('Configuring the Vivid CMS App');

    this.port = config.port || 8080;

    this.components = {
        HelloComponent : require('../../component/hello.jsx')
    };

}

module.exports = configure;