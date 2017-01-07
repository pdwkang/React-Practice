var people = [
    {
        name: 'panda',
        avatarUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWRJ3dqt638s4LP-W9LNYfYJ188PSq9u_t_pHBfpQhHltYwPKf",
        commentHeading: "panda header",
        text: "panda text body",
        date: new Date(),
        userBadge: ['pandaBadge1', 'pandaBadge2', 'pandaBadge3']
    }
]

function formatDate(date){
    // getDate(date)
}

var Application = React.createClass({   //if u wanna render states and stuff)
    render: function(){
            console.log(this.props.Data);
        return(
            <Comment DataTwo={this.props.Data}/>
        )
    }
})

function Comment(props){    //if u dont need state
    return(
    <div className="Comment">
        <UserInfo author={props.DataTwo} />
        <CommentBody DataThree={props.DataTwo} />
        <Badges DataThree={props.DataTwo} />
    </div>
    )
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar author={props.author}/>
            <div className="UserInfo-name">
            {props.author.name}
            </div>
        </div>        
    )
}
function Avatar(props){
    return(
        <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
    )
}
function CommentBody(props){
    return(
        <div className="Comment-body">
            <h1>{props.DataThree.commentHeading}</h1>
            <div className="Comment-text">{props.DataThree.text}</div>
            <div className="Comment-date">
            {formatDate(props.DataThree.date)}
            </div>
        </div>    
    )
}
function Badges(props){
    return(
        <div className="UserBadges">
            <div className="badge">{props.DataThree.userBadge[0]}</div>
            <div className="badge">{props.DataThree.userBadge[1]}</div>
            <div className="badge">{props.DataThree.userBadge[2]}</div>
        </div>

    )
}

ReactDOM.render(
    <Application Data={people[0]}/>, 
    document.getElementById('container')
)
