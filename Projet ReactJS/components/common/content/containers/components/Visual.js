import React, { Component } from 'react';

class Visual extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
      let render_visual;

      switch(this.props.onlyContent){
        case "0":
                switch(this.props.type){
                  case "img":
                      render_visual=(
                      <div id={this.props.id} draggable="true" onDragStart={this.props.drag} >
                        <div  >
                           <h3>{this.props.id} {this.props.title} {this.props.type} </h3> 
                        </div>
                        <div  >
                            <img id={this.props.id} src={this.props.src} width="100%"/>
                        </div>
                      </div>

                          );
                  break;
                  case "img_url":
                      render_visual=(
                      <div id={this.props.id} draggable="true" onDragStart={this.props.drag} >
                        <div  >
                           <h3>{this.props.id} {this.props.title} {this.props.type} </h3> 
                        </div>
                        <div  >
                            <img id={this.props.id} src={this.props.src} width="100%"/>
                        </div>
                      </div>

                          );
                  break;
                  case "video":
                      render_visual=(
                      <div id={this.props.id} draggable="true" onDragStart={this.props.drag} >
                          <div  >
                             <h3>{this.props.id} {this.props.title} {this.props.type} </h3> 
                          </div>
                          <div  >
                            <iframe id={this.props.id} title={this.props.title} src={this.props.src} width="100%">
                            </iframe>
                          </div>
                        </div>

                          
                          );
                  break;
                  case "web":
                      render_visual=(
                      <div id={this.props.id} draggable="true" onDragStart={this.props.drag} >
                          <div  >
                             <h3>{this.props.id} {this.props.title} {this.props.type} </h3> 
                          </div>
                          <div  >
                            <iframe id={this.props.id} title={this.props.title} src={this.props.src} width="100%">
                            </iframe>                        
                          </div>
                        </div>

                          
                          );
                  break;
                }

        break;
        case "1":
                switch(this.props.type){
                  case "img":
                      render_visual=(
                            <img id={this.props.id} src={this.props.src} width="100%"/>

                          );
                  break;
                  case "img_url":
                      render_visual=(
                            <img id={this.props.id} src={this.props.src} width="100%"/>
                          );
                  break;  
                  case "video":
                      render_visual=(
                            <iframe id={this.props.id} title={this.props.title} src={this.props.src} width="100%">
                            </iframe>  
                        

                          
                          );
                  break;
                  case "web":
                      render_visual=(
                       
                            <iframe id={this.props.id} title={this.props.title} src={this.props.src} width="100%">
                            </iframe>  
                        

                          
                          );
                  break;
                }
        break;
              
        }
      
      
    return (
            <div className="thumbnail">
                {render_visual}
            </div>            
    );
  }
}

export default Visual;