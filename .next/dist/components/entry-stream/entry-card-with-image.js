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

var _jsxFileName = '/Users/basedjux/Desktop/corbin.life/components/entry-stream/entry-card-with-image.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZW50cnktc3RyZWFtL2VudHJ5LWNhcmQtd2l0aC1pbWFnZS5qcyJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIkNhcmRIZWFkZXIiLCJBdmF0YXIiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiUG9zdEltYWdlQ2FyZCIsInByb3BzIiwicHJldmlld0ltYWdlTGluayIsImltYWdlVGl0bGUiLCJoZWFkbGluZSIsInNob3J0RGVzYyIsInBvc3RMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFRLEFBQWEsQUFBYSxBQUFXOzs7O0FBQ3BELEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBR1AsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsY0FBQSxBQUFDLE9BQUQ7MkJBQ2xCLEFBQUMsZ0NBQUssV0FBTixBQUFnQixpQkFBZ0IsSUFBaEMsQUFBb0MsR0FBRyxJQUF2QyxBQUEyQztzQkFBM0M7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQztnQ0FFRyxBQUFDLGtDQUFPLGNBQVIsQUFBbUIsVUFBUyxLQUE1QixBQUFnQzswQkFBaEM7NEJBRkosQUFFSSxBQUVBO0FBRkE7U0FBQTtlQUZKLEFBSVUsQUFDTjttQkFMSixBQUtjOztzQkFMZDt3QkFESixBQUNJLEFBT0E7QUFQQTtBQUNJLHdCQU1KLEFBQUM7bUJBQUQsQUFDYyxBQUNWO2VBQU8sTUFGWCxBQUVpQixBQUNiO2VBQU8sTUFIWCxBQUdpQjs7c0JBSGpCO3dCQVJKLEFBUUksQUFLQTtBQUxBO0FBQ0ksd0JBSUosQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLFlBQVcsV0FBNUIsQUFBc0M7c0JBQXRDO3dCQUFBLEFBQ0s7QUFETDthQURKLEFBQ0ksQUFDVyxBQUVYLDJCQUFBLEFBQUMsc0NBQVcsV0FBWixBQUFzQjtzQkFBdEI7d0JBQUEsQUFDSztBQURMO2FBakJSLEFBYUksQUFJSSxBQUNXLEFBR2YsNkJBQUEsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxrQ0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixXQUFVLE1BQU0sTUFBcEMsQUFBMEM7c0JBQTFDO3dCQUFBO0FBQUE7T0F2QlUsQUFDbEIsQUFxQkksQUFDSTtBQXZCWixBQThCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJlbnRyeS1jYXJkLXdpdGgtaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jhc2VkanV4L0Rlc2t0b3AvY29yYmluLmxpZmUifQ==