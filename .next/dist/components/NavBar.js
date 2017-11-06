'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/basedjux/Desktop/corbin.life/components/NavBar.js';


var styles = {
    appBar: {
        flexWrap: 'wrap',
        width: '100%'
    },
    gridButton: {
        float: 'right',
        padding: '8px 25px',
        margin: '0 5px'

        // <Button color="inherit" href="/archive" style={styles.gridButton}>
        //     Archive
        // </Button>
        // <Button color="inherit" href="/" style={styles.gridButton}>
        //     Stream
        // </Button>

    } };var NavBar = function NavBar(props) {
    return _react2.default.createElement(_AppBar2.default, { position: 'fixed', color: 'default', style: styles.appBar, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement(_Toolbar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'corbin.life')), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/contact', style: styles.gridButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, 'Contact')))));
};

exports.default = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIkFwcEJhciIsIlRvb2xiYXIiLCJCdXR0b24iLCJHcmlkIiwiUm91dGVyIiwic3R5bGVzIiwiYXBwQmFyIiwiZmxleFdyYXAiLCJ3aWR0aCIsImdyaWRCdXR0b24iLCJmbG9hdCIsInBhZGRpbmciLCJtYXJnaW4iLCJOYXZCYXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFJOztrQkFDUSxBQUNNLEFBQ1Y7ZUFISyxBQUNELEFBRUcsQUFFWDtBQUpRLEFBQ0osS0FGSyxBQUNUOztlQUlZLEFBQ0QsQUFDUDtpQkFGUSxBQUVDLEFBQ1Q7Z0JBSFEsQUFHQSxBQUlZOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQjVCLEFBQWE7O0FBS0csQUFDUixZQWFGLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEOzJCQUNYLEFBQUMsa0NBQU8sVUFBUixBQUFpQixTQUFRLE9BQXpCLEFBQStCLFdBQVUsT0FBTyxPQUFoRCxBQUF1RDtzQkFBdkQ7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxnQ0FBSyxXQUFOLE1BQWdCLFNBQWhCLEFBQXlCO3NCQUF6Qjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLE1BQVcsSUFBWCxBQUFlLElBQUksSUFBbkI7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFjLFdBQVUsTUFBeEIsQUFBNkI7c0JBQTdCO3dCQUFBO0FBQUE7T0FGUixBQUNJLEFBQ0ksQUFJSixpQ0FBQSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxJQUFYLEFBQWUsSUFBSSxJQUFuQjtzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxrQ0FBTyxPQUFSLEFBQWMsV0FBVSxNQUF4QixBQUE2QixZQUFXLE9BQU8sT0FBL0MsQUFBc0Q7c0JBQXREO3dCQUFBO0FBQUE7T0FWTCxBQUNYLEFBQ0ksQUFDSSxBQU1JLEFBQ0k7QUFWcEIsQUFvQkEsQ0FwQkE7O2tCQW9CQSxBQUFlIiwiZmlsZSI6Ik5hdkJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFzZWRqdXgvRGVza3RvcC9jb3JiaW4ubGlmZSJ9