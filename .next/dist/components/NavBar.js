'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

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

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\corbin\\Desktop\\corbin.life\\components\\NavBar.js';


var styles = {
    appBar: {
        flexWrap: 'wrap'
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
    return _react2.default.createElement('div', {
        className: 'jsx-1172591039' + ' ' + 'root-AppBar',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement(_AppBar2.default, { position: 'fixed', color: 'default', style: styles.appBar, __source: {
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
    }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'corbin.life')), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/contact', style: styles.gridButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, 'Contact'))))), _react2.default.createElement(_style2.default, {
        styleId: '1172591039',
        css: '.root-AppBar.jsx-1172591039{width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdkJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3dCLEFBR2dDLFdBQ2YiLCJmaWxlIjoiY29tcG9uZW50c1xcTmF2QmFyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2NvcmJpbi9EZXNrdG9wL2NvcmJpbi5saWZlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEJhciBmcm9tICdtYXRlcmlhbC11aS9BcHBCYXInXHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ21hdGVyaWFsLXVpL1Rvb2xiYXInXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudmFyIHN0eWxlcyA9IHtcclxuICAgIGFwcEJhcjoge1xyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCdcclxuICAgIH0sXHJcbiAgICBncmlkQnV0dG9uOiB7XHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgcGFkZGluZzogJzhweCAyNXB4JyxcclxuICAgICAgICBtYXJnaW46ICcwIDVweCdcclxuICAgIH1cclxufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIi9hcmNoaXZlXCIgc3R5bGU9e3N0eWxlcy5ncmlkQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBBcmNoaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIi9cIiBzdHlsZT17c3R5bGVzLmdyaWRCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFN0cmVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9CdXR0b24+XHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3QtQXBwQmFyXCI+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNvbG9yPVwiZGVmYXVsdFwiIHN0eWxlPXtzdHlsZXMuYXBwQmFyfT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yYmluLmxpZmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvY29udGFjdFwiIHN0eWxlPXtzdHlsZXMuZ3JpZEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnJvb3QtQXBwQmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdfQ== */\n/*@ sourceURL=components\\NavBar.js */'
    }));
};

exports.default = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdkJhci5qcyJdLCJuYW1lcyI6WyJBcHBCYXIiLCJUb29sYmFyIiwiQnV0dG9uIiwiR3JpZCIsIlJvdXRlciIsInN0eWxlcyIsImFwcEJhciIsImZsZXhXcmFwIiwiZ3JpZEJ1dHRvbiIsImZsb2F0IiwicGFkZGluZyIsIm1hcmdpbiIsIk5hdkJhciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFJOztrQkFBUyxBQUNELEFBQ00sQUFFZDtBQUhRLEFBQ0osS0FGSyxBQUNUOztlQUdZLEFBQ0QsQUFDUDtpQkFGUSxBQUVDLEFBQ1Q7Z0JBSFEsQUFHQSxBQUlZOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQjVCLEFBQWE7O0FBSUcsQUFDUixZQWFGLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEOzJCQUNQLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDLGtDQUFPLFVBQVIsQUFBaUIsU0FBUSxPQUF6QixBQUErQixXQUFVLE9BQU8sT0FBaEQsQUFBdUQ7c0JBQXZEO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGdDQUFLLFdBQU4sTUFBZ0IsU0FBaEIsQUFBeUI7c0JBQXpCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxJQUFYLEFBQWUsSUFBSSxJQUFuQixBQUF1QjtzQkFBdkI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFjLFdBQVUsTUFBeEIsQUFBNkI7c0JBQTdCO3dCQUFBO0FBQUE7T0FGUixBQUNJLEFBQ0ksQUFJSixpQ0FBQSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxJQUFYLEFBQWUsSUFBSSxJQUFuQixBQUF1QjtzQkFBdkI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFjLFdBQVUsTUFBeEIsQUFBNkIsWUFBVyxPQUFPLE9BQS9DLEFBQXNEO3NCQUF0RDt3QkFBQTtBQUFBO09BVnBCLEFBQ0ksQUFDSSxBQUNJLEFBTUksQUFDSTtpQkFWcEI7YUFETyxBQUNQO0FBQUE7QUFEUixBQTJCQSxDQTNCQTs7a0JBMkJBLEFBQWUiLCJmaWxlIjoiTmF2QmFyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2NvcmJpbi9EZXNrdG9wL2NvcmJpbi5saWZlIn0=