# Node Include 2

Simple module to require files by path related to root directory.

## Initialization

**Example**

  var include = require('include2');
  include.init({
    root: __dirname
  });
  
**Options**

root — path to root dir (by default it is parent directory of node_modules)
extension — files extendsion (by defaut .js)

## Usage

  var incldue = require('include2'),
    MainController = include('controllers/MainController');
