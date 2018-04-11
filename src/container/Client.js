import React,{Component} from 'react'
import {fetchUser} from '../actions'
import {connect} from 'react-redux'

class Form extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    const {user} = this.props
    console.log(user)
    return (
      <div>
        <ul>
          {
            user.map(data=>{
              return (
                <UserItem {...data}/>
              )
            })
          }
        </ul>
        <form action="http://localhost:3000/api/user" method="post">
          <div class="form-create">
            <label for="">name</label>
            <input type="text" name="name"/>
              <label for="">surname</label>
              <input type="text" name="surname"/>
                <label for="">job</label>
                <input type="text" name="job"/>
                  <input type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}

const UserItem = (props)=>{
  const {name,surname,job} = props

  return (
    <div>
    <li>{name}</li>
      <li>{surname}</li>
      <li>{job}</li>
    </div>
    
  )
}
const mapStateToProps =({user})=>{
  return {
    user
  }
}
export default connect(mapStateToProps,{fetchUser})(Form);