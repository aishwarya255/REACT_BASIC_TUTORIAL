import Rect,{Component} from 'react';
class Welcome extends Component{
    render(){
        return(

            <div>
            <h1>Class {this.props.name} likes {this.props.heroname}</h1>

            </div>

        )
    }


}
export default Welcome;