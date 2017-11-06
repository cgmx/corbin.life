'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = require('material-ui/styles');

var _colors = require('material-ui/colors');

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/basedjux/Desktop/corbin.life/components/post-format/PostStream.js';


var styles = {
    root: {
        flexGrow: 1,
        marginTop: 120
    },
    rootPaper: {
        padding: 15,
        marginTop: 'theme.spacing.unit * 3'
    },
    header: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    headerAuthorTag: {
        color: 'rgba(0, 0, 0, 0.54)',
        padding: '0 0 20px 0'
    },
    anchorLink: {
        margin: 10,
        opacity: 0
    },
    svgIcon: {
        width: 20,
        fill: _colors.grey[200]
    },
    postContent: {
        fontSize: '13pt'
    }
};

function RenderImagelessContent(props) {
    var gridItemState = {
        direction: 'column',
        justify: 'center',
        alignItems: 'center'
    };
    return _react2.default.createElement(_Grid2.default, {
        container: true,
        style: styles.root,
        direction: gridItemState.direction,
        justify: gridItemState.justify,
        alignItems: gridItemState.alignItems,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement(_Grid2.default, { item: true, sm: 8, xs: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, _react2.default.createElement(_Paper2.default, {
        style: styles.rootPaper,
        elevation: 0,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement(_Typography2.default, {
        id: 'permalink-container',
        type: 'display3',
        style: styles.header,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, props.PostTitle, _react2.default.createElement('a', { id: 'permalink-anchor', href: props.PermaLinkAnchor, style: styles.anchorLink, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement('svg', { viewBox: '0 0 48 48', xmlns: 'http://w3.org/2000/svg', style: styles.svgIcon, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('path', { d: 'M46.9 13.9c-.5-.6-1.2-.94-2.07-.94h-6.67l1.86-8.98c.17-.85 0-1.7-.52-2.3-.48-.6-1.2-.94-2.07-.94-1.6 0-3.2 1.27-3.54 2.93l-.5 2.42c0 .07-.07.13-.07.2l-1.37 6.62H20.7l1.88-8.96c.16-.85 0-1.7-.53-2.3-.48-.6-1.2-.94-2.07-.94-1.65 0-3.2 1.27-3.56 2.93l-.52 2.58v.08l-1.37 6.64H7.3c-1.67 0-3.22 1.3-3.58 2.96-.16.86 0 1.7.52 2.3.48.6 1.2.93 2.07.93h6.97l-2 9.65H4c-1.67 0-3.22 1.27-3.56 2.94-.2.8 0 1.67.5 2.27.5.6 1.2.93 2.08.93H10l-1.84 9.05c-.2.84 0 1.67.52 2.3.5.6 1.25.92 2.08.92 1.66 0 3.2-1.3 3.55-2.94l1.94-9.33h11.22l-1.87 9.05c-.15.84.03 1.67.53 2.3.5.6 1.2.92 2.07.92 1.65 0 3.22-1.3 3.56-2.94l1.9-9.33h7c1.6 0 3.2-1.28 3.53-2.93.2-.87 0-1.7-.52-2.3-.48-.62-1.2-.96-2.05-.96h-6.7l2.02-9.65h6.93c1.67 0 3.22-1.27 3.56-2.92.2-.85 0-1.7-.5-2.3l-.04.03zM17.53 28.77l1.95-9.65H30.7l-1.97 9.66H17.5h.03z', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    })))), _react2.default.createElement(_Typography2.default, { type: 'subheading', style: styles.headerAuthorTag, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, 'by Corbin Matschull'), _react2.default.createElement(_Typography2.default, { type: 'body1', style: styles.postContent, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }, props.PostBody))));
}

function RenderImageContent() {}

var PostStream = function (_Component) {
    (0, _inherits3.default)(PostStream, _Component);

    function PostStream(props) {
        (0, _classCallCheck3.default)(this, PostStream);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PostStream.__proto__ || (0, _getPrototypeOf2.default)(PostStream)).call(this, props));

        _this.isHeadlessContent = _this.props.headlessContent;

        _this.state = {
            //  Default header image state to false for continuity
            hasHeaderImage: false
        };
        return _this;
    }

    (0, _createClass3.default)(PostStream, [{
        key: 'render',
        value: function render() {
            if (this.isHeadlessContent) {
                return _react2.default.createElement(RenderImagelessContent, {
                    PostTitle: this.props.headerTitle,
                    PostBody: this.props.postBody,
                    PermaLinkAnchor: this.props.postBodyAnchor,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                    }
                });
            }
            if (!this.isHeadlessContent) {
                return _react2.default.createElement(RenderImageContent, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                    }
                });
            }
        }
    }]);

    return PostStream;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(PostStream);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9zdC1mb3JtYXQvUG9zdFN0cmVhbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJ3aXRoU3R5bGVzIiwiZ3JleSIsIlRvb2x0aXAiLCJzdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJtYXJnaW5Ub3AiLCJyb290UGFwZXIiLCJwYWRkaW5nIiwiaGVhZGVyIiwiY29sb3IiLCJoZWFkZXJBdXRob3JUYWciLCJhbmNob3JMaW5rIiwibWFyZ2luIiwib3BhY2l0eSIsInN2Z0ljb24iLCJ3aWR0aCIsImZpbGwiLCJwb3N0Q29udGVudCIsImZvbnRTaXplIiwiUmVuZGVySW1hZ2VsZXNzQ29udGVudCIsInByb3BzIiwiZ3JpZEl0ZW1TdGF0ZSIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJhbGlnbkl0ZW1zIiwiUG9zdFRpdGxlIiwiUGVybWFMaW5rQW5jaG9yIiwiUG9zdEJvZHkiLCJSZW5kZXJJbWFnZUNvbnRlbnQiLCJQb3N0U3RyZWFtIiwiaXNIZWFkbGVzc0NvbnRlbnQiLCJoZWFkbGVzc0NvbnRlbnQiLCJzdGF0ZSIsImhhc0hlYWRlckltYWdlIiwiaGVhZGVyVGl0bGUiLCJwb3N0Qm9keSIsInBvc3RCb2R5QW5jaG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNOztrQkFDSSxBQUNRLEFBQ1Y7bUJBSE8sQUFDTCxBQUVTLEFBRWY7QUFKTSxBQUNGOztpQkFHTyxBQUNFLEFBQ1Q7bUJBUE8sQUFLQSxBQUVJLEFBRWY7QUFKVyxBQUNQOztlQU5PLEFBU0gsQUFDRyxBQUVYO0FBSFEsQUFDSjs7ZUFFYSxBQUNOLEFBQ1A7aUJBZE8sQUFZTSxBQUVKLEFBRWI7QUFKaUIsQUFDYjs7Z0JBR1EsQUFDQSxBQUNSO2lCQWxCTyxBQWdCQyxBQUVDLEFBRWI7QUFKWSxBQUNSOztlQUdLLEFBQ0UsQUFDUDtjQUFNLGFBdEJDLEFBb0JGLEFBRUMsQUFBSyxBQUVmO0FBSlMsQUFDTDs7a0JBckJSLEFBQWUsQUF3QkUsQUFDQztBQURELEFBQ1Q7QUF6Qk8sQUFDWDs7QUE4QkosU0FBQSxBQUFTLHVCQUFULEFBQWdDLE9BQU8sQUFDbkM7UUFBTTttQkFBZ0IsQUFDUCxBQUNYO2lCQUZrQixBQUVULEFBQ1Q7b0JBSEosQUFBc0IsQUFHTixBQUVoQjtBQUxzQixBQUNsQjsyQkFLQSxBQUFDO21CQUFELEFBRUk7ZUFBTyxPQUZYLEFBRWtCLEFBQ2Q7bUJBQVcsY0FIZixBQUc2QixBQUN6QjtpQkFBUyxjQUpiLEFBSTJCLEFBQ3ZCO29CQUFZLGNBTGhCLEFBSzhCOztzQkFMOUI7d0JBQUEsQUFPSTtBQVBKO0FBQ0ksS0FESixrQkFPSSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxJQUFYLEFBQWUsR0FBRyxJQUFsQixBQUFzQjtzQkFBdEI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUM7ZUFDVSxPQURYLEFBQ2tCLEFBQ2Q7bUJBRkosQUFFZTs7c0JBRmY7d0JBQUEsQUFJSTtBQUpKO0FBQ0ksdUJBR0EsQUFBQztZQUFELEFBQ08sQUFDSDtjQUZKLEFBRVMsQUFDTDtlQUFPLE9BSFgsQUFHa0I7O3NCQUhsQjt3QkFBQSxBQUtLO0FBTEw7QUFDSSxhQURKLEFBS1csQUFFUCwyQkFBQSxjQUFBLE9BQUcsSUFBSCxBQUFNLG9CQUFtQixNQUFNLE1BQS9CLEFBQXFDLGlCQUFpQixPQUFPLE9BQTdELEFBQW9FO3NCQUFwRTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFNBQUwsQUFBYSxhQUFZLE9BQXpCLEFBQStCLDBCQUF5QixPQUFPLE9BQS9ELEFBQXNFO3NCQUF0RTt3QkFBQSxBQUNJO0FBREo7K0NBQ1UsR0FBTixBQUFRO3NCQUFSO3dCQWJoQixBQUlJLEFBT0ksQUFDSSxBQUNJLEFBS1o7QUFMWTsyQkFLWixBQUFDLHNDQUFXLE1BQVosQUFBaUIsY0FBYSxPQUFPLE9BQXJDLEFBQTRDO3NCQUE1Qzt3QkFBQTtBQUFBO09BbEJKLEFBa0JJLEFBR0Esd0NBQUEsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLFNBQVEsT0FBTyxPQUFoQyxBQUF1QztzQkFBdkM7d0JBQUEsQUFDSztBQURMO2FBOUJoQixBQUNJLEFBT0ksQUFDSSxBQXFCSSxBQUNXLEFBTTlCOzs7QUFFRCxTQUFBLEFBQVMscUJBQXFCLEFBRTdCOztJLEFBRUs7d0NBR0Y7O3dCQUFBLEFBQVksT0FBTzs0Q0FBQTs7a0pBQUEsQUFDVDs7Y0FIVixBQUVtQixvQkFGQyxNQUFBLEFBQUssTUFBTSxBQUVaLEFBR2Y7O2NBQUEsQUFBSztBQUVEOzRCQUxXLEFBR2YsQUFBYSxBQUVPO0FBRlAsQUFDVDtlQUdQOzs7OztpQ0FHUSxBQUNMO2dCQUFHLEtBQUgsQUFBUSxtQkFBbUIsQUFDdkI7cURBQU8sQUFBQzsrQkFDZSxLQUFBLEFBQUssTUFEckIsQUFDMkIsQUFDdEI7OEJBQVUsS0FBQSxBQUFLLE1BRnBCLEFBRTBCLEFBQ3JCO3FDQUFpQixLQUFBLEFBQUssTUFIM0IsQUFHaUM7O2tDQUhqQztvQ0FBUCxBQUFPLEFBS1Y7QUFMVTtBQUNLLGlCQURMO0FBTVg7Z0JBQUcsQ0FBQyxLQUFKLEFBQVMsbUJBQW1CLEFBQ3hCO3FEQUFPLEFBQUM7O2tDQUFEO29DQUFQLEFBQU8sQUFDVjtBQURVO0FBQUEsaUJBQUE7QUFFZDs7Ozs7QUF4Qm9CLEFBMkJ6QixBOztrQkFBZSx3QkFBQSxBQUFXLFFBQTFCLEFBQWUsQUFBb0IiLCJmaWxlIjoiUG9zdFN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFzZWRqdXgvRGVza3RvcC9jb3JiaW4ubGlmZSJ9