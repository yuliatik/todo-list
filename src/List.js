import  {Component} from "react";
import Swal from "sweetalert2";


export class List extends Component {
    state = {
        userInput:"",
        toDoList:[]
    }

    onChangeEvent(e){
        this.setState({userInput:e})
        console.log(e)
        }   
    
    addItem(input){
        if(input === ''){
            Swal.fire({
                title: "I miss something",
                text: "Please add your task for today!",
                icon: "question"
              });
        }
        else{
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList:listArray, userInput:''})
        }        
    }

        crossedWord(event){
        const li = event.target
        li.classList.toggle('crossed');
    }

        deleteItem(){
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList:listArray})
    }  
    
        onFormSubmit(e){
        e.preventDefault();
    }


    render(){
        return (
            <div className="header">
                <form onSubmit ={this.onFormSubmit}>
            <div className="input">
                <input type="text" placeholder="What do you do today?" className="check"
                onChange = {(e) => {this.onChangeEvent(e.target.value)}} 
                value = {this.state.userInput}/>
            </div>
            <div className="click">
                <button onClick = {() => this.addItem(this.state.userInput)} className="btn-add">Add</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index)=>(
                    <li onClick ={this.crossedWord} key={index}>{item}</li>
                ))}
            </ul>
            <div className="click">
                <button onClick = {() => this.deleteItem()}className="btn-delete">Delete</button>
            </div>
            </form>
        </div>
        )  
    }
}

