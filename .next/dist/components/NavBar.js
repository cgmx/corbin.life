'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/basedjux/Desktop/corbin.life/components/NavBar.js';


var styles = {
    appBar: {
        flexWrap: 'wrap'
    }
};

var NavBar = function NavBar(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-1172591039' + ' ' + 'root-AppBar',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_AppBar2.default, { position: 'fixed', color: 'default', style: styles.appBar, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_Toolbar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'corbin.life')), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, 'Stream'), _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/archive', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, 'Archive'), _react2.default.createElement(_Button2.default, { color: 'inherit', href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, 'Contact'))))), _react2.default.createElement(_style2.default, {
        styleId: '1172591039',
        css: '.root-AppBar.jsx-1172591039{width:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IsQUFHZ0MsV0FDZiIsImZpbGUiOiJjb21wb25lbnRzL05hdkJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFzZWRqdXgvRGVza3RvcC9jb3JiaW4ubGlmZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJ1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnbWF0ZXJpYWwtdWkvVG9vbGJhcidcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xuaW1wb3J0IEdyaWQgZnJvbSAnbWF0ZXJpYWwtdWkvR3JpZCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbnZhciBzdHlsZXMgPSB7XG4gICAgYXBwQmFyOiB7XG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgICB9XG59XG5cbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3QtQXBwQmFyXCI+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjb2xvcj1cImRlZmF1bHRcIiBzdHlsZT17c3R5bGVzLmFwcEJhcn0+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yYmluLmxpZmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvYXJjaGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmNoaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnJvb3QtQXBwQmFyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXX0= */\n/*@ sourceURL=components/NavBar.js */'
    }));
};

exports.default = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIkFwcEJhciIsIlRvb2xiYXIiLCJCdXR0b24iLCJHcmlkIiwiUm91dGVyIiwic3R5bGVzIiwiYXBwQmFyIiwiZmxleFdyYXAiLCJOYXZCYXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBSTs7a0JBQUosQUFBYSxBQUNELEFBQ007QUFETixBQUNKO0FBRkssQUFDVDs7QUFLSixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEOzJCQUNQLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDLGtDQUFPLFVBQVIsQUFBaUIsU0FBUSxPQUF6QixBQUErQixXQUFVLE9BQU8sT0FBaEQsQUFBdUQ7c0JBQXZEO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGdDQUFLLFdBQU4sTUFBZ0IsU0FBaEIsQUFBeUI7c0JBQXpCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxJQUFYLEFBQWUsSUFBSSxJQUFuQixBQUF1QjtzQkFBdkI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFjLFdBQVUsTUFBeEIsQUFBNkI7c0JBQTdCO3dCQUFBO0FBQUE7T0FGUixBQUNJLEFBQ0ksQUFJSixpQ0FBQSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxJQUFYLEFBQWUsSUFBSSxJQUFuQixBQUF1QjtzQkFBdkI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFjLFdBQVUsTUFBeEIsQUFBNkI7c0JBQTdCO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBR0EsMkJBQUEsQUFBQyxrQ0FBTyxPQUFSLEFBQWMsV0FBVSxNQUF4QixBQUE2QjtzQkFBN0I7d0JBQUE7QUFBQTtPQUpKLEFBSUksQUFHQSw0QkFBQSxBQUFDLGtDQUFPLE9BQVIsQUFBYyxXQUFVLE1BQXhCLEFBQTZCO3NCQUE3Qjt3QkFBQTtBQUFBO09BaEJwQixBQUNJLEFBQ0ksQUFDSSxBQU1JLEFBT0k7aUJBaEJwQjthQURPLEFBQ1A7QUFBQTtBQURSLEFBZ0NBOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5hdkJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFzZWRqdXgvRGVza3RvcC9jb3JiaW4ubGlmZSJ9