import React, {Component} from 'react'

export default class MutiInput extends Component {
    constructor(props){
        super(props)
        this.state= {
            name: '',
            age: '',
            hobby:''
        }
    }

    Change(e){
        const userValue = e.target.value
        const key = e.target.name
        this.setState({[key]: userValue})
    }

    Submit(e){
        e.preventDefault()
        const JsonData = JSON.stringify(this.state)
        window.alert(JsonData)

    }

    render() {
        const Submit = (e) => this.Submit(e)
        const Change = (e) => this.Change(e)

        return(
            <form onSubmit={Submit}>
                <div><label>
                    Name-----
                    <input name = 'name'
                     type = 'text'
                     value={this.state.name}
                     onChange={Change}/>
                </label></div>

                <div><label>
                    Age-------
                    <input name='age'
                           type='number'
                           value={this.state.age}
                           onChange={Change}/>
                </label></div>

                <div><label>
                    Hobby----
                    <input name ='hobby'
                           type= 'text'
                           value={this.state.hobby}
                           onChange={Change}/>
                </label></div>

                <input type='submit' value='전송' />
            </form>
        )
    }
}