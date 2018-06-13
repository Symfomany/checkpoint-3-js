import React, { Component } from 'react';
import datas from '../datas.json';


const Provider = WrapComponent =>
    class extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                data:datas
            };
            this.delete = this.delete.bind(this);
            this.update = this.update.bind(this);
        }


        delete(el){
            this.setState(prevState => 
                ({data : prevState.data.filter(item => item !== el)}))
        }

        update(el){
            this.setState(prevState =>
                ({data:[
                    el,
                    ...prevState.data
                ]}))
        }

        render() {
            return (
                <WrapComponent data={this.state.data} delete={this.delete} update={this.update} />
            );
        }
    }
    


export default Provider;