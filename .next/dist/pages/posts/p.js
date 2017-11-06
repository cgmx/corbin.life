'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBar = require('../../components/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _PostStream = require('../../components/post-format/PostStream');

var _PostStream2 = _interopRequireDefault(_PostStream);

var _head = require('../../components/head');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/basedjux/Desktop/corbin.life/pages/posts/p.js?entry';


var styles = {
    header: {
        marginTop: '200px'
    }
};

var lorem = 'Bacon ipsum dolor amet pork loin shank lorem dolore enim turkey sirloin duis cow porchetta strip steak shoulder adipisicing. Duis in kielbasa, proident labore chicken tempor lorem beef ribs dolore sed pariatur sunt ullamco drumstick. Beef porchetta pastrami, sausage ball tip pancetta andouille labore sunt prosciutto kielbasa cow capicola in tri-tip. Reprehenderit aliquip ut aute capicola tri-tip adipisicing salami. Ut eu fugiat duis, dolore sed aliquip ribeye ball tip officia deserunt landjaeger.\nNon cow venison ut ipsum prosciutto. Kielbasa minim nisi, eu officia velit incididunt. Pork chop enim swine bacon fatback officia quis ullamco et. Exercitation shank salami, in doner aliqua dolor venison bacon enim. Tenderloin capicola sirloin drumstick burgdoggen sausage. Ipsum turducken quis pork elit, tri-tip est doner ad pork chop. Shankle officia minim, pork chop sed rump consequat meatloaf ex est pastrami flank pork loin.\nIrure non rump incididunt est chicken jowl strip steak tail. Eu ad voluptate pastrami, irure officia nisi bresaola t-bone ex corned beef cow chuck porchetta. Nulla salami landjaeger irure enim, tail t-bone veniam culpa. Strip steak qui brisket, nulla laborum tri-tip pastrami eiusmod cillum andouille meatloaf.\nAliqua shank voluptate, capicola short loin consequat meatloaf jerky elit reprehenderit short ribs occaecat. Kielbasa ea esse proident cupim ad nulla nisi meatball biltong. Leberkas ad kielbasa ball tip officia pork chop swine sint. Tongue ut quis, officia nulla consequat lorem alcatra ut shoulder nostrud. Magna ground round biltong, veniam ut bresaola irure chicken id picanha consequat pancetta sunt doner ipsum.\nTempor mollit consequat deserunt picanha eu. Tri-tip in jerky tongue minim turducken venison cupim. Cow id ground round culpa cupim, short loin pancetta sunt pariatur dolor in velit aliqua nostrud. Dolor ham in, leberkas eu eiusmod flank pork belly do t-bone kevin qui. Est brisket sint in laborum, lorem t-bone commodo dolore occaecat et magna. Strip steak culpa turkey elit beef ribs in, sausage t-bone rump.\nDuis consectetur ball tip ut fugiat irure. Reprehenderit short loin cupidatat, minim cupim pork belly filet mignon pork shankle. Short ribs alcatra cupidatat, sausage adipisicing turducken ground round ut. Beef drumstick landjaeger, biltong quis tempor voluptate. Rump adipisicing cillum cupidatat ex tri-tip labore shank nulla tail kielbasa occaecat porchetta chicken. Jowl andouille et t-bone ham hock.\nBacon ipsum dolor amet pork loin shank lorem dolore enim turkey sirloin duis cow porchetta strip steak shoulder adipisicing. Duis in kielbasa, proident labore chicken tempor lorem beef ribs dolore sed pariatur sunt ullamco drumstick. Beef porchetta pastrami, sausage ball tip pancetta andouille labore sunt prosciutto kielbasa cow capicola in tri-tip. Reprehenderit aliquip ut aute capicola tri-tip adipisicing salami. Ut eu fugiat duis, dolore sed aliquip ribeye ball tip officia deserunt landjaeger.\nNon cow venison ut ipsum prosciutto. Kielbasa minim nisi, eu officia velit incididunt. Pork chop enim swine bacon fatback officia quis ullamco et. Exercitation shank salami, in doner aliqua dolor venison bacon enim. Tenderloin capicola sirloin drumstick burgdoggen sausage. Ipsum turducken quis pork elit, tri-tip est doner ad pork chop. Shankle officia minim, pork chop sed rump consequat meatloaf ex est pastrami flank pork loin.\nIrure non rump incididunt est chicken jowl strip steak tail. Eu ad voluptate pastrami, irure officia nisi bresaola t-bone ex corned beef cow chuck porchetta. Nulla salami landjaeger irure enim, tail t-bone veniam culpa. Strip steak qui brisket, nulla laborum tri-tip pastrami eiusmod cillum andouille meatloaf.\nAliqua shank voluptate, capicola short loin consequat meatloaf jerky elit reprehenderit short ribs occaecat. Kielbasa ea esse proident cupim ad nulla nisi meatball biltong. Leberkas ad kielbasa ball tip officia pork chop swine sint. Tongue ut quis, officia nulla consequat lorem alcatra ut shoulder nostrud. Magna ground round biltong, veniam ut bresaola irure chicken id picanha consequat pancetta sunt doner ipsum.\nTempor mollit consequat deserunt picanha eu. Tri-tip in jerky tongue minim turducken venison cupim. Cow id ground round culpa cupim, short loin pancetta sunt pariatur dolor in velit aliqua nostrud. Dolor ham in, leberkas eu eiusmod flank pork belly do t-bone kevin qui. Est brisket sint in laborum, lorem t-bone commodo dolore occaecat et magna. Strip steak culpa turkey elit beef ribs in, sausage t-bone rump.\nDuis consectetur ball tip ut fugiat irure. Reprehenderit short loin cupidatat, minim cupim pork belly filet mignon pork shankle. Short ribs alcatra cupidatat, sausage adipisicing turducken ground round ut. Beef drumstick landjaeger, biltong quis tempor voluptate. Rump adipisicing cillum cupidatat ex tri-tip labore shank nulla tail kielbasa occaecat porchetta chicken. Jowl andouille et t-bone ham hock.';

exports.default = function () {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement(_NavBar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }), _react2.default.createElement(_PostStream2.default, {
        headlessContent: true,
        headerTitle: 'A Complete Makeover',
        postBody: lorem,
        postBodyAnchor: '#makeover',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzL3AuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwiUG9zdFN0cmVhbSIsIkhlYWRlciIsInN0eWxlcyIsImhlYWRlciIsIm1hcmdpblRvcCIsImxvcmVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBSTs7bUJBQUosQUFBYSxBQUNELEFBQ087QUFEUCxBQUNKO0FBRkssQUFDVDs7QUFLSixJQUFNLFFBQU4sQUFhQTs7a0JBQWUsWUFBQTsyQkFDWCxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEsd0JBQ0EsQUFBQzs7c0JBQUQ7d0JBRkosQUFFSSxBQUNBO0FBREE7QUFBQSx3QkFDQSxBQUFDO3lCQUFELEFBQ3FCLEFBQ2pCO3FCQUZKLEFBRWdCLEFBQ1o7a0JBSEosQUFHYyxBQUNWO3dCQUpKLEFBSW1COztzQkFKbkI7d0JBSk8sQUFDWCxBQUdJO0FBQUE7QUFDSTtBQUxaIiwiZmlsZSI6InAuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jhc2VkanV4L0Rlc2t0b3AvY29yYmluLmxpZmUifQ==