'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\corbin\\Desktop\\corbin.life\\components\\entry-stream\\entry-card-with-image.js';


var PostImageCard = function PostImageCard(props) {
    return _react2.default.createElement(_Card2.default, { className: 'PostImageCard', xs: 6, sm: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_Card.CardHeader, {
        avatar: _react2.default.createElement(_Avatar2.default, { 'aria-label': 'Avatar', src: '/static/i/p.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }),
        title: 'Corbin Matschull',
        subheader: 'November 2, 2017',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement(_Card.CardMedia, {
        className: 'PostImageCard_ImageHeight',
        image: props.previewImageLink,
        title: props.imageTitle,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement(_Card.CardContent, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, props.headline), _react2.default.createElement(_Typography2.default, { component: 'p', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, props.shortDesc)), _react2.default.createElement(_Card.CardActions, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement(_Button2.default, { dense: true, color: 'primary', href: props.postLink, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, 'Read More')));
};

exports.default = PostImageCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGVudHJ5LXN0cmVhbVxcZW50cnktY2FyZC13aXRoLWltYWdlLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiQ2FyZEhlYWRlciIsIkF2YXRhciIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJQb3N0SW1hZ2VDYXJkIiwicHJvcHMiLCJwcmV2aWV3SW1hZ2VMaW5rIiwiaW1hZ2VUaXRsZSIsImhlYWRsaW5lIiwic2hvcnREZXNjIiwicG9zdExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVEsQUFBYSxBQUFhLEFBQVc7Ozs7QUFDcEQsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsT0FBRDsyQkFDbEIsQUFBQyxnQ0FBSyxXQUFOLEFBQWdCLGlCQUFnQixJQUFoQyxBQUFvQyxHQUFHLElBQXZDLEFBQTJDO3NCQUEzQzt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDO2dDQUVHLEFBQUMsa0NBQU8sY0FBUixBQUFtQixVQUFTLEtBQTVCLEFBQWdDOzBCQUFoQzs0QkFGSixBQUVJLEFBRUE7QUFGQTtTQUFBO2VBRkosQUFJVSxBQUNOO21CQUxKLEFBS2M7O3NCQUxkO3dCQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0ksd0JBTUosQUFBQzttQkFBRCxBQUNjLEFBQ1Y7ZUFBTyxNQUZYLEFBRWlCLEFBQ2I7ZUFBTyxNQUhYLEFBR2lCOztzQkFIakI7d0JBUkosQUFRSSxBQUtBO0FBTEE7QUFDSSx3QkFJSixBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLHNDQUFXLE1BQVosQUFBaUIsWUFBVyxXQUE1QixBQUFzQztzQkFBdEM7d0JBQUEsQUFDSztBQURMO2FBREosQUFDSSxBQUNXLEFBRVgsMkJBQUEsQUFBQyxzQ0FBVyxXQUFaLEFBQXNCO3NCQUF0Qjt3QkFBQSxBQUNLO0FBREw7YUFqQlIsQUFhSSxBQUlJLEFBQ1csQUFHZiw2QkFBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGtDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CLFdBQVUsTUFBTSxNQUFwQyxBQUEwQztzQkFBMUM7d0JBQUE7QUFBQTtPQXZCVSxBQUNsQixBQXFCSSxBQUNJO0FBdkJaLEFBOEJBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImVudHJ5LWNhcmQtd2l0aC1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9jb3JiaW4vRGVza3RvcC9jb3JiaW4ubGlmZSJ9