import NavBar from '../../components/NavBar'
import PostStream from '../../components/post-format/PostStream'
import Header from '../../components/head'

var styles = {
    header: {
        marginTop: '200px'
    }
}

const lorem = `Bacon ipsum dolor amet pork loin shank lorem dolore enim turkey sirloin duis cow porchetta strip steak shoulder adipisicing. Duis in kielbasa, proident labore chicken tempor lorem beef ribs dolore sed pariatur sunt ullamco drumstick. Beef porchetta pastrami, sausage ball tip pancetta andouille labore sunt prosciutto kielbasa cow capicola in tri-tip. Reprehenderit aliquip ut aute capicola tri-tip adipisicing salami. Ut eu fugiat duis, dolore sed aliquip ribeye ball tip officia deserunt landjaeger.
Non cow venison ut ipsum prosciutto. Kielbasa minim nisi, eu officia velit incididunt. Pork chop enim swine bacon fatback officia quis ullamco et. Exercitation shank salami, in doner aliqua dolor venison bacon enim. Tenderloin capicola sirloin drumstick burgdoggen sausage. Ipsum turducken quis pork elit, tri-tip est doner ad pork chop. Shankle officia minim, pork chop sed rump consequat meatloaf ex est pastrami flank pork loin.
Irure non rump incididunt est chicken jowl strip steak tail. Eu ad voluptate pastrami, irure officia nisi bresaola t-bone ex corned beef cow chuck porchetta. Nulla salami landjaeger irure enim, tail t-bone veniam culpa. Strip steak qui brisket, nulla laborum tri-tip pastrami eiusmod cillum andouille meatloaf.
Aliqua shank voluptate, capicola short loin consequat meatloaf jerky elit reprehenderit short ribs occaecat. Kielbasa ea esse proident cupim ad nulla nisi meatball biltong. Leberkas ad kielbasa ball tip officia pork chop swine sint. Tongue ut quis, officia nulla consequat lorem alcatra ut shoulder nostrud. Magna ground round biltong, veniam ut bresaola irure chicken id picanha consequat pancetta sunt doner ipsum.
Tempor mollit consequat deserunt picanha eu. Tri-tip in jerky tongue minim turducken venison cupim. Cow id ground round culpa cupim, short loin pancetta sunt pariatur dolor in velit aliqua nostrud. Dolor ham in, leberkas eu eiusmod flank pork belly do t-bone kevin qui. Est brisket sint in laborum, lorem t-bone commodo dolore occaecat et magna. Strip steak culpa turkey elit beef ribs in, sausage t-bone rump.
Duis consectetur ball tip ut fugiat irure. Reprehenderit short loin cupidatat, minim cupim pork belly filet mignon pork shankle. Short ribs alcatra cupidatat, sausage adipisicing turducken ground round ut. Beef drumstick landjaeger, biltong quis tempor voluptate. Rump adipisicing cillum cupidatat ex tri-tip labore shank nulla tail kielbasa occaecat porchetta chicken. Jowl andouille et t-bone ham hock.
Bacon ipsum dolor amet pork loin shank lorem dolore enim turkey sirloin duis cow porchetta strip steak shoulder adipisicing. Duis in kielbasa, proident labore chicken tempor lorem beef ribs dolore sed pariatur sunt ullamco drumstick. Beef porchetta pastrami, sausage ball tip pancetta andouille labore sunt prosciutto kielbasa cow capicola in tri-tip. Reprehenderit aliquip ut aute capicola tri-tip adipisicing salami. Ut eu fugiat duis, dolore sed aliquip ribeye ball tip officia deserunt landjaeger.
Non cow venison ut ipsum prosciutto. Kielbasa minim nisi, eu officia velit incididunt. Pork chop enim swine bacon fatback officia quis ullamco et. Exercitation shank salami, in doner aliqua dolor venison bacon enim. Tenderloin capicola sirloin drumstick burgdoggen sausage. Ipsum turducken quis pork elit, tri-tip est doner ad pork chop. Shankle officia minim, pork chop sed rump consequat meatloaf ex est pastrami flank pork loin.
Irure non rump incididunt est chicken jowl strip steak tail. Eu ad voluptate pastrami, irure officia nisi bresaola t-bone ex corned beef cow chuck porchetta. Nulla salami landjaeger irure enim, tail t-bone veniam culpa. Strip steak qui brisket, nulla laborum tri-tip pastrami eiusmod cillum andouille meatloaf.
Aliqua shank voluptate, capicola short loin consequat meatloaf jerky elit reprehenderit short ribs occaecat. Kielbasa ea esse proident cupim ad nulla nisi meatball biltong. Leberkas ad kielbasa ball tip officia pork chop swine sint. Tongue ut quis, officia nulla consequat lorem alcatra ut shoulder nostrud. Magna ground round biltong, veniam ut bresaola irure chicken id picanha consequat pancetta sunt doner ipsum.
Tempor mollit consequat deserunt picanha eu. Tri-tip in jerky tongue minim turducken venison cupim. Cow id ground round culpa cupim, short loin pancetta sunt pariatur dolor in velit aliqua nostrud. Dolor ham in, leberkas eu eiusmod flank pork belly do t-bone kevin qui. Est brisket sint in laborum, lorem t-bone commodo dolore occaecat et magna. Strip steak culpa turkey elit beef ribs in, sausage t-bone rump.
Duis consectetur ball tip ut fugiat irure. Reprehenderit short loin cupidatat, minim cupim pork belly filet mignon pork shankle. Short ribs alcatra cupidatat, sausage adipisicing turducken ground round ut. Beef drumstick landjaeger, biltong quis tempor voluptate. Rump adipisicing cillum cupidatat ex tri-tip labore shank nulla tail kielbasa occaecat porchetta chicken. Jowl andouille et t-bone ham hock.`

export default () => (
    <div>
        <Header />
        <NavBar />
        <PostStream 
            headlessContent={true}
            headerTitle="A Complete Makeover"
            postBody={lorem}
            postBodyAnchor="#makeover"
            />
    </div>
)