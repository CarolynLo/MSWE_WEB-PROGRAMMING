		function start(){
			class Block extends React.Component{
				constructor(props){
					super(props);
					console.log("Block component created");
				}
				title=this.props.title;
			render(){
					return (
						React.createElement("p",{},"LinkedIn",
							React.createElement("a",
								{href:this.props.href},this.title
								),
							React.createElement("button",{
								onClick:()=>{
									this.title=this.title+" "+"CLICK here to see my profile";
									this.setState({});
								}
							},"GO")
							)
						
						);
				}
			}	
			const rootElement= 
					React.createElement(
						Block,{
							title:"",
							href:"https://www.linkedin.com/in/chien-ju-lo/",
							description:"The home page of Etherient"
						}
						)
					
				;
			ReactDOM.render(rootElement,document.getElementById("Container"));
		}