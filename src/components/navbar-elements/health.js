import React, { Component } from 'react'
import { connect } from 'react-redux'
import { health } from '../../store/actions/healthAction'
import moment from 'moment'
const badgeStyle={
    display:"inlineBlock",
    position:"absolute",
    top:"5px",
    right:"15px",
    backgroundColor:"red",
    color:"#fff",
    borderRadius:"15px",
    fontWeight:"bolder",
    wordSpacing:"1px"
}

 class Health extends Component {


    render() {

        const { post }=this.props;
        const healthnewsPost=post? post.map((el)=>{
            return(
                <div className='col l3 m4 s6'>

               
<div className="card"  >
                      <div className="card-image">
                               <a href={el.url} >
                                   <img src={el.urlToImage } height="150" width='100' alt='business-news-img'/>
                               </a>
                              <span className=' badge' style={ badgeStyle } >health</span>
                              
                      </div>

                      <div className="card-content">
                        <a href={el.url}  style={{color:"black"}}>{el.title.slice(0,50)+"..."}</a>
                        <a href={el.url}  style={{color:"black"}}><p style={{color:"orange",fontWeight:"bolder"}}>{  moment(el.publishedAt).fromNow() }</p></a>
                        
                      </div>
                 </div>

            </div>
            )

        }):<p>....loading</p>

        return (
               
            <div style={{marginTop:"50px"}}>
               
                <div className='fluid-container #eceff1 blue-grey lighten-5' style={{height:"",padding:"30px 0 50px"}}>
                   <div className='container'>
                         <div className='row'>

                            { healthnewsPost }
                              
                            </div>
                        </div>
                    </div>
             </div>
        )
    }
}


const mapdataToprops=(state)=>{
    console.log(state)
    return{
       post:state.health.healthPost 
    }
}


const mapdispatchToprops=(dispatch)=>{
    return{
         
         //business:()=>{  dispatch(business()) }
         health:  dispatch(health()) 

    }
}

export default connect(mapdataToprops,mapdispatchToprops)(Health)
